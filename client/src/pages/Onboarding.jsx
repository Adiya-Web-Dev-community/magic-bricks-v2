import { useState } from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Onboarding = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <>
      <header className="relative">
        <figure className="h-[calc(100vh-4rem)] w-full bg-slate-900 bg-[url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center"></figure>
        <div className="absolute h-[calc(100vh-4rem)] w-full top-0 bg-black/50">
          <main className="absolute h-fit w-fit top-0 bottom-0 my-auto left-0 right-0 mx-auto font-serif">
            <section className="rounded-lg bg-white/90 space-y-5 p-5 pt-6">
              {signIn ? (
                <SignIn setSignIn={setSignIn} />
              ) : (
                <SignUp setSignIn={setSignIn} />
              )}
            </section>
          </main>
        </div>
      </header>
    </>
  );
};

export default Onboarding;
