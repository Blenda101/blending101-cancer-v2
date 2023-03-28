/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
}
const Title = (props: TitleProps) => {
  const { title, subtitle } = props;
  return (
    <div className="text-center">
      <img src="img/title_border.svg" className="img-fluid" alt="" />
      <h2 className="sec_title">{title}</h2>
      <h4 className="sec_subtitle">{subtitle}</h4>
    </div>
  );
};

export default Title;
