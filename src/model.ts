import { Context, FileMetaData, ObfuscationRules, PaymentContext, SdkContext } from "connect-sdk-nodejs/lib/model";
import { UploadFileRequest } from "connect-sdk-nodejs/lib/model/disputes";
import { CaptureResponse, CapturesResponse } from "connect-sdk-nodejs/lib/model/domain/capture";
import { CreateDisputeRequest, DisputeResponse, DisputesResponse, UploadDisputeFileResponse } from "connect-sdk-nodejs/lib/model/domain/dispute";
import { CreateHostedCheckoutRequest, CreateHostedCheckoutResponse, GetHostedCheckoutResponse } from "connect-sdk-nodejs/lib/model/domain/hostedcheckout";
import {
  CreateHostedMandateManagementRequest,
  CreateHostedMandateManagementResponse,
  GetHostedMandateManagementResponse,
} from "connect-sdk-nodejs/lib/model/domain/hostedmandatemanagement";
import { CreateMandateRequest, CreateMandateResponse, GetMandateResponse } from "connect-sdk-nodejs/lib/model/domain/mandates";
import {
  ApprovePaymentRequest,
  CancelApprovalPaymentResponse,
  CancelPaymentResponse,
  CapturePaymentRequest,
  CompletePaymentRequest,
  CompletePaymentResponse,
  CreatePaymentRequest,
  CreatePaymentResponse,
  DeviceFingerprintDetails,
  FindPaymentsResponse,
  PaymentApprovalResponse,
  PaymentResponse,
  ThirdPartyStatusResponse,
  TokenizePaymentRequest,
} from "connect-sdk-nodejs/lib/model/domain/payment";
import { ApprovePayoutRequest, CreatePayoutRequest, FindPayoutsResponse, PayoutResponse } from "connect-sdk-nodejs/lib/model/domain/payout";
import {
  CreatePaymentProductSessionRequest,
  CreatePaymentProductSessionResponse,
  DeviceFingerprintRequest,
  DeviceFingerprintResponse,
  Directory,
  GetCustomerDetailsRequest,
  GetCustomerDetailsResponse,
  PaymentProductGroupResponse,
  PaymentProductGroups,
  PaymentProductNetworksResponse,
  PaymentProductResponse,
  PaymentProducts,
} from "connect-sdk-nodejs/lib/model/domain/product";
import { ApproveRefundRequest, FindRefundsResponse, RefundRequest, RefundResponse, RefundsResponse } from "connect-sdk-nodejs/lib/model/domain/refund";
import { RiskAssessmentBankAccount, RiskAssessmentCard, RiskAssessmentResponse } from "connect-sdk-nodejs/lib/model/domain/riskassessments";
import {
  BankDetailsRequest,
  BankDetailsResponse,
  ConvertAmount,
  GetIINDetailsRequest,
  GetIINDetailsResponse,
  GetPrivacyPolicyResponse,
  TestConnection,
} from "connect-sdk-nodejs/lib/model/domain/services";
import { SessionRequest, SessionResponse } from "connect-sdk-nodejs/lib/model/domain/sessions";
import { ApproveTokenRequest, CreateTokenRequest, CreateTokenResponse, TokenResponse, UpdateTokenRequest } from "connect-sdk-nodejs/lib/model/domain/token";
import { FindPaymentsParams } from "connect-sdk-nodejs/lib/model/payments";
import { FindPayoutsParams } from "connect-sdk-nodejs/lib/model/payouts";
import { FindProductgroupsParams, GetProductgroupParams } from "connect-sdk-nodejs/lib/model/productgroups";
import { DirectoryParams, FindProductsParams, GetProductParams, NetworksParams } from "connect-sdk-nodejs/lib/model/products";
import { FindRefundsParams } from "connect-sdk-nodejs/lib/model/refunds";
import { ConvertAmountParams, PrivacypolicyParams } from "connect-sdk-nodejs/lib/model/services";
import { DeleteTokenParams } from "connect-sdk-nodejs/lib/model/tokens";
import { Readable } from "stream";
import { WebhooksHelper } from "./webhooks/model";

export interface FileData extends FileMetaData {
  content: Readable;
}

export interface CapturesClient {
  get(merchantId: string, captureId: string, paymentContext?: PaymentContext | null): Promise<CaptureResponse>;
  refund(merchantId: string, captureId: string, postData: RefundRequest, paymentContext?: PaymentContext | null): Promise<RefundResponse>;
}

