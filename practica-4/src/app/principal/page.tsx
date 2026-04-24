"use client"

import { useEffect, useState } from "react";
import { PostTwitter } from "../types";
import { HomeGuapo } from "@/lib/api/home";
import { PostGuapo } from "../components/post/postGuapo";


 



const Princpalita = () =>{
    const [posts, setPosts] = useState<PostTwitter[] | null>(null)
    const [error, setError] = useState<string>("")

    useEffect(()=>{
        HomeGuapo().then((res)=>{
            setPosts(res)
        }).catch((e)=>{
            setError(e)
        })
    }, [])
    return (
        <div>
            {posts && posts.map((e)=>{
                return <PostGuapo post={e}></PostGuapo>
            })}

            
        </div>
    )
}
export default Princpalita;