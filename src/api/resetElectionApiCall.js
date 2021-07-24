import { RESET_ELECTION_URL } from "./apiPath";

const resetElectionResult = (kind, setSnackbarInfo) => {
  if (kind === "Admin") {
    fetch(RESET_ELECTION_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else
          setSnackbarInfo({
            open: true,
            message: "رأی گیری با موفقیت ریست شد.",
            color: "success",
          });
      })
      .catch(() => {
        setSnackbarInfo({
          open: true,
          message: "اجازه ریست کردن انتخابات را ندارید.",
          color: "danger",
        });
      });
  } else {
    setSnackbarInfo({
      open: true,
      message: "اجازه ریست کردن انتخابات را ندارید.",
      color: "danger",
    });
  }
};

export default resetElectionResult;
