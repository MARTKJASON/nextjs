import AllPost from "../../components/home-page/posts/all-post"
import { getAllPosts } from "../../lib/posts-util"


function AllPostPage(props){
    return <AllPost posts={props.posts} />
}

export function getStaticProps(){
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}
export default AllPostPage