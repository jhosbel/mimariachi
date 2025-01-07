import * as React from "react";
import { SVGProps } from "react";
const StarIcon = ({
  fill = "none",
  stroke = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    id="Grupo_10"
    data-name="Grupo 10"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      id="Trazado_80"
      data-name="Trazado 80"
      d="M0,0H24V24H0Z"
      fill="none"
    />
    <path
      id="Trazado_81"
      data-name="Trazado 81"
      d="M12,17.75,5.828,20.995l1.179-6.873-5-4.867,6.9-1L11.993,2l3.086,6.253,6.9,1-5,4.867,1.179,6.873Z"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default StarIcon;
