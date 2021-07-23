import { GET_CANDIDATES_LIST_URL } from "./apiPath";

const getElectionResult = async (
  election_id,
  setVoteChartData,
  setVoteTableData
) => {
  await fetch(GET_CANDIDATES_LIST_URL, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
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
          linearTemp.push(parseInt(e.vote));
          labels.push(e.first_name + " " + e.last_name);
        }
      });
      setVoteChartData({
        Linear: {
          labels: labels,
          series: linearTemp,
        },
        Bar: {
          labels: labels,
          series: linearTemp.slice(1), // remove 0 from the beginning
        },
      });
      tableTemp.push(
        labels.forEach((item, index) =>
          Array(String(index + 1), item, String(linearTemp.slice(1)[index]))
        )
      );
      setVoteTableData(tableTemp);
    })
    .catch(() => {});
};

export default getElectionResult;
