'use client'

import {
  AppConfig,
  showConnect,
  type UserData,
  UserSession,
} from "@stacks/connect";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const appDetails = {
  name: "KINETIC",
  icon: "https://cryptologos.cc/logos/stacks-stx-logo.png",
};

const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });

export function useStacks() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  function connectWallet() {
    showConnect({
      appDetails,
      onFinish: () => {
        // Don't reload - handle auth flow properly
        if (userSession.isUserSignedIn()) {
          const userData = userSession.loadUserData();
          setUserData(userData);
          // Route to dashboard after successful connection
          router.push('/dashboard');
        }
      },
      userSession,
    });
  }

  function disconnectWallet() {
    userSession.signUserOut();
    setUserData(null);
    // Route back to home after disconnect
    router.push('/');
  }

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
        // Route to dashboard after pending sign-in completes
        router.push('/dashboard');
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, [router]);

  return {
    userData,
    connectWallet,
    disconnectWallet,
  };
}