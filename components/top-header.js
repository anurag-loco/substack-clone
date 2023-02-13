import styles from "./top-header.module.css";

const TopHeader = ({ search }) => {
  return (
    <div className={styles.topheader}>
      <div className={styles.logocontainer}>
        <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
      </div>
      <div className={styles.thelaunchblog}>TheLaunchBlog</div>
      <div className={styles.rightSection}>
        <img className={styles.searchIcon} alt="" src={search} />
        <button className={styles.subscribeButton}>
          <div className={styles.subscribe}>Subscribe</div>
        </button>
        <button className={styles.signIn}>Sign in</button>
        <button className={styles.profileSettings}>Profile Settings</button>
        <button className={styles.profileSettings}>Log out</button>
      </div>
    </div>
  );
};

export default TopHeader;
