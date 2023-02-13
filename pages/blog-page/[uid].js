import TopHeader from "../../components/top-header";
import BlogContent from "../../components/blog-content";
import SubscribeCTA from "../../components/subscribe-c-t-a";
import Footer from "../../components/footer";
import styles from "./blog-page.module.css";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

const BlogPage = ({ data }) => {
  //console.log(post)
  const [post, setPost] = useState(data)
  const [showCTA, setShow] = useState(false)
  useEffect(() => {
    if (post?.Locked)
      if (!auth.currentUser) {
        setPost({
          ...post,
          BlogContent: post.BlogContent.substring(0, 60) + '...'
        })
        setShow(true)
      }
  }, [0])
  return (
    <div className={styles.blogPage}>
      <TopHeader search="../search1.svg" />
      <div className={styles.body}>
        <div className={styles.article}>
          <BlogContent
            blogTitle={post.Title}
            blogDescription={post.Description}
            date={post.DatePosted}
            numLikes={post.NumLikes}
            numComments={post.NumComments}
            blogContent={post.BlogContent}
            locked={post.Locked}
          />
          {showCTA ? <SubscribeCTA /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { uid } = context.params

  let d = await fetch('https://api.airtable.com/v0/appZyC4A47iYaXZjs/Blog%20Posts/recHHIDbZ9s2ikAyv', {
    headers: {
      "Authorization": "Bearer " + process.env.API_KEY
    }
  })
    .then(response => response.json())

  return {
    props: {
      data: d.fields
    }
  }
}


export default BlogPage;
