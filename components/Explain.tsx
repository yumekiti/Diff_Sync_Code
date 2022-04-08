import { Card, Text } from '@nextui-org/react';

const Explain = () => {
  return (
    <Card>
      <Text h4>どうやって使うん。</Text>
      <Text>
        右上の言語選択から比較するコーディング言語を選んでから
        <br />
        左右にコードをコピー＆ペーストするか入力したら差分が出るから。これでエラー探して😎
      </Text>
      <Text size={1}>まぁ、構文エラーか知らんけど。</Text>
      <Text>リンクを共有したら共同編集もできるようになるよ。</Text>
    </Card>
  );
};

export default Explain;
