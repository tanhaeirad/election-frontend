/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import InteractiveIranMap from "iran-map";
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
import {
  dailySalesChart,
  emailsSubscriptionChart,
} from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>نمودار خطی آرای نامزدها</h4>
              <p className={classes.cardCategory}>
                آخرین نتایج رأی‌گیری
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> ۴ دقیقه پیش
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>نمودار میله‌ای آرای نامزدها</h4>
              <p className={classes.cardCategory}>آخرین نتایج رأی‌گیری</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> انتخابات از صبح امروز شروع شده است
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>وضعیت آرای کاندیدها</h4>
              <p className={classes.cardCategoryWhite}>
                کاندیدهای استان تهران
              </p>
            </CardHeader>
            <CardBody>
              <Paper elevation={0} className={classes.paper}>
                <Table
                  stickyHeader
                  tableHeaderColor="info"
                  tableHead={["کد", "نام کاندید", "میزان آرا"]}
                  tableData={[
                    ["1", "احمد حسینی	", "36,738"],
                    ["2", "مینا رضایی	", "23,789"],
                    ["3", "مبینا احمدپور ", "56,142"],
                    ["4", "جلال آقایی	", "38,735"],
                    ["5", "مریم سعیدمهر	", "36,738"],
                    ["6", "امیررضا تنهایی راد	", "21,789"],
                    ["7", "آرش کاظمی	", "86,142"],
                    ["8", "محمد مهدویان	", "38,705"],
                    ["9", "فرشته حسن پور	", "3,638"],
                    ["10", "خداداد عزیزی	", "2,379"],
                  ]}
                />
              </Paper>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>نقشه مناطق</h4>
              <p className={classes.cardCategoryWhite}>
                منطقه مورد نظر را انتخاب کنید
              </p>
            </CardHeader>
            <CardBody>
              <InteractiveIranMap/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
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
}
