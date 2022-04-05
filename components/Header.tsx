import styles from '../styles/Header.module.css';
import { Image, Spacer } from '@nextui-org/react';

const Header = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 880,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.header}>
      <Spacer x={3} />
      <div>
        <Image src='./icon.png' alt='Default Image' width={50} height={50} />
      </div>
      <Spacer x={1} />
      <h1>Diff Sync Code</h1>
      <ul className={styles.sns}>
        <li>
          <a href='https://twitter.com/yumekiti1204'>
            <Image
              src='./twitter.png'
              alt='twitter'
              className={styles.icon}
              width={42}
              height={42}
            />
          </a>
        </li>
        <li>
          <a href='https://github.com/yumekiti/Diff_Sync_Code'>
            <Image src='./github.png' alt='github' className={styles.icon} width={42} height={42} />
          </a>
        </li>
        <li>
          <Image className={styles.icon} src='./question.png' alt="down" onClick={returnTop} width={42} height={42} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
