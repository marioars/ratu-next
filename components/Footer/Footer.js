import Image from "next/image";
import styles from "./Footer.module.css";
import logoWhite from "../../public/assets/logo-ratu-white.png";
import facebook from "../../public/assets/Facebook.png";
import twitter from "../../public/assets/twitter.png";
import instagram from "../../public/assets/instagram.png";
import youtube from "../../public/assets/youtube.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src={logoWhite}
          height={135}
          width={132}
          alt="ratu_oceania_raya"
        />
      </div>
      <div className={styles.footerDesc}>
        <div className={styles.footerDescHeader}>
          <span>about ratu oceania raya</span>
          <span>contact</span>
          <span>call us</span>
        </div>
        <div className={styles.footerDescHeader}>
          <div className={styles.medsos}>
            <Image src={facebook} height={19} width={10} alt="facebook" />
          </div>
          <div className={styles.medsos}>
            <Image src={youtube} height={15} width={22} alt="youtube" />
          </div>
          <div className={styles.medsos}>
            <Image src={twitter} height={16} width={20} alt="twitter" />
          </div>
          <div className={styles.medsos}>
            <Image src={instagram} height={18} width={19} alt="instagram" />
          </div>
        </div>
        <div className={styles.footerDescBot}>
          <span>
            Copyright 2023 PT. Ratu Oceania Raya | All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
