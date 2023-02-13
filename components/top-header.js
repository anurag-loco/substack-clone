import { useRouter } from "next/router";
import { auth } from "../firebase";
import styles from "./top-header.module.css";

const TopHeader = ({ search }) => {
  console.log(auth.currentUser)
  let router = useRouter()
  return (
    <div className={styles.topheader}>
      <div className={styles.logocontainer}>
        <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
      </div>
      <div className={styles.thelaunchblog}>TheLaunchBlog</div>
      <div className={styles.rightSection}>
        <img className={styles.searchIcon} alt="" src={search} />
        {auth.currentUser ? null : <button className={styles.subscribeButton}>
          <div className={styles.subscribe}>Subscribe</div>
        </button>}
        {auth.currentUser ? null : <button className={styles.signIn} onClick={() => router.push("/login-page")}>Sign in</button>}
        {auth.currentUser ? <button className={styles.profileSettings}>Profile Settings</button> : null}
        {auth.currentUser ? <button className={styles.profileSettings}>Log out</button> : null}
      </div>
    </div >
  );
};

export default TopHeader;
