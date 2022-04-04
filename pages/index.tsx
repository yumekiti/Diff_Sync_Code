import type { NextPage } from 'next';
import { Grid, Textarea } from '@nextui-org/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explain from '../components/Explain';
import Diff from '../components/Diff';
import Monaco from '../components/Monaco';
import { useState } from 'react';

const Home: NextPage = () => {
  const [lang, setLang] = useState('')
  const [rcode, setRcode] = useState('')
  const [lcode, setLcode] = useState('')

  return (
    <>
      <Header />
      <Grid.Container gap={3}>
        <Grid xs={6}>
          <Monaco lang={lang} text={rcode} setText={setRcode} />
        </Grid>
        <Grid xs={6}>
          <Monaco lang={lang} text={lcode} setText={setLcode} />
        </Grid>
        <Grid xs={12}>
          <Diff lang={lang} rcode={rcode} lcode={lcode} />
        </Grid>
        <Grid xs={6}>
          <Explain />
        </Grid>
      </Grid.Container>
      <Footer />
    </>
  );
};

export default Home;
