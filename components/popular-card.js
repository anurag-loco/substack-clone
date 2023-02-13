import Link from "next/link";
import styles from "./popular-card.module.css";

const PopularCard = ({ title, date, numLikes, numComments }) => {
  return (
    <Link href="/blog-page">
      <a className={styles.div}>
        <div className={styles.div1}>
          <b className={styles.title}>{title}</b>
          <div className={styles.stats}>
            <div className={styles.date}>
              <img className={styles.svgIcon} alt="" src="../svg16.svg" />
              <div className={styles.datetext}>{date}</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src="../svg17.svg" />
              <div className={styles.datetext}>{numLikes}</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src="../svg18.svg" />
              <div className={styles.datetext}>{numComments}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PopularCard;
