import * as React from "react";
import { SVGProps } from "react";
const HeartIcon = ({
  fill = "none",
  stroke = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path stroke={stroke} fill={fill} d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);
export default HeartIcon;