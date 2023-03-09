import MainHeading from '../components/headings/MainHeading';
import CreatePayment from './CreatePayment';
import VerifyPayment from './VerifyPayment';

const Ecommerce = () => {
  return (
    <>
      <MainHeading>E-commerce Integration</MainHeading>
      <CreatePayment />
      <VerifyPayment />
    </>
  );
};

export default Ecommerce;
