import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Grid } from '@nextui-org/react';
import Head from 'next/head';

import Editor from '@monaco-editor/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explain from '../components/Explain';
import Diff from '../components/Diff';
import Language from '../components/Language';
import Share from '../components/Share';
import Welcome from '../components/Welcome';
let socket: any;

const Home: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [values, setValues] = useState<any>({
    lang: 'javascript',
    rcode: '',
    lcode: '',
    token: '',
  });
  const [timerId, setTimerId] = useState<any>(null);
  const [update, setUpdate] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const newToken = Math.random().toString(32).substring(2);

  // 入力してから１秒後に送信
  const debounce = (fn: Function, bufferInterval = 1000) => {
    return () => {
      clearTimeout(timerId);
      let timer = setTimeout(() => {
        fn();
      }, bufferInterval);
      setTimerId(timer);
    };
  };

  // 値が変更されたときの処理
  const handleChange = (value: any, type: string) => {
    if (type === 'left') {
      setValues((values: object) => ({ ...values, lcode: value }));
      if (update) {
        debounce(() => {
          socket.emit('change', { ...values, lcode: value });
        })();
      }
    } else if (type === 'right') {
      setValues((values: object) => ({ ...values, rcode: value }));
      if (update) {
        debounce(() => {
          socket.emit('change', { ...values, rcode: value });
        })();
      }
    }
  };

  useEffect(() => {
    if (!token) return;
    setValues((values: object) => ({ ...values, token: token }));

    // socket.ioの接続
    fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
      setUpdate(false);
      socket.emit('join', token);
    });

    socket.on('update', (value: any) => {
      if (value.token == token) {
        setUpdate(false);
        setValues(value);
        setUpdate(true);
      }
    });

    socket.on('welcome', (value: any) => {
      if (value == token) setVisible(true);
      setUpdate(true);
    });
  }, [token]);

  return (
    <>
      <Head>
        <title>Diff_Sync_Code</title>
      </Head>
      <Header />
      <Grid.Container gap={3}>
        <Welcome
          visible={visible}
          onClick={(bool?: boolean) => {
            if (bool) socket.emit('change', values);
            else window.location.href = '/' + newToken;
            setVisible(false);
          }}
        />
        <Grid xs={12}>
          <Language
            lang={values.lang}
            onChange={(value: string) => {
              setValues((values: object) => ({ ...values, lang: value }));
              socket.emit('change', { ...values, lang: value });
            }}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <Editor
            theme='vs-dark'
            height='50vh'
            language={values.lang}
            value={values.lcode}
            onChange={(value: any) => handleChange(value, 'left')}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <Editor
            theme='vs-dark'
            height='50vh'
            language={values.lang}
            value={values.rcode}
            onChange={(value: any) => handleChange(value, 'right')}
          />
        </Grid>
        <Grid xs={12}>
          <Diff lang={values.lang} rcode={values.rcode} lcode={values.lcode} />
        </Grid>
        <Grid xs={12} sm={6}>
          <Explain />
        </Grid>
        <Grid xs={12} sm={6}>
          <Share
            url={'https://diff-sync-code.up.railway.app/' + token}
            text={'コード比較しませんか？'}
          />
        </Grid>
      </Grid.Container>
      <Footer />
    </>
  );
};

export default Home;
