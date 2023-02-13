import TopHeader from "../components/top-header";
import FeaturedCard from "../components/featured-card";
import BigCard from "../components/big-card";
import BlogCard from "../components/blog-card";
import PopularCard from "../components/popular-card";
import SidebarCTA from "../components/sidebar-c-t-a";
import SubscribeContainer from "../components/subscribe-container";
import Footer from "../components/footer";
import styles from "./homepage.module.css";

const Homepage = ({ posts }) => {
  //console.log(posts)
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
            {
              posts?.length > 0 ?
                posts.filter((post) => {

                  return post.fields.Tag == 'featured-article'
                }).map(item => {
                  return <FeaturedCard
                    key={item.id}
                    id={item.id}
                    cardImage={item.fields.ImageURL}
                    title={item.fields.Title}
                    description={item.fields.Description}
                    date={item.fields.DatePosted}
                    numLikes={item.fields.NumLikes}
                    numComments={item.fields.NumComments}
                    locked={item.fields.Locked}
                  />
                }) : null
            }
            {/* <FeaturedCard
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
            /> */}
          </div>
          <div className={styles.middlesection}>
            {
              posts?.length > 0 ?
                posts.filter((post) => {

                  return post.fields.Tag == "top-article"
                }).map(item => {
                  return <BigCard
                    key={item.id}
                    bigCardImage={item.fields.ImageURL}
                    title={item.fields.Title}
                    description={item.fields.Description}
                    date={item.fields.DatePosted}
                    numLikes={item.fields.NumLikes}
                    numComments={item.fields.NumComments}
                    locked={item.fields.Locked}
                    id={item.id}
                  />
                }) : null
            }
            {/* <BigCard
              bigCardImage="../bigcardiamge@2x.png"
              title="Best Productivity Tips "
              description="Top tips to make you launch your idea even faster"
              dateText="Feb 9"
              numLikes="35"
              numComments="1"
            /> */}
            {
              posts?.length > 0 ?
                posts.filter((post) => {

                  return post.fields.Tag == "blog-card"
                }).map(item => {
                  return <>
                    <BlogCard
                      key={item.id}
                      id={item.id}
                      listCardImage={item.fields.ImageURL}
                      title={item.fields.Title}
                      description={item.fields.Description}
                      dateText={item.fields.DatePosted}
                      numLikes={item.fields.NumLikes}
                      numComments={item.fields.NumComments}
                      locked={item.fields.Locked}
                    />
                  </>
                }) : null
            }
          </div>
          <div className={styles.rightsection}>
            <div className={styles.h3}>
              <div className={styles.mostPopular}>Most popular</div>
            </div>
            <div className={styles.separator} />
            {
              posts?.length > 0 ?
                posts.filter((post) => {

                  return post.fields.Tag == "popular-post"
                }).map(item => {
                  return <>
                    <PopularCard
                      key={item.id}
                      id={item.id}
                      title={item.fields.Title}
                      date={item.fields.DatePosted}
                      locked={item.fields.Locked}
                    />
                    <div className={styles.separator} />
                  </>
                }) : null
            }
            {/* <PopularCard
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
            /> */}
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
              {
                posts?.length > 0 ?
                  posts.filter((post) => {

                    return post.fields.Tag == "regular-post"
                  }).map(item => {
                    return <>
                      <BlogCard
                        id={item.id}
                        listCardImage={item.fields.ImageURL}
                        title={item.fields.Title}
                        description={item.fields.Description}
                        dateText={item.fields.DatePosted}
                        numLikes={item.fields.NumLikes}
                        numComments={item.fields.NumComments}
                        locked={item.fields.Locked}
                      />
                    </>
                  }) : null
              }
              {/* <BlogCard
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
              /> */}
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

export async function getServerSideProps(context) {
  let d = await fetch('https://api.airtable.com/v0/appZyC4A47iYaXZjs/Blog%20Posts?view=Grid%20view&fields%5B%5D=Unique%20Slug&fields%5B%5D=Title&fields%5B%5D=Description&fields%5B%5D=DatePosted&fields%5B%5D=NumLikes&fields%5B%5D=NumComments&fields%5B%5D=Tag&fields%5B%5D=Locked&fields%5B%5D=ImageURL', {
    headers: {
      "Authorization": "Bearer " + process.env.API_KEY
    }
  })
    .then(response => response.json())

  let posts = []
  if (d?.records) {
    posts = d?.records.map(item => {
      item.b
    })
  }

  // console.log(d);
  // console.log(process.env.API_KEY);
  return {
    props: {
      posts: d?.records || []
    }
  }
}

export default Homepage;
