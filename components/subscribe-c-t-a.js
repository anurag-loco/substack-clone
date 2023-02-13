import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./subscribe-c-t-a.module.css";

const SubscribeCTA = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.div}>
      <div className={styles.thisPostIs}>This post is for paid subscribers</div>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.subscribe}>Subscribe</div>
      </button>
      <div className={styles.alreadyAPaidContainer}>
        <span
          className={styles.alreadyAPaid}
        >{`Already a paid subscriber? `}</span>
        <b>Sign in</b>
      </div>
    </div>
  );
};

export default SubscribeCTA;
