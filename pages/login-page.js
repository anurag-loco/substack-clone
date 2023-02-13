import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./login-page.module.css";
import { logInWithEmailAndPassword } from "../firebase";

const LoginPage = () => {
  const router = useRouter();

  const onButtonClick = async () => {
    let r = await logInWithEmailAndPassword(email, password);
    console.log(r)
    if (r == 1)
      router.push("/homepage");
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={styles.loginPage}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <img className={styles.aIcon} alt="" src="../a1.svg" />
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        </div>
        <div className={styles.signIn}>Sign in</div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
          <div className={styles.continueToParent}>
            <div className={styles.continueTo}>Continue to</div>
            <b className={styles.thelaunchblog}>TheLaunchBlog</b>
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
            <input
              className={styles.input1}
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password "
            />
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.signIn1}>Sign In</div>
            </button>
          </div>
          <div className={styles.dontHaveAnContainer}>
            <span>{`Don't have an account yet? `}</span>
            <span className={styles.signUp}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
