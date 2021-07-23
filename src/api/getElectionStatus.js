import { GET_ELECTION_INFO_URL } from "./apiPath";

const getElectionStatus = async (election_id) => {
  await fetch(`${GET_ELECTION_INFO_URL}/${election_id}/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((responseJson) => {
      return responseJson.status;
    })
    .catch(() => {
      return "unknown";
    });
  return "unknown";
};

export default getElectionStatus;
