import React from "react";
import AppComponent from "./App";
import HomeComponent from "./components/Home/Home";

export default [
  {
    path: "/",
    component: HomeComponent,
    exact: true,
  },
  {
    path: "/app",
    component: AppComponent,
  },
];
