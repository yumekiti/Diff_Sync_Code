import type { NextPage } from 'next';
import { Grid, Spacer } from '@nextui-org/react';
import Editor from '@monaco-editor/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explain from '../components/Explain';
import Diff from '../components/Diff';
import Language from '../components/Language';
import Share from '../components/Share';
import Name from '../components/Name';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
let socket: any;

const Home: NextPage = () => {
  const [values, setValues] = useState({
    lang: 'javascript',
    rcode: '',
    lcode: '',
    name: 'no_name',
  });

  useEffect(() => {
    fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('update-input', (value: any) => {
      setValues(value);
    });
  }, []);

  return (
    <>
      <Header />
      <Grid.Container gap={3}>
        <Grid xs={6}>
          <Name name={values.name}
            onChange={(value: string) => {
              setValues({ ...values, name: value })
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Language
            lang={values.lang}
            onChange={(value: string) => {
              setValues({ ...values, lang: value });
              socket.emit('input-change', { ...values, lang: value });
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Editor
            theme='vs-dark'
            height='50vh'
            language={values.lang}
            value={values.lcode}
            onChange={(value: any) => {
              setValues({ ...values, lcode: value });
              socket.emit('input-change', { ...values, lcode: value });
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Editor
            theme='vs-dark'
            height='50vh'
            language={values.lang}
            value={values.rcode}
            onChange={(value: any) => {
              setValues({ ...values, rcode: value });
              socket.emit('input-change', { ...values, rcode: value });
            }}
          />
        </Grid>
        <Grid xs={12}>
          <Diff lang={values.lang} rcode={values.rcode} lcode={values.lcode} />
        </Grid>
        <Grid xs={6}>
          <Explain />
        </Grid>
        <Grid xs={6}>
          <Share url={'https://google.com'} text={'hogee'} />
        </Grid>
      </Grid.Container>
      <Footer />
    </>
  );
};

export default Home;
