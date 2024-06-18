import axios from "axios";

export async function auth(): Promise<any> {
  let authData = "";
  const url =
    "https://api.paytour.com.br/v2/lojas/login?grant_type=application";

  const headers = {
    Authorization:
      "Basic MjUwMTE1MTY1Y2Y3YThlMjYyM2E1LjU3OTA0MDI2OmMzZjJiMTk4ZmM3OTI0OTQ0OWFhOGViYzBjYWM2YjEyMDI5ZTY3Nzg=",
    Cookie: "PHPSESSID=8bbdcd9ff0bf6f3c0b09c8326fd9ba7a",
  };

  try {
    const response = await axios.post(url, null, { headers: headers });
    authData = response.data;
    return authData;
  } catch (error) {
    console.error(error);
  }
}

auth();
