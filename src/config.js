export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_z1r0smA5HAEotQRz2vwHEp0P00dXQoSRzY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "new-notes-app-client-marlon-castaneda"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zg8ciqp35l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_4RIhoNzrA",
    APP_CLIENT_ID: "7b34stnrmi8kpek8ilqecafnus",
    IDENTITY_POOL_ID: "us-east-1:fa7ff4ab-7c52-4014-b9b4-d7fd1f6d5e0d"
  }
};