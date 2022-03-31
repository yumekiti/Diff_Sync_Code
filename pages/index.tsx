import type { NextPage } from 'next';
import { Grid, Textarea } from '@nextui-org/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explain from '../components/Explain';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid.Container gap={2}>
        <Grid xs={6} justify='center'>
          <Textarea aria-label='テキストエリア' id='textarea' fullWidth rows={20} />
        </Grid>
        <Grid xs={6} justify='center'>
          <Textarea aria-label='テキストエリア' id='textarea' fullWidth rows={20} />
        </Grid>
      </Grid.Container>
      <Explain />
      <Footer />
    </>
  );
};

export default Home;
