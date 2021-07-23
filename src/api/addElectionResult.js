import {
  ADD_ELECTION_RESULT_BY_INSPECTOR_URL,
  ADD_ELECTION_RESULT_BY_SUPERVISOR_URL,
} from "./apiPath";

const addElectionResult = async (data, kind, setSnackbarInfo) => {
  if (kind === "Inspector") {
    await fetch(ADD_ELECTION_RESULT_BY_INSPECTOR_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data, 2, 0),
    })
      .then((response) => {
        if (!response.ok)
          setSnackbarInfo({
            open: true,
            message: "در ثبت نتایج خطایی رخ داده است.",
            color: "danger",
          });
        else return response.json();
      })
      .then(() => {
        setSnackbarInfo({
          open: true,
          message: "نتایج با موفقیت ثبت شد.",
          color: "success",
        });
      })
      .catch(() => {
        setSnackbarInfo({
          open: true,
          message: "در ارتباط با سرور خطایی رخ داده است.",
          color: "danger",
        });
      });
  } else if (kind === "Supervisor") {
    await fetch(ADD_ELECTION_RESULT_BY_SUPERVISOR_URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data, 2, 0),
    })
      .then((response) => {
        if (!response.ok)
          setSnackbarInfo({
            open: true,
            message: "در ثبت نتایج خطایی رخ داده است.",
            color: "danger",
          });
        else return response.json();
      })
      .then(() => {
        setSnackbarInfo({
          open: true,
          message: "نتایج با موفقیت ثبت شد.",
          color: "success",
        });
      })
      .catch(() => {
        setSnackbarInfo({
          open: true,
          message: "در ارتباط با سرور خطایی رخ داده است.",
          color: "danger",
        });
      });
  } else {
    setSnackbarInfo({
      open: true,
      message: "شما دسترسی لازم را برای وارد کردن نتایج انتخابات ندارید.",
      color: "danger",
    });
  }
};

export default addElectionResult;
