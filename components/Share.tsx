import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { Text, Card, Spacer, Button } from '@nextui-org/react';
import style from '../styles/Share.module.css';

type Props = {
  url: string;
  text: string;
};

const Share = ({ url, text }: Props) => {
  return (
    <>
      <Card>
        <Text h4>リンク共有</Text>

        <Spacer />

        <div className={style.share}>
          <Button className={style.button} onClick={() => navigator.clipboard.writeText(url)} rounded>
            Link Copy
          </Button>

          <LineShareButton url={url}>
            <LineIcon size={60} round />
          </LineShareButton>

          <TwitterShareButton title={text} url={url}>
            <TwitterIcon size={60} round />
          </TwitterShareButton>

          <FacebookShareButton quote={text} url={url}>
            <FacebookIcon size={60} round />
          </FacebookShareButton>
        </div>
      </Card>
    </>
  );
};

export default Share;
