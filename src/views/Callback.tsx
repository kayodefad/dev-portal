import React from 'react';
import DescriptionTextWrapper from './components/DescriptionTextWrapper';
import HeadingThree from './components/headings/HeadingThree';
import HeadingTwo from './components/headings/HeadingTwo';
import MainHeading from './components/headings/MainHeading';
import HighlightedText from './components/HighlightedText';
import Info from './components/Info';
import TryItButton from './components/TryItButton';

const Callback = () => {
  return (
    <>
      <MainHeading>Callbacks</MainHeading>
      <div className="mb-20">
        <div>
          <div className="grid grid-cols-6 items-start">
            <HeadingTwo>Overview</HeadingTwo>
            <div className="col-span-2 flex gap-4 justify-end">
              <TryItButton>Try it</TryItButton>
              <TryItButton>Subscribe</TryItButton>
            </div>
          </div>
          <DescriptionTextWrapper>
            <p>
              The callback notifications allow you to receive callback
              notifications on changes of payment statuses.
            </p>
            <div className="mt-2">
              <Info>
                Callback notifications are not notifications by email or phone.
                Callback notifications are received via the API.
              </Info>
              <p className="mt-2">
                The most common notifications describe changes in payment
                status, such as:
              </p>
              <ul className="list-disc ml-7">
                <li>deposit of funds on Merchant's account</li>
                <li>hold of funds on buyer's account</li>
                <li>payment reversal</li>
                <li>refund</li>
              </ul>
              <p className="mt-2">
                More advanced integrations may make use of additional callback
                triggers like:
              </p>
              <ul className="list-disc ml-7">
                <li>saving of a card (i.e., storing a credential)</li>
                <li>enabling/disabling an existing stored credential</li>
                <li>payments being declined, etc.</li>
              </ul>
              <p className="mt-2">
                The trigger type is passed in the{' '}
                <HighlightedText>operation</HighlightedText> parameter of the
                callback . For convenience, the callbacks for addional triggers
                can be directed to another URL by using the{' '}
                <HighlightedText>dynamicCallbackUrl</HighlightedText> parameter
                in payment registration requests.
              </p>
            </div>
          </DescriptionTextWrapper>
          <div className="mt-7" id="user-credentials">
            <HeadingTwo>Integration with callback</HeadingTwo>
            <div className="mt-7">
              <HeadingThree>Use of returnURL</HeadingThree>
            </div>
            <DescriptionTextWrapper>
              When you create a payment request, a returnURL can be specified
              for the specific payment request. All updates to the payment
              transaction will raise notifications to the specified endpoint.
            </DescriptionTextWrapper>
            <div className="mt-7">
              <HeadingThree>Use of returnURL</HeadingThree>
            </div>
            <DescriptionTextWrapper>
              If you know how to handle digital certificates and signatures, you
              can use a digitally signed callback with a checksum that the
              gateway may be configured to send. A checksum is used for
              verification and security purposes.
            </DescriptionTextWrapper>
            <div className="mt-7">
              <HeadingThree>When notifications fail</HeadingThree>
            </div>
            <DescriptionTextWrapper>
              <p>
                If a response other than{' '}
                <HighlightedText>200 OK</HighlightedText> is returned to the
                payment gateway, the notification is considered unsuccessful. In
                this case, the payment gateway repeats the notification at
                intervals of 30 seconds until one of the following conditions is
                met:
              </p>
              <ol className="list-disc ml-7">
                <li>the payment gateway receives 200 OK, OR</li>
                <li>there are 3 successive notification failures.</li>
              </ol>
              <Info>
                These settings can be configured on merchant level. For
                customizations beyond the defaults, please reach out to our
                support team
              </Info>
            </DescriptionTextWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Callback;
