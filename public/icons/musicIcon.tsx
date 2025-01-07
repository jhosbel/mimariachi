import * as React from "react";
import { SVGProps } from "react";
const MusicIcon = ({
  fill = "none",
  stroke = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    id="Grupo_9"
    data-name="Grupo 9"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      id="Trazado_75"
      data-name="Trazado 75"
      d="M0,0H24V24H0Z"
      fill="none"
    />
    <path
      id="Trazado_76"
      data-name="Trazado 76"
      d="M3,17a3,3,0,1,0,3-3,3,3,0,0,0-3,3"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Trazado_77"
      data-name="Trazado 77"
      d="M13,17a3,3,0,1,0,3-3,3,3,0,0,0-3,3"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Trazado_78"
      data-name="Trazado 78"
      d="M9,17V4H19V17"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      id="Trazado_79"
      data-name="Trazado 79"
      d="M9,8H19"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default MusicIcon;
