import { LOGIN_URL } from "./apiPath";

const loginApiCall = (
  username,
  password,
  setSnackbarInfo,
  setShouldRedirect
) => {
  fetch(`${LOGIN_URL}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
        username: username,
        password: password,
      },
      2,
      0
    ),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        localStorage.setItem("token", responseJson.token);
        setShouldRedirect(true);
      } else {
        setSnackbarInfo(true);
      }
    })
    .catch(() => {
      setSnackbarInfo(true);
    });
};

export default loginApiCall;
