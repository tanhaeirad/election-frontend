import { ELECTION_URL } from "./apiPath";

const getElectionStatus = async (election_id) => {
  await fetch(`${ELECTION_URL}/${election_id}/status/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        return responseJson.msg;
      }
      return "unknown";
    })
    .catch(() => {
      return "unknown";
    });
  return "unknown";
};

export default getElectionStatus;
