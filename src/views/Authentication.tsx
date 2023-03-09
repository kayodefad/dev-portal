import { CopyBlock, dracula } from 'react-code-blocks';
import DescriptionTextWrapper from './components/DescriptionTextWrapper';
import HighlightedText from './components/HighlightedText';
import TryItButton from './components/TryItButton';
import Info from './components/Info';
import MainHeading from './components/headings/MainHeading';
import HeadingTwo from './components/headings/HeadingTwo';
import HeadingThree from './components/headings/HeadingThree';
import Table from './components/Table';
import {
  accessTokenTableData,
  tableHeadings,
  userNamePasswordTableData,
} from '../data/authentication';

const headers = `
  Content-Type: application/x-www-form-urlencoded
  Ocp-Apim-Subscription-Key: <your subscription key>

`;

const Authentication = () => {
  return (
    <>
      <MainHeading>Authentication</MainHeading>
      <div className="mb-20">
        <div>
          <div className="grid grid-cols-6 items-start">
            <HeadingTwo>Authentication</HeadingTwo>
            <div className="col-span-2 flex gap-4 justify-end">
              <TryItButton>Try it</TryItButton>
              <TryItButton>Subscribe</TryItButton>
            </div>
          </div>
          <DescriptionTextWrapper>
            Merchant authentication in the payment gateway is handled through a
            combination of two methods
          </DescriptionTextWrapper>
          {/* Subscription Keys */}
          <div className="mt-7" id="subscription-key">
            <HeadingTwo>Subscription Key</HeadingTwo>
            <DescriptionTextWrapper>
              <p>
                The subscription key is to be provided with a header{' '}
                <HighlightedText>Ocp-Apim-Subscription-Key.</HighlightedText>
              </p>
              <p>
                Subscription keys are provided on the profile section of the{' '}
                <a
                  className="underline text-blue-400"
                  href="https://apim.hydrogenpay.com/profile"
                >
                  dev portal.
                </a>
              </p>
              <Info>
                We recommend using primary subscription keys with secondary keys
                used as backup method
              </Info>
              <p>These headers are required</p>
              <div className="mt-2 text-[14.4px]">
                <CopyBlock text={headers} theme={dracula} />
              </div>
            </DescriptionTextWrapper>
          </div>
          {/* User Credentials */}
          <div className="mt-7" id="user-credentials">
            <HeadingTwo>User Credentials</HeadingTwo>
            <DescriptionTextWrapper>
              <p>
                In addition to subscription keys, user credentials are provided
                to authenticate and authorize every merchant.
              </p>
              <p>Either of the options can be used </p>
            </DescriptionTextWrapper>
            <div className="mt-7">
              <HeadingThree>Username and password</HeadingThree>
              <DescriptionTextWrapper>
                <p>
                  Using <HighlightedText>userName</HighlightedText> and{' '}
                  <HighlightedText>password</HighlightedText> of the merchant's
                  API user (account with -api postfix) received on registration.
                  These values are passed in{' '}
                  <HighlightedText>userName</HighlightedText> and{' '}
                  <HighlightedText>password</HighlightedText> parameters
                  correspondingly (see the table below).
                </p>
                <p className="mt-2">
                  The userName and password for production environment are
                  provided through email.
                </p>
              </DescriptionTextWrapper>
              <Table headings={tableHeadings}>
                {userNamePasswordTableData.map((row, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                      {row.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-block border-[0.5px] border-[#205FBE] rounded px-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal">
                        {row.mandatory}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {row.type}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
            <div className="mt-7">
              <HeadingThree>Access Token</HeadingThree>
              <DescriptionTextWrapper>
                <p>
                  Using an <HighlightedText>accessToken</HighlightedText>. This
                  is an alternative to the username and password and is used
                  alongside the subscription key for authentication.
                </p>
              </DescriptionTextWrapper>
              <Table headings={tableHeadings}>
                {accessTokenTableData.map((row, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                      {row.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-block border-[0.5px] border-[#205FBE] rounded px-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal">
                        {row.mandatory}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {row.type}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
