// Express View engine setup

const hbs = require("hbs");
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");

const view_engine = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "hbs");
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(favicon(path.join(__dirname, "../public", "images", "favicon.ico")));
};

module.exports = view_engine;
