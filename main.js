import fetch from "node-fetch";
// fetch my ip address and display it on the page
async function fetchIP() {
  let ip = "";
  await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
    //   console.log(data)
      ip = data.ip;
    });
//   console.log(ip);
  return ip;
}

let myIp = await fetchIP();

export default fetchIP;
