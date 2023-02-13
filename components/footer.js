import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <div className={styles.thelaunchblogLlc}>
            © 2023 TheLaunchBlog LLC ∙
          </div>
          <div className={styles.privacyTermsContainer}>
            <span className={styles.privacy}>Privacy</span>
            {` ∙ `}
            <span className={styles.privacy}>Terms</span>
            {` ∙ `}
            <span className={styles.privacy}>Collection notice</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.a}>
            <img className={styles.svgIcon} alt="" src="../svg57.svg" />
            <div className={styles.startWriting}>Start Writing</div>
          </div>
          <button className={styles.a1}>
            <div className={styles.getTheApp}>Get the app</div>
          </button>
        </div>
        <div className={styles.substackIsTheContainer}>
          <span className={styles.substackIsTheContainer1}>
            <span className={styles.privacy}>Substack</span> is the home for
            great writing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
