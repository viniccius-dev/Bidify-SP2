// const baseURL = "https://v2.api.noroff.dev/";

// const loginEndpoint = "auth/login";
// const APIKey = "auth/create-api-key";

// const request = await fetch(baseURL + loginEndpoint, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: "julius@noroff.no",
//         password: "Minnie2024!"
//     })
// }) 

// const data = await request.json();
// const token = data.data.accessToken;

// const keyRequest = await fetch(baseURL + APIKey, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//     }
// }) 

// const keyData = await keyRequest.json();

// console.log(keyRequest);
// console.log(keyData);