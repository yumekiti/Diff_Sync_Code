import { Grid, Card, Text } from "@nextui-org/react";

const Explain = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} justify="center">
        <Card>
          <Text h4>どうやって使うん。</Text>
          <Text>左右にコードをコピー＆ペーストするか入力したら差分が出るから。これでエラー探して。😎</Text>
          <Text small>まぁ、構文エラーか知らんけど。</Text>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default Explain