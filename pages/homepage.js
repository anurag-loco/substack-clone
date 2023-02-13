import TopHeader from "../components/top-header";
import FeaturedCard from "../components/featured-card";
import BigCard from "../components/big-card";
import BlogCard from "../components/blog-card";
import PopularCard from "../components/popular-card";
import SidebarCTA from "../components/sidebar-c-t-a";
import SubscribeContainer from "../components/subscribe-container";
import Footer from "../components/footer";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <TopHeader search="../search.svg" />
        <div className={styles.separator} />
        <div className={styles.menu}>
          <b className={styles.home}>Home</b>
          <div className={styles.about}>About</div>
        </div>
        <div className={styles.separator} />
      </div>
      <div className={styles.main}>
        <div className={styles.featured}>
          <div className={styles.leftsection}>
            <FeaturedCard
              cardImage="../cardimage@2x.png"
              title="How to learn app development 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <FeaturedCard
              cardImage="../cardimage1@2x.png"
              title="How to learn app development 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 2"
              date="Feb 8"
              numLikes="34"
              numComments="2"
            />
          </div>
          <div className={styles.middlesection}>
            <BigCard
              bigCardImage="../bigcardiamge@2x.png"
              title="Best Productivity Tips "
              description="Top tips to make you launch your idea even faster"
              dateText="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <BlogCard
              title="Planning your app launch 1"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
              listCardImage="../listcardimage@2x.png"
              dateText="Feb 8"
              numLikes="33"
              numComments="2"
            />
          </div>
          <div className={styles.rightsection}>
            <div className={styles.h3}>
              <div className={styles.mostPopular}>Most popular</div>
            </div>
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 2"
              date="Feb 4"
              numLikes="33"
              numComments="2"
            />
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <div className={styles.separator} />
            <PopularCard
              title="How to launch even faster 1"
              date="Feb 9"
              numLikes="35"
              numComments="1"
            />
            <div className={styles.separator} />
            <div className={styles.a}>
              <div className={styles.seeAllPopular}>See all popular</div>
              <img className={styles.svgIcon} alt="" src="../svg34.svg" />
            </div>
          </div>
        </div>
        <div className={styles.allposts}>
          <div className={styles.postsLeft}>
            <div className={styles.postsHeaderContainer}>
              <div className={styles.postsHeader}>
                <b className={styles.new}>New</b>
                <img
                  className={styles.searchIcon}
                  alt=""
                  src="../search-icon.svg"
                />
              </div>
              <div className={styles.separator} />
            </div>
            <div className={styles.list}>
              <BlogCard
                title="Planning your app launch 2"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 2"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <BlogCard
                title="Planning your app launch 1"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 1"
                listCardImage="../listcardimage1@2x.png"
                dateText="Feb 8"
                numLikes="33"
                numComments="2"
              />
              <button className={styles.a1}>
                <div className={styles.seeAll}>See all</div>
                <img className={styles.svgIcon1} alt="" src="../svg56.svg" />
              </button>
            </div>
          </div>
          <SidebarCTA />
        </div>
        <SubscribeContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
