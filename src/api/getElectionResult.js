import { GET_CANDIDATES_LIST_URL } from "./apiPath";

const getElectionResult = (election_id, setVoteData) => {
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
      var linearTemp = [0];
      var tableTemp = [];
      var labels = [];
      responseJson.filter((e) => {
        if (e.election_id === election_id) {
          linearTemp.push(parseInt(e.vote || "0"));
          labels.push(e.first_name + " " + e.last_name);
        }
      });
      labels.forEach((item, index) => {
        tableTemp.push(
          Array(String(index + 1), item, String(linearTemp.slice(1)[index]))
        );
      });
      setVoteData({
        chart: {
          Linear: {
            labels: labels,
            series: Array(linearTemp),
          },
          Bar: {
            labels: labels,
            series: Array(linearTemp.slice(1)), // remove 0 from the beginning
          },
        },
        table: tableTemp,
      });
    });
};

export default getElectionResult;
