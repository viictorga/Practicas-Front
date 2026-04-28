import { api } from "./api";

export const likePost = async (id: string) => {
    const res = await api.post(`/api/posts/${id}/like`);
    return res.data;
};

export const retweetPost = async (id: string) => {
    const res = await api.post(`/api/posts/${id}/retweet`);
    return res.data;
};

export const createPost = async (contenido: string) => {
    const res = await api.post("/api/posts", {
        contenido
    });
    return res.data;
};