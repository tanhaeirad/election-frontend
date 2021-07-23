import { GET_CANDIDATES_LIST_URL } from "./apiPath";

const getCandidateListApiCall = async (election_id, setCandidateList) => {
  await fetch(GET_CANDIDATES_LIST_URL, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((responseJson) => {
      var cList = [];
      responseJson.filter((e) => {
        if (e.election_id === election_id) {
          cList.push(e.first_name + " " + e.last_name);
        }
      });
      setCandidateList(cList);
    })
    .catch(() => {
      return [];
    });
};

export default getCandidateListApiCall;
