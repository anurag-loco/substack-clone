import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const SubscribeOverlay = () => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onCloseIconClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  return (
    <div className={styles.subscribeOverlay}>
      <div className={styles.body}>
        <img
          className={styles.blogImageIcon}
          alt=""
          src="../https3a2f2fbucketeere05bbc84baa3437e9518adb32be77984s3amazonawscom2fpublic2fimages2f228506aeedc748719c1bbc1ce694adb1-1280x704png@2x.png"
        />
        <div className={styles.yourNo1}>
          Your No. 1 source for the best way to launch faster
        </div>
        <div className={styles.over40000Subscribers}>
          Over 40,000 subscribers
        </div>
        <div className={styles.form}>
          <div className={styles.div}>
            <input
              className={styles.input}
              type="text"
              placeholder="Type your email…"
            />
            <div className={styles.button}>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.noThanks}>No thanks</div>
          <img className={styles.svgIcon} alt="" src="../svg58.svg" />
        </div>
      </div>
      <div className={styles.byRegisteringYouContainer}>
        {`By registering you agree to Substack's `}
        <span className={styles.termsOfService}>Terms of Service</span>
        {`, our `}
        <span className={styles.termsOfService}>Privacy Policy</span>
        {`, and our `}
        <span className={styles.termsOfService}>
          Information Collection Notice
        </span>
      </div>
      <img
        className={styles.closeicon}
        alt=""
        src="../closeicon.svg"
        onClick={onCloseIconClick}
      />
    </div>
  );
};

export default SubscribeOverlay;
