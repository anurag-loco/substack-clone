import Link from "next/link";
import styles from "./big-card.module.css";

const BigCard = ({
  bigCardImage,
  title,
  description,
  dateText,
  numLikes,
  numComments,
  locked, id
}) => {
  return (
    <Link href={"/blog-page/" + id}>
      <a className={styles.bigcard}>
        <img className={styles.bigcardiamgeIcon} alt="" src={bigCardImage} />
        <div className={styles.details}>
          <b className={styles.title}>{title}</b>
          <div className={styles.description}>{description}</div>
          <div className={styles.stats}>
            <div className={styles.date}>
              {locked ? <img className={styles.svgIcon} alt="" src="../svg10.svg" /> : null}
              <div className={styles.datetext}>{dateText}</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src="../svg11.svg" />
              <div className={styles.datetext}>{numLikes}</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src="../svg12.svg" />
              <div className={styles.datetext}>{numComments}</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BigCard;
