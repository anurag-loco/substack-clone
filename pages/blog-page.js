import TopHeader from "../components/top-header";
import BlogContent from "../components/blog-content";
import SubscribeCTA from "../components/subscribe-c-t-a";
import Footer from "../components/footer";
import styles from "./blog-page.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <TopHeader search="../search1.svg" />
      <div className={styles.body}>
        <div className={styles.article}>
          <BlogContent
            blogTitle="Best Productivity Tips "
            blogDescription="Top tips to make you launch your idea even faster"
            date="FEB 4"
            numLikes="27"
            numComments="1"
            blogContent="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          />
          <SubscribeCTA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
