import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";
import "../styles/globals.css";
import { colors } from "../styles/colors";
import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader";
import { useEffect, useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const [hasLoaded, setHasLoaded] = useState(false);
  //fix to fix the issue of the page flashing before the session is loaded
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <SessionProvider session={session}>
      {hasLoaded && (
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              ...colors,
            },
            fontFamily: "Inter, sans-serif",
          }}
        >
          <AppShell
            unstyled={router.pathname === "/"}
            padding="md"
            header={
              router.pathname !== "/" ? (
                <Header height={60}>
                  <AppHeader />
                </Header>
              ) : undefined
            }
          >
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
