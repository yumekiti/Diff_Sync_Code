import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          {CssBaseline.flush()}

          <title>Diff_Sync_Code</title>
          <meta name="description" content="MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです" />
          <meta property="og:title" content='Diff_Sync_Code' />
          <meta property="og:description" content="MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content='https://diff-sync-code.up.railway.app/' />
          <meta property="og:image" content='./icon.png' />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <meta property="og:locale" content="ja_JP"  />
          <meta property="og:site_name" content="Diff_Sync_Code" />
          
          {/* ビューポート */}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          {/* ツイッタ */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yumekiti1204" />
          <meta name="twitter:title" content="Diff_Sync_Code" />
          <meta name="twitter:description" content="MonacoEditorのDiffEditorを使ってコードを比較しエラーを探すことのできるアプリです" />
          <meta name="twitter:image" content="./icon.png" />  

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon.ico"
          />
          <link rel="shortcut icon" href="./favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
