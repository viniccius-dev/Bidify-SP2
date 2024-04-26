import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import modalToggle from "../../../helpers/modalToggle.js";
import header from "../../../templates/header/index.js";

export default async function loginRequest(body) {

    const url = config.BaseURL + "auth/login"

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    const data = await response.json()

    if(data) {
        const {accessToken, ...profile} = data.data;
        storage.save("token", accessToken)
        storage.save("profile", profile)
        modalToggle()
        header()
    }
  
    return data; 
}