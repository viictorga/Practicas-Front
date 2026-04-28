"use client";

import { api } from "./api";

export const HomeGuapo = async () => {
  // 🔹 Leer cookie en cliente
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("Authorization="))
    ?.split("=")[1];

  console.log("TOKEN CLIENT:", token);

  if (!token) {
    return [];
  }

  try {
    const respuesta = await api.get("/api/home", {
      headers: {
        "x-nombre": "VICTOR",
        Authorization: token, // ⚠️ ya incluye Bearer
      },
    });

    return respuesta.data.posts;
  } catch (error) {
    console.error("ERROR HOME:", error);
    return [];
  }
};