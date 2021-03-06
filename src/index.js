import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock"
import Welcome from "./chapter_04/Welcome";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList"
import Accommodate from "./chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import FuncConfirmButton from "./chapter_08/FuncConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import ReportWebVitals from "./reportWebVitals";
import Reservation from "./chapter_11/Reservation";
import SignUp from "./chapter_11/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*<Library />*/}
    <CommentList />
    <NotificationList />
    <Accommodate />
    <ConfirmButton />
    <FuncConfirmButton />
    <LandingPage />
    <AttendanceBook />
    <Reservation />
    <SignUp />
  </React.StrictMode>
);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//       <Welcome name={"Mike"} number={"test"} />
//       <Welcome name={"Steve"} number={"test"} />
//       <Welcome name={"Jane"} number={"test"} />
//     </React.StrictMode>
//   )
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
