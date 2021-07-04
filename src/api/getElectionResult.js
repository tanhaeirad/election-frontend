import { ELECTION_URL } from "./apiPath";

const getElectionResult = async (
  election_id,
  setVoteChartData,
  setVoteTableData
) => {
  await fetch(`${ELECTION_URL}/${election_id}/result/`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.code === 200) {
        var linearTemp = Array(Object.values(responseJson));
        linearTemp[0].unshift(0);
        setVoteChartData({
          Linear: {
            labels: Object.keys(responseJson),
            series: linearTemp,
          },
          Bar: {
            labels: Object.keys(responseJson),
            series: Array(Object.values(responseJson)),
          },
        });
        var tableTemp = [];
        tableTemp.push(
          Object.keys(responseJson).forEach((item, index) =>
            Array(String(index + 1), item, String(Object.values[index]))
          )
        );
        setVoteTableData(tableTemp);
      }
    })
    .catch(() => {});
};

export default getElectionResult;
