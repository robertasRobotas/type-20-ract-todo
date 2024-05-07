import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.main}>
      <Image alt="logo" className={styles.logo} src={logo} />
    </div>
  );
};

export default Header;
