export const tableHeadings = [
  'Name',
  'Required',
  'Type',
  'Example',
  'Description',
];

export const requestHeadersTableData = [
  {
    name: 'Ocp-Apim-Subscription-Key',
    required: 'true',
    type: 'String',
    example: '',
    description: ``,
  },
];

export const createPaymentResponse = {
  language: 'javascript',
  code: `
  {
    "statusCode": "90000",
    "message": null,
    "data": {
        "responseCode": "00",
        "responseMessage": "Operation Successful",
        "transactionReference": "a84d14a8-b74c-7475-8733-0acb00bbaee0",
        "amount": 230000,
        "approvedAmount": 230000,
        "currency": 566,
        "merchantReference": "10906530638101152000000000",
        "transactionStatus": "Successful",
        "authenticationUrl": "https://hydrogen.uat.radarpayment.online/payment/merchants/multiecom/payment.html?mdOrder=a84d14a8-b74c-7475-8733-0acb00bbaee0&language=en",
        "callBackUrl": "https://hydrogenpay.com/callback"
    }
  }
  `,
};

export const verifyPaymentResponse = {
  language: 'javascript',
  code: `
  {
    "statusCode": "90000",
    "message": null,
    "data": {
        "responseCode": "00",
        "responseMessage": "order amount is fully authorized",
        "orderNumber": "9001",
        "amount": 2300,
        "currency": 566,
        "date": "11/24/2022 10:24:56",
        "orderDescription": "test Operation",
        "ip": "102.89.23.14",
        "attributes": [{
            "name": "mdOrder",
            "value": "73a412d1-4ab4-79e5-b3ad-8c4f00bbaee0"
        }],
        "terminalId": "50300002",
        "paymentAmountInfo": {
            "paymentState": "DEPOSITED",
            "approvedAmount": 2300,
            "depositedAmount": 2300,
            "refundedAmount": 0
        },
        "bankInfo": {
            "bankCountryCode": "UNKNOWN",
            "bankCountryName": "&ltUnknown&gt"
        },
        "errorCode": "0",
        "errorMessage": "Success"
    }
  }
  `,
};
