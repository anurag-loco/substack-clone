import styles from "./subscribe-container.module.css";

const SubscribeContainer = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.h4}>
        <div className={styles.thelaunchblog}>TheLaunchBlog</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.form}>
        <div className={styles.div}>
          <input
            className={styles.input}
            type="text"
            placeholder="Type your email…"
          />
          <button className={styles.button}>
            <div className={styles.subscribe1}>Subscribe</div>
          </button>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.about}>About</div>
        <div className={styles.archive}>Archive</div>
        <div className={styles.sitemap}>Sitemap</div>
      </div>
    </div>
  );
};

export default SubscribeContainer;
