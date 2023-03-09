import React from 'react';

type HighlightedTextProps = {
  children: React.ReactNode;
};

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return (
    <span className="inline-block border border-[#C4C4C4] rounded bg-[#EFF1F3] leading-none mx-1 px-2 py-[2.5px] text-[10px] text-[#484848]">
      {children}
    </span>
  );
};

export default HighlightedText;
