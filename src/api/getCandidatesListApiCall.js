import { GET_CANDIDATES_LIST_URL } from "./apiPath";

const getCandidateListApiCall = (election_id, setCandidateList) => {
  fetch(GET_CANDIDATES_LIST_URL, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((responseJson) => {
      var cList = {};
      responseJson.filter((e) => {
        if (e.election_id === election_id) {
          cList[e.first_name + " " + e.last_name] = e.id;
        }
      });
      setCandidateList(cList);
    })
    .catch(() => {
      return [];
    });
};

export default getCandidateListApiCall;
