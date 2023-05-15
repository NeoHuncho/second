import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { api } from "../utils/api";
import "../styles/globals.css";
import { colors } from "../styles/colors";
import { AppShell, Footer, Header, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import AppHeader from "../components/header/AppHeader";
import { useEffect, useState } from "react";
import { NotificationsProvider } from "@mantine/notifications";
import useResetFilters from "../hooks/search/useResetFilters";
import useBreakpoints from "../hooks/ui/useBreakpoints";
import MobileFooter from "../components/footer/MobileFooter";
import MobileSearchHeader from "../components/header/MobileSearchHeader";
import useLocalStorage from "../stores/useLocalStorage";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { isMobile } = useBreakpoints();
  const { theme } = useLocalStorage();
  const isSearchPage = router.pathname === "/search";
  const isIndexPage = router.pathname === "/";

  useResetFilters();
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
                <>
                  {!isMobile && !isIndexPage && (
                    <Header height={65}>
                      <AppHeader />
                    </Header>
                  )}
                  {isMobile && isSearchPage && (
                    <Header height={105}>
                      <MobileSearchHeader />
                    </Header>
                  )}
                </>
              }
              footer={
                isMobile ? (
                  <Footer className="flex w-full items-center" height={60}>
                    <MobileFooter />
                  </Footer>
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