export interface DisputesClient {
  get(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<DisputeResponse>;
  submit(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<DisputeResponse>;
  cancel(merchantId: string, disputeId: string, paymentContext?: PaymentContext | null): Promise<DisputeResponse>;
  uploadFile(merchantId: string, disputeId: string, postData: UploadFileRequest, paymentContext?: PaymentContext | null): Promise<UploadDisputeFileResponse>;
}

export interface FilesClient {
  getFile(merchantId: string, fileId: string, paymentContext?: PaymentContext | null): Promise<FileData>;
}

export interface HostedcheckoutsClient {
  create(merchantId: string, postData: CreateHostedCheckoutRequest, paymentContext?: PaymentContext | null): Promise<CreateHostedCheckoutResponse>;
  get(merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null): Promise<GetHostedCheckoutResponse>;
  remove(merchantId: string, hostedCheckoutId: string, paymentContext?: PaymentContext | null): Promise<void>;
}

export interface HostedmandatemanagementsClient {
  create(merchantId: string, postData: CreateHostedMandateManagementRequest, paymentContext?: PaymentContext | null): Promise<CreateHostedMandateManagementResponse>;
  get(merchantId: string, hostedMandateManagementId: string, paymentContext?: PaymentContext | null): Promise<GetHostedMandateManagementResponse>;
}

export interface MandatesClient {
  create(merchantId: string, postData: CreateMandateRequest, paymentContext?: PaymentContext | null): Promise<CreateMandateResponse>;
  createWithMandateReference(
    merchantId: string,
    uniqueMandateReference: string,
    postData: CreateMandateRequest,
    paymentContext?: PaymentContext | null
  ): Promise<CreateMandateResponse>;
  get(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<GetMandateResponse>;
  block(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<GetMandateResponse>;
  unblock(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<GetMandateResponse>;
  revoke(merchantId: string, uniqueMandateReference: string, paymentContext?: PaymentContext | null): Promise<GetMandateResponse>;
}

export interface PaymentsClient {
  create(merchantId: string, postData: CreatePaymentRequest, paymentContext?: PaymentContext | null): Promise<CreatePaymentResponse>;
  find(merchantId: string, paymentContext: FindPaymentsParams): Promise<FindPaymentsResponse>;
  get(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<PaymentResponse>;
  complete(merchantId: string, paymentId: string, postData: CompletePaymentRequest, paymentContext?: PaymentContext | null): Promise<CompletePaymentResponse>;
  thirdPartyStatus(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<ThirdPartyStatusResponse>;
  tokenize(merchantId: string, paymentId: string, postData: TokenizePaymentRequest, paymentContext?: PaymentContext | null): Promise<CreateTokenResponse>;
  processchallenged(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<PaymentResponse>;
  approve(merchantId: string, paymentId: string, postData: ApprovePaymentRequest, paymentContext?: PaymentContext | null): Promise<PaymentApprovalResponse>;
  capture(merchantId: string, paymentId: string, postData: CapturePaymentRequest, paymentContext?: PaymentContext | null): Promise<CaptureResponse>;
  cancelapproval(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<CancelApprovalPaymentResponse>;
  captures(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<CapturesResponse>;
  refund(merchantId: string, paymentId: string, postData: RefundRequest, paymentContext?: PaymentContext | null): Promise<RefundResponse>;
  refunds(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<RefundsResponse>;
  cancel(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<CancelPaymentResponse>;
  dispute(merchantId: string, paymentId: string, postData: CreateDisputeRequest, paymentContext?: PaymentContext | null): Promise<DisputeResponse>;
  disputes(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<DisputesResponse>;
  devicefingerprint(merchantId: string, paymentId: string, paymentContext?: PaymentContext | null): Promise<DeviceFingerprintDetails>;
}

export interface PayoutsClient {
  create(merchantId: string, postData: CreatePayoutRequest, paymentContext?: PaymentContext | null): Promise<PayoutResponse>;
  find(merchantId: string, paymentContext: FindPayoutsParams): Promise<FindPayoutsResponse>;
  get(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<PayoutResponse>;
  approve(merchantId: string, payoutId: string, postData: ApprovePayoutRequest, paymentContext?: PaymentContext | null): Promise<PayoutResponse>;
  cancel(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<void>;
  cancelapproval(merchantId: string, payoutId: string, paymentContext?: PaymentContext | null): Promise<void>;
}

export interface ProductgroupsClient {
  find(merchantId: string, paymentContext: FindProductgroupsParams): Promise<PaymentProductGroups>;
  get(merchantId: string, paymentProductGroupId: string, paymentContext: GetProductgroupParams): Promise<PaymentProductGroupResponse>;
  deviceFingerprint(
    merchantId: string,
    paymentProductGroupId: string,
    postData: DeviceFingerprintRequest,
    paymentContext?: PaymentContext | null
  ): Promise<DeviceFingerprintResponse>;
}

export interface ProductsClient {
  find(merchantId: string, paymentContext: FindProductsParams): Promise<PaymentProducts>;
  get(merchantId: string, paymentProductId: number, paymentContext: GetProductParams): Promise<PaymentProductResponse>;
  directory(merchantId: string, paymentProductId: number, paymentContext: DirectoryParams): Promise<Directory>;
  customerDetails(merchantId: string, paymentProductId: number, postData: GetCustomerDetailsRequest, paymentContext?: PaymentContext | null): Promise<GetCustomerDetailsResponse>;
  deviceFingerprint(merchantId: string, paymentProductId: number, postData: DeviceFingerprintRequest, paymentContext?: PaymentContext | null): Promise<DeviceFingerprintResponse>;
  networks(merchantId: string, paymentProductId: number, paymentContext: NetworksParams): Promise<PaymentProductNetworksResponse>;
  sessions(
    merchantId: string,
    paymentProductId: number,
    postData: CreatePaymentProductSessionRequest,
    paymentContext?: PaymentContext | null
  ): Promise<CreatePaymentProductSessionResponse>;
}

export interface RefundsClient {
  find(merchantId: string, paymentContext: FindRefundsParams): Promise<FindRefundsResponse>;
  get(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<RefundResponse>;
  approve(merchantId: string, refundId: string, postData: ApproveRefundRequest, paymentContext?: PaymentContext | null): Promise<void>;
  cancel(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<void>;
  cancelapproval(merchantId: string, refundId: string, paymentContext?: PaymentContext | null): Promise<void>;
}

export interface RiskassessmentsClient {
  bankaccounts(merchantId: string, postData: RiskAssessmentBankAccount, paymentContext?: PaymentContext | null): Promise<RiskAssessmentResponse>;
  cards(merchantId: string, postData: RiskAssessmentCard, paymentContext?: PaymentContext | null): Promise<RiskAssessmentResponse>;
}

export interface ServicesClient {
  convertAmount(merchantId: string, paymentContext: ConvertAmountParams): Promise<ConvertAmount>;
  bankaccount(merchantId: string, postData: BankDetailsRequest, paymentContext?: PaymentContext | null): Promise<BankDetailsResponse>;
  getIINdetails(merchantId: string, postData: GetIINDetailsRequest, paymentContext?: PaymentContext | null): Promise<GetIINDetailsResponse>;
  privacypolicy(merchantId: string, paymentContext: PrivacypolicyParams): Promise<GetPrivacyPolicyResponse>;
  testconnection(merchantId: string, paymentContext?: PaymentContext | null): Promise<TestConnection>;
}

export interface SessionsClient {
  create(merchantId: string, postData: SessionRequest, paymentContext?: PaymentContext | null): Promise<SessionResponse>;
}

export interface TokensClient {
  create(merchantId: string, postData: CreateTokenRequest, paymentContext?: PaymentContext | null): Promise<CreateTokenResponse>;
  get(merchantId: string, tokenId: string, paymentContext?: PaymentContext | null): Promise<TokenResponse>;
  update(merchantId: string, tokenId: string, postData: UpdateTokenRequest, paymentContext?: PaymentContext | null): Promise<void>;
  remove(merchantId: string, tokenId: string, paymentContext: DeleteTokenParams): Promise<void>;
  approvesepadirectdebit(merchantId: string, tokenId: string, postData: ApproveTokenRequest, paymentContext?: PaymentContext | null): Promise<void>;
}

export interface ConnectSdk {
  init(context: Context): ConnectSdk;

  readonly captures: CapturesClient;
  readonly disputes: DisputesClient;
  readonly files: FilesClient;
  readonly hostedcheckouts: HostedcheckoutsClient;
  readonly hostedmandatemanagements: HostedmandatemanagementsClient;
  readonly mandates: MandatesClient;
  readonly payments: PaymentsClient;
  readonly payouts: PayoutsClient;
  readonly productgroups: ProductgroupsClient;
  readonly products: ProductsClient;
  readonly refunds: RefundsClient;
  readonly riskassessments: RiskassessmentsClient;
  readonly services: ServicesClient;
  readonly sessions: SessionsClient;
  readonly tokens: TokensClient;

  readonly context: SdkContext;

  readonly webhooks: WebhooksHelper;

  readonly obfuscate: ObfuscationRules;
}
