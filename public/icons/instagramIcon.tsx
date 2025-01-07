import * as React from "react";
import { SVGProps } from "react";
const InstagramIcon = ({
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
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path stroke={stroke} fill={fill} d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path stroke={stroke} fill={fill} d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path stroke={stroke} fill={fill} d="M16.5 7.5v.01" />
  </svg>
);
export default InstagramIcon;
