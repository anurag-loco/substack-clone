import Link from "next/link";
import styles from "./blog-card.module.css";

const BlogCard = ({
  title,
  description,
  listCardImage,
  dateText,
  numLikes,
  numComments,
}) => {
  return (
    <Link href="/blog-page">
      <a className={styles.listcard}>
        <div className={styles.div}>
          <b className={styles.title}>{title}</b>
          <div className={styles.description}>{description}</div>
          <div className={styles.stats}>
            <div className={styles.date}>
              <img className={styles.svgIcon} alt="" src="../svg13.svg" />
              <div className={styles.datetext}>{dateText}</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src="../svg14.svg" />
              <div className={styles.datetext}>{numLikes}</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src="../svg15.svg" />
              <div className={styles.datetext}>{numComments}</div>
            </div>
          </div>
        </div>
        <img className={styles.listcardimageIcon} alt="" src={listCardImage} />
      </a>
    </Link>
  );
};

export default BlogCard;
