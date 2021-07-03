import { GET_ACCOUNT_INFO } from "./apiPath";

const getAccountInfoApiCall = async (username) => {
  await fetch(`${GET_ACCOUNT_INFO}/${username}/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        return responseJson.kind;
      }
      return "unknown";
    })
    .catch(() => {
      return "unknown";
    });
};

export default getAccountInfoApiCall;
