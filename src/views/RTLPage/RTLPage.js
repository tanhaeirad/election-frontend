/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import getElectionStatus from "api/getElectionStatus";
import { linearVoteChart, barVoteChart } from "variables/charts.js";
import getElectionResult from "api/getElectionResult";
import IraqMap from "views/IraqMap/iraq";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

const useStyles = makeStyles(styles);

const RTLPage = () => {
  const classes = useStyles();
  const [city, setCity] = React.useState('الأنبار');
  const [electionStatus, setElectionStatus] = React.useState('');
  const [voteData, setVoteData] = React.useState({
    chart: {
      Linear: {
        labels: [],
        series: [[]],
      },
      Bar: {
        labels: [],
        series: [[]],
      }
    },
    table: [],
  });

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
        getElectionStatus(1, electionStatus, setElectionStatus);
        getElectionResult(1, setVoteData);
    }
    return () => { isMounted = false };
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                className="ct-chart"
                data={voteData.chart.Linear}
                type="Line"
                options={linearVoteChart.options}
                listener={linearVoteChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>نمودار خطی آرای نامزدها</h4>
              <p className={classes.cardCategory}>
               {`آخرین نتایج رأی‌گیری در استان ${city}`}
               </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> { electionStatus }
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={voteData.chart.Bar}
                type="Bar"
                options={barVoteChart.options}
                responsiveOptions={barVoteChart.responsiveOptions}
                listener={barVoteChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>نمودار میله‌ای آرای نامزدها</h4>
              <p className={classes.cardCategory}>{`آخرین نتایج رأی‌گیری در استان ${city}`}</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> { electionStatus }
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>وضعیت آرای کاندیدها</h4>
              <p className={classes.cardCategoryWhite}>
                {`کاندیدهای استان ${city}`}
              </p>
            </CardHeader>
            <CardBody>
              <Paper elevation={0} className={classes.paper}>
                <Table
                  stickyHeader
                  tableHeaderColor="success"
                  tableHead={["کد", "نام کاندید", "میزان رأی"]}
                  tableData={voteData.table}
                />
              </Paper>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>نقشه مناطق</h4>
              <p className={classes.cardCategoryWhite}>
                منطقه مورد نظر را انتخاب کنید
              </p>
            </CardHeader>
            <CardBody>
              <div id="mapid"></div>
              <IraqMap city={city} setCity={setCity} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
              <p className={classes.cardCategoryWhite}>
                لیست اعلان های شما
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="success" ایجاد شده است'
                }
                close
                rtlActive
                color="success"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default RTLPage;
