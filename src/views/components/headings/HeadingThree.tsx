import React from 'react';

type HeadingThreeProps = {
  children: React.ReactNode;
};

const HeadingThree = ({ children }: HeadingThreeProps) => {
  return <h3 className="font-semibold text-base text-black">{children}</h3>;
};

export default HeadingThree;
