import type { NextPage } from "next";
import { Grid, Textarea, Image, Text, Spacer } from "@nextui-org/react";

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <Spacer x={3} />
        <div>
          <Image
            src="./icon.png"
            alt="Default Image"
            width={50}
            height={50}
          />
        </div>
        <Spacer x={1} />
        <h1>Diff Sync Code</h1>
        <ul className={styles.sns}>
            <li>
              <a href="https://twitter.com/yumekiti1204">
                <img src="./twitter.png" className={styles.icon} loading="lazy" width="42" height="42"></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/yumekiti/Diff_Sync_Code">
                <img src="./github.png" className={styles.icon} loading="lazy" width="42" height="42"></img>
              </a>
            </li>
          </ul>
      </div>

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

      <div className={styles.footer}>
        <Text>COPYRIGHT &#169; 2022 yumekiti</Text>
      </div>
    </>
  );
};

export default Home;
