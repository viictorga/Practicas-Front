import { api } from "./api"




export const RegisterGuapo = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const respuesta = await api.post(
      "/api/auth/register",
      {
        username,
        email,
        password,
      },
      {
        headers: {
          "x-nombre": "VICTOR",
        },
      }
    );

    return respuesta.data;
  } catch (e: any) {
    console.log("ERROR BACKEND:", e.response?.data); // 🔥 ESTO ES LO IMPORTANTE
    throw e;
  }
};