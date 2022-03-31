import styles from '../styles/Header.module.css'
import { Image, Spacer } from "@nextui-org/react";

const Header = () => {
  return (
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
            <img src="./twitter.png" alt="twitter" className={styles.icon} loading="lazy" width="42" height="42"></img>
          </a>
        </li>
        <li>
          <a href="https://github.com/yumekiti/Diff_Sync_Code">
            <img src="./github.png" alt="github" className={styles.icon} loading="lazy" width="42" height="42"></img>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header