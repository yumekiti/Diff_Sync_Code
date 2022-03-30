import type { NextPage } from "next";
import { Grid, Textarea, Image, Text, Spacer } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid.Container gap={2}>
        <Grid xs={6} justify="center">
          <Textarea aria-label="テキストエリア" id="textarea" fullWidth rows={20} />
        </Grid>
        <Grid xs={6} justify="center">
          <Textarea aria-label="テキストエリア" id="textarea" fullWidth rows={20} />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={6}>
          <Textarea aria-label="テキストエリア" id="textarea" fullWidth rows={20} />
        </Grid>
        <Grid xs={6}>
          <Textarea aria-label="テキストエリア" id="textarea" fullWidth rows={20} />
        </Grid>
      </Grid.Container>
      <Footer />
    </>
  );
};

export default Home;
