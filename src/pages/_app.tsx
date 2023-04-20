import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { api } from "../utils/api";
import "../styles/globals.css";
import { colors } from "../styles/colors";
import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [theme] = useLocalStorage({
    key: "color-scheme",
  });
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
            colorScheme: theme === "dark" ? "dark" : "light",
            colors: {
              ...colors,
            },
            fontFamily: "Inter, sans-serif",
          }}
        >
          <NotificationsProvider>
            <AppShell
              unstyled={router.pathname === "/"}
              padding="md"
              header={
                router.pathname !== "/" ? (
                  <Header height={65}>
                    <AppHeader />
                  </Header>
                ) : undefined
              }
            >

              <Component {...pageProps} />
              <Analytics />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
