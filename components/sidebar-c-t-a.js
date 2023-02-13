import styles from "./sidebar-c-t-a.module.css";

const SidebarCTA = () => {
  return (
    <div className={styles.allpostsRight}>
      <div className={styles.separator} />
      <div className={styles.rightHeader}>
        <img className={styles.blogLogoIcon} alt="" src="../blog-logo@2x.png" />
        <div className={styles.thelaunchblog}>TheLaunchBlog</div>
        <div className={styles.yourNo1}>
          Your No. 1 source for the best way to launch faster
        </div>
        <div className={styles.subscribeForm}>
          <div className={styles.form}>
            <div className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Type your email…"
              />
              <button className={styles.button}>
                <div className={styles.subscribe}>Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.otherResources}>
        <div className={styles.mentionsSection}>
          <div className={styles.titleParent}>
            <div className={styles.title}>
              <b className={styles.thelaunchblogAcrossThe}>
                TheLaunchBlog Across the Web
              </b>
            </div>
            <div className={styles.separator} />
          </div>
          <div className={styles.wereOnInstagram}>We're on Instagram here</div>
          <div className={styles.wereOnInstagram}>We're on Twitter here</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCTA;
