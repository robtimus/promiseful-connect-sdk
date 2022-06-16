import { ConnectSdk } from "./model";
import { wrapCapturesClient } from "./captures";
import { wrapDisputesClient } from "./disputes";
import { wrapFilesClient } from "./files";
import { wrapHostedcheckoutsClient } from "./hostedcheckouts";
import { wrapHostedmandatemanagementsClient } from "./hostedmandatemanagements";
import { wrapMandatesClient } from "./mandates";
import { wrapPaymentsClient } from "./payments";
import { wrapPayoutsClient } from "./payouts";
import { wrapProductgroupsClient } from "./productgroups";
import { wrapProductsClient } from "./products";
import { wrapRefundsClient } from "./refunds";
import { wrapRiskassessmentsClient } from "./riskassessments";
import { wrapServicesClient } from "./services";
import { wrapSessionsClient } from "./sessions";
import { wrapTokensClient } from "./tokens";
import { wrapWebhooksHelper } from "./webhooks";
import delegate = require("connect-sdk-nodejs");

const connectSdk: ConnectSdk = {
  init: (context) => {
    delegate.init(context);
    return connectSdk;
  },

  captures: wrapCapturesClient(delegate.captures),
  disputes: wrapDisputesClient(delegate.disputes),
  files: wrapFilesClient(delegate.files),
  hostedcheckouts: wrapHostedcheckoutsClient(delegate.hostedcheckouts),
  hostedmandatemanagements: wrapHostedmandatemanagementsClient(delegate.hostedmandatemanagements),
  mandates: wrapMandatesClient(delegate.mandates),
  payments: wrapPaymentsClient(delegate.payments),
  payouts: wrapPayoutsClient(delegate.payouts),
  productgroups: wrapProductgroupsClient(delegate.productgroups),
  products: wrapProductsClient(delegate.products),
  refunds: wrapRefundsClient(delegate.refunds),
  riskassessments: wrapRiskassessmentsClient(delegate.riskassessments),
  services: wrapServicesClient(delegate.services),
  sessions: wrapSessionsClient(delegate.sessions),
  tokens: wrapTokensClient(delegate.tokens),

  context: delegate.context,
  webhooks: wrapWebhooksHelper(delegate.webhooks),
  obfuscate: delegate.obfuscate,
};

export = connectSdk;
