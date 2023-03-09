import React from 'react';

type HeadingTwoProps = {
  children: React.ReactNode;
};

const HeadingTwo = ({ children }: HeadingTwoProps) => {
  return <h2 className="font-semibold text-2xl col-span-4">{children}</h2>;
};

export default HeadingTwo;
