import React from "react";

import { Img, Line, Text } from "../../components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<[]>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-6 mt-9 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start md:ml-[0] ml-[145px] mr-[770px] w-[37%] md:w-full">
              <Img
                className="h-[110px] md:h-auto object-cover w-[110px]"
                src="images/img_344647901_110x110.png"
                alt="344647901_One"
              />
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterBold24WhiteA700"
              >
                <span className="text-white-A700 font-inter text-left font-bold">
                  <>
                    DUMBWAYS.ID
                    <br />
                  </>
                </span>
                <span className="text-gray-400 font-inter text-left text-base font-light">
                  Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang
                  Selatan, Banten 15413
                </span>
              </Text>
            </div>
            <Line className="bg-white-A700 h-0.5 mt-[67px] w-full" />
            <Text
              className="mt-[26px] text-center text-white-A700 text-xl"
              size="txtInterMedium20WhiteA700"
            >
              Komisi Pemilihan Umum DumbWays.ID | A Putra Ridwan Susilo 2023
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
