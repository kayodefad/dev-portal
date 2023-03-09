export const userNamePasswordTableData = [
  {
    name: 'userName',
    mandatory: 'true',
    type: 'String',
    description: `Merchant's API account login. If you pass your login and password to authenticate in the payment gateway, do not pass token parameter.`,
  },
  {
    name: 'password',
    mandatory: 'true',
    type: 'String',
    description: `Merchant's API account password. If you pass your login and password to authenticate in the payment gateway, do not pass token parameter.`,
  },
];

export const accessTokenTableData = [
  {
    name: 'token',
    mandatory: 'true',
    type: 'String',
    description: `Value that is used for merchant authentication when requests are sent to the payment gateway. If you pass this parameter do not pass userName and password.`,
  },
];

export const tableHeadings = ['Name', 'Mandatory', 'Type', 'Description'];
