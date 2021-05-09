import styled from "styled-components"

export const Post = ({post, title, img}) => {
    return (
        <PostContainer>
            <img src={img || "https://lh3.googleusercontent.com/proxy/iXvq1KO6bfLJcl7zXVJki_sUEqTO10KpJ-cEuPXEI2KEZNTaOqnUboZkO4U81PA8MEuOOGY7pAQZZgSJCnCFa2ZtYjF1WvbWYiGl827jL7sOa2XyZjM"}/>
            <h2>{title}</h2>
            <p></p>
        </PostContainer>
    )
}

const PostContainer = styled.article`
    width: 100%;
    height: 100%;

    background: #1111;
    padding:10px;
    
    img{
        width: 100%;
        height: 40%;
        object-fit: cover;
    }

    h2{
        font-family: monospace;
    }
`