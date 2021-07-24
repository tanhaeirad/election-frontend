import { GET_ELECTION_INFO_URL } from "./apiPath";

const getElectionStatus = (election_id, electionStatus, setElectionStatus) => {
  const status = {
    "not init yet": "رأی گیری هنوز آغاز نشده است.",
    "Pending For Inspector": "رأی گیری در جریان است.",
    "Pending For Supervisor": "رأی گیری در جریان است.",
    Rejected: "رأی گیری مردود اعلام شده است.",
    Accepted: "رأی گیری تایید شده است.",
    unknown: "وضعیت رأی‌گیری نامشخص است.",
  };

  fetch(`${GET_ELECTION_INFO_URL}/${election_id}/`, {
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
      if (responseJson.status !== electionStatus) {
        setElectionStatus(status[responseJson.status]);
      }
    })
    .catch(() => {
      setElectionStatus(status["unknown"]);
    });
};

export default getElectionStatus;
