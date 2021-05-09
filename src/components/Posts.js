import styled from "styled-components";
import { Post } from "../components/Post";

export const Posts = ({ posts }) => {
   return (
      <PostsContainer>
         {posts.map((post) => {
            console.log(post);
            return (
               <Post
                  key={post.id}
                  title={post.title.rendered}
                  img={post._embedded["wp:featuredmedia"][0].source_url || "https://gspcabo.org/wp-content/uploads/2021/04/favicon-300x245.png"}
               ></Post>
            );
         })}
      </PostsContainer>
   );
};


const PostsContainer = styled.main`
    display:grid;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
`