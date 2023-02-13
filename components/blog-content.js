import styles from "./blog-content.module.css";

const BlogContent = ({
  blogTitle,
  blogDescription,
  date,
  numLikes,
  numComments,
  blogContent,
  locked
}) => {
  return (
    <div className={styles.blogContent}>
      <div className={styles.div}>
        <div className={styles.bestProductivityTips}>{blogTitle}</div>
        <div className={styles.topTipsTo}>{blogDescription}</div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            {locked ? <img className={styles.svgIcon} alt="" src="../svg.svg" /> : null}
            <div className={styles.feb4}>{date}</div>
          </div>
          <div className={styles.div3}>
            <div className={styles.a}>
              <img className={styles.svgIcon1} alt="" src="../svg1.svg" />
              <div className={styles.div4}>{numLikes}</div>
            </div>
            <div className={styles.a1}>
              <img className={styles.svgIcon1} alt="" src="../svg2.svg" />
              <div className={styles.div4}>{numComments}</div>
            </div>
            <img className={styles.aIcon} alt="" src="../a.svg" />
          </div>
        </div>
      </div>
      <div className={styles.div6}>
        <img
          className={styles.blogImageIcon}
          alt=""
          src="../blog-image@2x.png"
        />
        <div className={styles.blogContent1}>{blogContent}</div>
      </div>
    </div>
  );
};

export default BlogContent;
