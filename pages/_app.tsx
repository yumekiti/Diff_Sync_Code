import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Diff_Sync_Code</title>
        <meta
          name='description'
          content='MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです'
        />
        <meta property='og:title' content='Diff_Sync_Code' />
        <meta
          property='og:description'
          content='MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://diff-sync-code.up.railway.app/' />
        <meta property='og:image' content='./icon.png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='400' />
        <meta property='og:locale' content='ja_JP' />
        <meta property='og:site_name' content='Diff_Sync_Code' />

        {/* ビューポート */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        {/* ツイッタ */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@yumekiti1204' />
        <meta name='twitter:title' content='Diff_Sync_Code' />
        <meta
          name='twitter:description'
          content='MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです'
        />
        <meta name='twitter:image' content='./icon.png' />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
