import React from "react";
import { Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import loginApiCall from "api/loginApiCall";

let ps;

const styles = {
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

export default function Login() {
  const classes = useStyles();
  let username, password;
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // initialize and destroy the PerfectScrollbar plugin
  const [, setMobileOpen] = React.useState(false);
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  const [snackbarInfo, setSnackbarInfo] = React.useState(false);
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
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return shouldRedirect ? (
    <Redirect from="/login" to="/rtl/dashboard" />
  ) : (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>ورود به حساب کاربری</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="نام کاربری"
                  id="username"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  rtlActive
                  inputProps={{ onChange: (e) => (username = e.target.value) }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="پسورد"
                  id="password"
                  inputProps={{
                    type: "password",
                    onChange: (e) => (password = e.target.value),
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  rtlActive
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() =>
                loginApiCall(
                  username,
                  password,
                  setSnackbarInfo,
                  setShouldRedirect
                )
              }
              color="primary"
              className={classes.cardTitleWhite}
            >
              ورود
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <Snackbar
        message="رمز عبور یا نام کاربری وارد شده اشتباه است"
        rtlActive
        open={snackbarInfo}
        closeNotification={() => setSnackbarInfo(false)}
        place="br"
        color="danger"
      />
    </GridContainer>
  );
}
