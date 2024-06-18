import axios from "axios";

interface ILoginRequestParam {
  username: String;
  password: String;
}

export async function getUsers(
  requestParams: ILoginRequestParam
): Promise<any> {
  try {
    const res = await axios.post(
      "https://driven-utility-410520.rj.r.appspot.com/auth/generateToken",
      requestParams
    );
    let data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("deu ruim ", error);
    throw error;
  }
}

export default axios;
