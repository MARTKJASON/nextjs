import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/posts-util";


function HomePage(props) {
  
  
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.post} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts()

  return {
    props:{
      post: featuredPosts
    },
    revalidate: 60
  }
}
export default HomePage