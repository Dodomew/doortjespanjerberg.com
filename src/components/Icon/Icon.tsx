// import React from "react";
// // import Icons from "../../style/sprite.svg";

// /*
//     Use as:
//      <Icon name={"arrow-down"} color={"#000"} sizeW={24} sizeH={24}></Icon>

//      Note:
//      When generating svg, remove all "fill" properties as you pass a fill value on the Icon component. 
//      If a fill property is still in the svg, the fill override wont work
// */

// interface IconProps {
//   name: string;
//   color: string;
//   sizeW: number;
//   sizeH: number;
//   extraClass?: string;
// }

// const Icon = (props: IconProps) => {
//   const { name, color, sizeW, sizeH, extraClass } = {
//     ...props,
//   };

//   return (
//     <svg
//       className={`icon icon-${name} ${extraClass ? extraClass : ""}`}
//       fill={color}
//       width={sizeW}
//       height={sizeH}
//     >
//       <use xlinkHref={`${Icons}#${name}`} />
//     </svg>
//   );
// };

// export default Icon;
export default {};