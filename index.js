import qs from "query-string";
import axios from "axios";

function redirectToGithub() {
  const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user public_repo',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
  }

  const queryStrings = qs.stringify(params);
  const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`;
  window.location.href = authorizationUrl;
}

window.onload = async () => {
  // button
  document.querySelector(".signin").addEventListener("click", redirectToGithub);

  // checks if user is returning from github
/*   const { code } = qs.parseUrl(window.location.href).query;
  if(code) {
    try {
      const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code });
      const user = response.data;
      alert("você está logado, meu chapa! dá uma olhada no console!");
      console.log(user);
    } catch (err) {
      alert("ops, deu algum xabú");
      console.log("err", err);
    }
  } */
}