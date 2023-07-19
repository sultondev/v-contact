import React from "react";
import RoundedBox from "../UI/RoundedBox";
import { Icon } from "@iconify/react";

type Props = {
  id: string;
  value: string;
  classes: string;
  handleClick?: () => void;
};

const TagCard: React.FC<Props> = (props: Props) => {
  const { value, classes, handleClick } = props;
  return (
    <RoundedBox
      boxType="wrapper"
      handleClick={handleClick}
      classes={`!px-0 group hover:bg-[#E9FFFB] cursor-pointer hover:scale-105 ${classes}`}
    >
      <div>
        <div className="bg-main-clr p-2 rounded-xl w-fit mx-auto mb-5">
          <Icon icon="ph:hash-bold" className="text-white text-5xl " />
        </div>
        <h6 className="font-semibold text-center truncate px-2">{value}</h6>
      </div>
    </RoundedBox>
  );
};

export default TagCard;
