// Em passeios.ts

import axios from "axios";
import { auth } from "./autorization";

export async function getPasseiosList(): Promise<any> {
  try {
    const authData = await auth();

    const headers = {
      Authorization: `Bearer ${authData.access_token}`,
      Cookie: "PHPSESSID=8bbdcd9ff0bf6f3c0b09c8326fd9ba7a",
    };

    const url = "https://api.paytour.com.br/v2/passeios?";
    const response = await axios.get(url, { headers: headers });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter passeios:", error);
    throw error; // opcional, dependendo do tratamento de erros que você deseja
  }
}
