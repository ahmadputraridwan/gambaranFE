import React from "react";

import { Button, Img, Text } from "../../components";

const AddPaslonPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[140px] w-full">
        <div className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[9px] w-full">
          <Img
            className="h-[41px] md:h-auto md:ml-[0] ml-[141px] object-cover w-[41px]"
            src="images/img_344647901_110x110.png"
            alt="344647901"
          />
          <Text
            className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24WhiteA700"
          >
            DASHBOARD PEMILU
          </Text>
          <Text
            className="md:ml-[0] ml-[573px] text-white-A700 text-xl"
            size="txtInterRegular20"
          >
            Partai | Paslon
          </Text>
          <Text
            className="bg-blue_gray-100_01 flex h-[45px] items-center justify-center md:ml-[0] ml-[45px] rounded-[22px] text-black-900 text-center text-xl w-[45px]"
            size="txtInterBold20"
          >
            A
          </Text>
        </div>
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          ADD PASLON
        </Text>
        <div className="flex md:flex-col flex-row gap-[57px] items-start justify-center max-w-[1005px] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[523px] sm:h-auto object-cover rounded-[10px] w-[37%] md:w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[58%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-700 text-justify sm:text-xl"
                size="txtInterBold24Gray700"
              >
                Nama
              </Text>
              <div className="bg-white-A700 border-2 border-gray-700 border-solid h-[70px] mt-1 rounded-[15px] w-full"></div>
              <Text
                className="mt-[15px] text-2xl md:text-[22px] text-gray-700 text-justify sm:text-xl"
                size="txtInterBold24Gray700"
              >
                Nomor Urut
              </Text>
              <div className="bg-white-A700 border-2 border-gray-700 border-solid h-[70px] mt-1 rounded-[15px] w-full"></div>
              <Text
                className="mt-3.5 text-2xl md:text-[22px] text-gray-700 text-justify sm:text-xl"
                size="txtInterBold24Gray700"
              >
                Visi Misi
              </Text>
              <div className="bg-white-A700 border-2 border-gray-700 border-solid h-[249px] mt-[5px] rounded-[15px] w-full"></div>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[503px] sm:min-w-full rounded-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              color="lime_900"
              size="md"
              variant="fill"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPaslonPage;
