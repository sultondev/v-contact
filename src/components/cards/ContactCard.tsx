import React from "react";
import RoundedBox from "../UI/RoundedBox";
import { Icon } from "@iconify/react";

type Props = {
  phone: string;
  name: string;
  classes: string;
  handleClick?: () => void;
};

const ContactCard: React.FC<Props> = (props: Props) => {
  const { name, phone, classes, handleClick } = props;

  return (
    <RoundedBox
      boxType="button"
      handleClick={handleClick}
      classes={`min-w-[126px] group hover:bg-[#E9FFFB] cursor-pointer hover:scale-105 ${classes}`}
    >
      <div>
        <div className="bg-main-clr p-2 rounded-xl w-fit mx-auto mb-5">
          <Icon icon="solar:user-bold" className="text-white text-5xl " />
        </div>
        <h6 className="font-semibold text-center ">{name}</h6>
        <span className="">{phone}</span>
      </div>
    </RoundedBox>
  );
};

export default ContactCard;
