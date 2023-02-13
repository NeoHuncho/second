import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";
import "../styles/globals.css";
import { colors } from "../styles/colors";
import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
