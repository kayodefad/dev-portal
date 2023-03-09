import { CopyBlock, dracula } from 'react-code-blocks';
import {
  requestHeadersTableData,
  tableHeadings,
  verifyPaymentResponse,
} from '../../data/e-commerce';
import DescriptionTextWrapper from '../components/DescriptionTextWrapper';
import HeadingThree from '../components/headings/HeadingThree';
import HeadingTwo from '../components/headings/HeadingTwo';
import Request from '../components/Request';
import Table from '../components/Table';
import TryItButton from '../components/TryItButton';

const VerifyPayment = () => {
  return (
    <div className="mb-20" id="verify-payment">
      <div className="grid grid-cols-6 items-start">
        <HeadingTwo>Verify Payment</HeadingTwo>
        <div className="col-span-2 flex gap-4 justify-end">
          <TryItButton>Try it</TryItButton>
          <TryItButton>Subscribe</TryItButton>
        </div>
      </div>
      <DescriptionTextWrapper>
        <p>
          For businesses in Africa, E-commerce integrations can help streamline
          their online sales process by providing a reliable and secure way to
          accept payments from customers. The ability to initiate and verify
          payments directly through the e-commerce API can save businesses time
          and resources, allowing them to focus on growing their business and
          delivering exceptional services. Additionally, the API integration can
          support various payment methods, such as bank transfers, which can
          increase the accessibility of the products and services to a wider
          customer base.
        </p>
        <p className="mt-3">
          Verify payment allows merchants to verify the status of payments using
          the e-commerce integration. It takes in the payment reference and
          returns the status of the payment or order (such as success, failure,
          pending, etc.). This helps ensure they receive payment for the goods
          or services they have provided.
        </p>
      </DescriptionTextWrapper>
      <div className="mt-7">
        <HeadingThree>Request</HeadingThree>
        <div className="mt-5">
          <Request
            requestType="POST"
            url="https://api.hydrogenpay.com/sandbox/api/v1/integration/verify-payment"
          ></Request>
        </div>
      </div>
      <div className="mt-7">
        <HeadingThree>Request Headers</HeadingThree>
        <Table headings={tableHeadings}>
          {requestHeadersTableData.map((row, i) => (
            <tr key={i}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                {row.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span className="inline-block border-[0.5px] border-[#205FBE] rounded px-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal">
                  {row.required}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {row.type}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {row.example}
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">
                {row.description}
              </td>
            </tr>
          ))}
        </Table>
      </div>
      <div className="mt-7">
        <HeadingThree>Response: 200 OK</HeadingThree>
        <div className="mt-7 text-[14.4px]">
          <CopyBlock
            language={verifyPaymentResponse.language}
            text={verifyPaymentResponse.code}
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;
