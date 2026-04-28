"use client"

import { PostTwitter } from "@/app/types"
import { likePost, retweetPost } from "@/lib/api/accionesPost"
import { useState } from "react"
import "./page.css"

export const PostGuapo = ({ post }: { post: PostTwitter }) => {

  const [likes, setLikes] = useState(post.likes)
const [retweets, setRetweets] = useState(post.retweets)

    const userId = "TU_ID_AQUI" 

const handleLike = async () => {
    try {
        await likePost(post._id)

        setLikes((prev) => {
            if (prev.includes(userId)) {
                // quitar like
                return prev.filter(id => id !== userId)
            } else {
                // añadir like
                return [...prev, userId]
            }
        })

    } catch (e) {
        console.log(e)
    }
}

    const handleRetweet = async () => {
  try {
    await retweetPost(post._id)

    setRetweets((prev) => {
      const yaRetweeteado = prev.some(r => r.usuario === userId)

      if (yaRetweeteado) {
        // quitar retweet
        return prev.filter(r => r.usuario !== userId)
      } else {
        // añadir retweet
        return [
          ...prev,
          {
            usuario: userId,
            fecha: new Date().toISOString()
          }
        ]
      }
    })

  } catch (e) {
    console.log(e)
  }
}

    return (
        <div className="tarjetaGuapa">
            <div className="postHeader">
                <div className="avatar">
                    {post.autor.username.charAt(0).toUpperCase()}
                </div>

                <div className="userInfo">
                    <span className="username">{post.autor.username}</span>
                    <span className="time"> · {new Date(post.createdAt).toLocaleString()}</span>
                </div>
            </div>

            <div className="contenido">
                {post.contenido}
            </div>

            <div className="acciones">
                <div onClick={handleLike}>❤️ {likes.length}</div>
                <div onClick={handleRetweet}>🔁 {retweets.length}</div>
                <div>💬 {post.comentarios.length}</div>
            </div>
        </div>
    )
}