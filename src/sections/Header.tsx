"use client";

import ClassLogo from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      const { data: authData } = await supabase.auth.getUser();
      const currentUser = authData.user;
      setUser(currentUser);

      // 🔑 Fetch username from Users_Table if logged in
      if (currentUser) {
        const { data: userData, error } = await supabase
          .from("Users_Table")
          .select("username")
          .eq("id", currentUser.id)
          .single();

        if (!error && userData) setUsername(userData.username);
      }
    }

    loadUser();

    // Listen for login/logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);

        if (session?.user) {
          const { data: userData } = await supabase
            .from("Users_Table")
            .select("username")
            .eq("id", session.user.id)
            .single();
          setUsername(userData?.username ?? null);
        } else {
          setUsername(null);
        }
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="py-4 sticky top-0 z-10 border-b-2 border-white/15 md:border-none backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur-2xl">
          <div className="absolute inset-0 backdrop-blur -z-10"></div>

          <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
            <ClassLogo className="h-6 w-6" />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex">
            <nav className="flex gap-8 text-white/70 hover:text-white">
              <a href="#" className="hover:text-white transition-all">Features</a>
              <a href="#" className="hover:text-white transition-all">Students</a>
              <a href="#" className="hover:text-white transition-all">Teachers</a>
              <a href="#" className="hover:text-white transition-all">Pricing</a>
            </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <span className="text-white/80 text-sm">
                  {username ?? user.email}
                </span>
                <Button
                  onClick={async () => {
                    await supabase.auth.signOut();
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
