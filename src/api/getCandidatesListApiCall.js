import { GET_CANDIDATES_LIST_URL } from "./apiPath";

const getCandidateListApiCall = async (election_id, setCandidateList) => {
  await fetch(`${GET_CANDIDATES_LIST_URL}/${election_id}/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        const cList = Object.keys(responseJson).flatMap(
          (key) => responseJson[key]
        );
        setCandidateList(cList);
      }
      return [];
    })
    .catch(() => {
      return [];
    });
};

export default getCandidateListApiCall;
