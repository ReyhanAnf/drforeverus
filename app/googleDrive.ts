import { google } from "googleapis"

import { jwtDecode } from "jwt-decode";

const token : any = process.env.CREDENTIALS;
const decoded = jwtDecode(token);

const credentials = JSON.parse(JSON.stringify(decoded))
// import credentials from "./credentials.json"

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
    // your credentials to authenticate
    // keyFile: process.cwd() + "/app/credentials.json",
    credentials: credentials,
    // the actions you are permissed to perform using this API, in this case
    // all CRUD operations are permissed, check out
    // [ https://developers.google.com/drive/api/guides/api-specific-auth ]
    // for more advice on scopes
    scopes: ["https://www.googleapis.com/auth/drive"],
  })

export const getData = async () => {
  // allows you to use drive API methods e.g. listing files, creating files.
  const drive = google.drive({ version: "v3", auth })
  try {
    const res = await drive.files.list()
    const files = res.data.files

    // console.log(files)

    return files
  } catch (error: any) {
    console.error("Error fetching files:", error.message)
    return null
  }
}