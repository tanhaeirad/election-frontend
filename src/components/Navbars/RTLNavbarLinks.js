import React from "react";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Divider from "@material-ui/core/Divider";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js";

const useStyles = makeStyles(styles);

export default function RTLNavbarLinks() {
  const classes = useStyles();
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const handleToggle = (event) => {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return shouldRedirect ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search,
          }}
          inputProps={{
            placeholder: "جستجو...",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>آمارها</p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={open ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>۳</span>
          <Hidden mdUp implementation="css">
            <p onClick={handleToggle} className={classes.linkText}>
              اعلان‌ها
            </p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(open)}
          anchorEl={open}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !open }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropdownItem}
                    >
                      اعلان دیگر
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropdownItem}
                    >
                      اعلان دیگر
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropdownItem}
                    >
                      اعلان دیگر
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        onClick={handleClickProfile}
        aria-label="Person"
        className={classes.buttonLink}
      >
        <Person className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>حساب کاربری</p>
        </Hidden>
      </Button>
      <Poppers
        open={Boolean(openProfile)}
        anchorEl={openProfile}
        transition
        disablePortal
        className={
          classNames({ [classes.popperClose]: !openProfile }) +
          " " +
          classes.popperNav
        }
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseProfile}>
                <MenuList role="menu">
                  <MenuItem
                    onClick={handleCloseProfile}
                    className={classes.dropdownItem}
                  >
                    پروفایل
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseProfile}
                    className={classes.dropdownItem}
                  >
                    تنظیمات
                  </MenuItem>
                  <Divider light />
                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      setShouldRedirect(true);
                    }}
                    className={classes.dropdownItem}
                  >
                    خروج
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Poppers>
    </div>
  );
}
