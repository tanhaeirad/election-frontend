import { GET_ACCOUNT_INFO_URL } from "./apiPath";

const getAccountInfoApiCall = (username, verbose, setShouldRedirect) => {
  fetch(GET_ACCOUNT_INFO_URL, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((responseJson) => {
      responseJson.filter((e) => {
        if (e.username === username) {
          if (verbose) {
            localStorage.setItem("role", e.kind);
            setShouldRedirect(true);
          }
          return e.kind;
        }
      });
      return "unknown";
    })
    .catch(() => {
      return "unknown";
    });
};

export default getAccountInfoApiCall;
