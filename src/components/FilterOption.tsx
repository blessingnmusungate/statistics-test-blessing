import React from "react";
interface Props {
  title: string;
  onClickFunction: Function;
  isActive: boolean;
}
const FilterOption: React.FC<Props> = ({
  title,
  onClickFunction,
  isActive,
}) => {
  return (
    <div
      className={`cursor-pointer py-1 px-3 rounded-md ${
        isActive ? " text-white bg-blue-700" : " text-gray-800 bg-slate-200"
      }`}
      onClick={() => onClickFunction()}
    >
      {title}
    </div>
  );
};

export default FilterOption;
