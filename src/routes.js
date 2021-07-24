// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Restore from "@material-ui/icons/Restore";
import AddComment from "@material-ui/icons/AddCircleOutlineTwoTone";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";
import ResetElection from "views/ResetElection/ResetElection";
import addElectionResult from "views/AddElectionResult/AddElectionResult";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "داشبورد",
    icon: Dashboard,
    component: RTLPage,
    layout: "/rtl",
    role: ["Inspector", "Supervisor", "Admin", "Visitor"],
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "حساب کاربری",
    icon: Person,
    component: UserProfile,
    layout: "/rtl",
    role: ["Inspector", "Supervisor", "Admin", "Visitor"],
  },
  {
    path: "/enter-election-result",
    name: "Enter Election Result",
    rtlName: "وارد کردن نتیجه انتخابات",
    icon: AddComment,
    component: addElectionResult,
    layout: "/rtl",
    role: ["Inspector", "Supervisor"],
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "نقشه",
    icon: LocationOn,
    component: Maps,
    layout: "/rtl",
    role: ["Inspector", "Supervisor", "Admin", "Visitor"],
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "اطلاعیه ها",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/rtl",
    role: ["Inspector", "Supervisor", "Admin", "Visitor"],
  },
  {
    path: "/reset-election",
    name: "Reset Election",
    rtlName: "بازگردانی انتخابات",
    icon: Restore,
    component: ResetElection,
    layout: "/rtl",
    role: ["Admin"],
  },
];

export default dashboardRoutes;
