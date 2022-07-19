import styles from '../styles/Header.module.css';
import { Image, Spacer } from '@nextui-org/react';

const Header = () => {
  const demo = () => {
    window.open('https://user-images.githubusercontent.com/68057090/201527204-3c1b8756-4e50-4baa-b443-3c1213e8a8fa.mp4', '_blank');
  };

  return (
    <div className={styles.body}>
      <Spacer x={1} />
      <div>
        <Image src='./icon.png' alt='Default Image' width={42} height={42} />
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
          <Image
            className={styles.icon}
            src='./question.png'
            alt='down'
            onClick={demo}
            width={42}
            height={42}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
