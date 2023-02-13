import Link from "next/link";
import styles from "./featured-card.module.css";

const FeaturedCard = ({
  cardImage,
  title,
  description,
  date,
  numLikes,
  numComments,
}) => {
  return (
    <Link href="/blog-page">
      <a className={styles.leftcard}>
        <img className={styles.cardimageIcon} alt="" src={cardImage} />
        <div className={styles.details}>
          <b className={styles.title}>{title}</b>
          <div className={styles.description}>{description}</div>
          <div className={styles.stats}>
            <div className={styles.date}>
              <img className={styles.svgIcon} alt="" src="../svg4.svg" />
              <div className={styles.datetext}>{date}</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src="../svg5.svg" />
              <div className={styles.datetext}>{numLikes}</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src="../svg6.svg" />
              <div className={styles.datetext}>{numComments}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedCard;
