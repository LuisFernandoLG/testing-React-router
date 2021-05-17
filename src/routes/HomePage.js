import { useFetch } from "../hooks/useFetch"
import { Posts } from "../components/Posts"

export const HomePage = () => {

    const {data, error, isLoading} = useFetch("https://css-tricks.com/wp-json/wp/v2/posts?_embed")

    return (
        <div>    
            { isLoading && <h2>Loading</h2> }

            { data && <Posts posts={data}/> }
            { error && <h2>Error</h2>}

        </div>
    )
}
