import type { NextPage } from 'next';
import { Grid, Textarea } from '@nextui-org/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explain from '../components/Explain';
import Diff from '../components/Diff';
import Monaco from '../components/Monaco';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid.Container gap={3}>
        <Grid xs={6}>
          <Monaco />
        </Grid>
        <Grid xs={6}>
          <Monaco />
        </Grid>
        <Grid xs={12}>
          <Diff />
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
