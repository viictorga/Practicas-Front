"use client";

import { useEffect, useState } from "react";
import { HomeGuapo } from "@/lib/api/home";

export default function Principal() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPosts = async () => {
      try {
        const data = await HomeGuapo();
        setPosts(data);
      } catch (error) {
        console.error("Error cargando posts:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarPosts();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>

      {posts.length === 0 ? (
        <p>No hay posts</p>
      ) : (
        posts.map((post: any) => (
          <div key={post.id}>
            <p>{post.texto}</p>
          </div>
        ))
      )}
    </div>
  );
}