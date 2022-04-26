import type { AppProps } from 'next/app';
import { GA_TRACKING_ID, pageview } from '../lib/gtag';
import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
