import React from "react";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar";
import getCandidatesListApiCall from "api/getCandidatesListApiCall";
import addElectionResult from "api/addElectionResult";

let ps;

const styles = {
  paper: {
    height: 600,
    width: "100%",
    overflow: "auto",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Vazir', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function AddElectionResult() {
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // initialize and destroy the PerfectScrollbar plugin
  const [, setMobileOpen] = React.useState(false);
  const [candidateList, setCandidateList] = React.useState([
    "احمد حسینی",
    "مینا رضایی",
    "مبینا احمدپور",
    "جلال آقایی",
  ]);
  const [snackbarInfo, setSnackbarInfo] = React.useState({
    open: false,
    message: "",
    color: "danger",
  });
  let voteResult = {};
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    getCandidatesListApiCall(1, setCandidateList);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <GridContainer justify="center" style={{ direction: "rtl" }}>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>وارد کردن آراء نامزدها</h4>
          </CardHeader>
          <CardBody>
            <Paper elevation={0} className={classes.paper}>
              {candidateList.map((item, key) => (
                <GridContainer key={key}>
                  <GridItem xs={8} sm={8} md={8}>
                    <h6>{item}</h6>
                  </GridItem>
                  <GridItem xs={4} sm={4} md={4}>
                    <CustomInput
                      labelText="تعداد آراء"
                      id={`candidate ${key}`}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      rtlActive
                      inputProps={{
                        onChange: (e) =>
                          (voteResult[item] = String(e.target.value)),
                      }}
                    />
                  </GridItem>
                </GridContainer>
              ))}
            </Paper>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() =>
                addElectionResult(
                  voteResult,
                  localStorage.role,
                  setSnackbarInfo
                )
              }
              color="primary"
              className={classes.cardTitleWhite}
            >
              ثبت اطلاعات
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <Snackbar
        message={snackbarInfo.message}
        rtlActive
        open={snackbarInfo.open}
        closeNotification={() =>
          setSnackbarInfo({ open: false, message: "", color: "danger" })
        }
        place="br"
        color={snackbarInfo.color}
      />
    </GridContainer>
  );
}
