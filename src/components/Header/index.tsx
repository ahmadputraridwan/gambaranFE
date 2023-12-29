import React from "react";

import { Button, Img, Text } from "../../components/";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<[]>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[41px] md:h-auto md:ml-[0] ml-[150px] md:mt-0 my-[11px] object-cover rounded-[5px] w-[41px]"
          src="images/img_344647901.png"
          alt="344647901"
        />
        <Text
          className="md:ml-[0] ml-[17px] md:mt-0 my-4 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtInterBold24WhiteA700"
        >
          PEMILU PRESIDEN DUMBWAYS.ID
        </Text>
        <Text
          className="md:ml-[0] ml-[243px] md:mt-0 my-[19px] text-white-A700 text-xl"
          size="txtInterRegular20"
        >
          Partai | Paslon | Voting
        </Text>
        <Button
          className="cursor-pointer font-bold font-inter leading-[normal] min-w-[118px] md:ml-[0] ml-[43px] mr-[150px] md:mt-0 my-3.5 rounded-[5px] text-center text-xl"
          color="white_A700"
          size="xs"
          variant="fill"
        >
          LOGIN
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
