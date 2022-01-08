import { ConnectSdk } from "./model";
import delegate = require("connect-sdk-nodejs");
import captures = require("./captures");
import disputes = require("./disputes");
import files = require("./files");
import hostedcheckouts = require("./hostedcheckouts");
import hostedmandatemanagements = require("./hostedmandatemanagements");
import mandates = require("./mandates");
import payments = require("./payments");
import payouts = require("./payouts");
import productgroups = require("./productgroups");
import products = require("./products");
import refunds = require("./refunds");
import riskassessments = require("./riskassessments");
import services = require("./services");
import sessions = require("./sessions");
import tokens = require("./tokens");
import webhooks = require("./webhooks");

const connectSdk: ConnectSdk = {
  init: (context) => {
    delegate.init(context);
    return connectSdk;
  },

  captures,
  disputes,
  files,
  hostedcheckouts,
  hostedmandatemanagements,
  mandates,
  payments,
  payouts,
  productgroups,
  products,
  refunds,
  riskassessments,
  services,
  sessions,
  tokens,

  context: delegate.context,
  webhooks,
};

export = connectSdk;
