import { PostTwitter } from "@/app/types"


export const PostGuapo = ({post}: {post : PostTwitter}) =>{
    return(
        <div className="tarjetaGuapa">
            <h1>{post.autor.username}</h1>  


        </div>
    )
}