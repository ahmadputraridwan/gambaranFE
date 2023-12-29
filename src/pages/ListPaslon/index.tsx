import React from "react";

import { Button, Img, Text } from "components";

const ListPaslonPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[619px] w-full">
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
          className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          LIST PASLON
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[1095px] mt-[58px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[71%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="bg-gray-300_01 flex flex-col items-center justify-start outline outline-[0.5px] outline-gray-600 p-2 rounded-tl-[1px]">
                  <Text
                    className="my-[3px] text-black-900 text-sm"
                    size="txtInterBold14"
                  >
                    No. Urut
                  </Text>
                </div>
                <div className="bg-gray-300_01 flex flex-col items-center justify-end outline outline-[0.5px] outline-gray-600 p-[11px]">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterBold14"
                  >
                    Image
                  </Text>
                </div>
                <div className="flex relative w-[67%] md:w-full">
                  <div className="bg-white-A700 h-10 my-auto md:pr-10 sm:pr-5 pr-[90px] w-[55%]">
                    <div className="bg-gray-300_01 h-10 my-auto outline outline-[0.5px] outline-gray-600 w-[68%]"></div>
                    <Text
                      className="absolute h-max inset-y-[0] left-[29%] my-auto text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      Name
                    </Text>
                  </div>
                  <div className="bg-gray-300_01 flex flex-col items-center justify-start ml-[-90px] my-auto outline outline-[0.5px] outline-gray-600 p-2.5 z-[1]">
                    <Text
                      className="mb-0.5 text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      Visi & Misi
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="md:h-28 h-[113px] relative w-[10%] md:w-full">
                  <div className="bg-white-A700 h-10 mx-auto w-full"></div>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-gray-600 p-2.5 w-full">
                    <Text
                      className="mb-[75px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <div className="md:h-28 h-[113px] relative w-[24%] md:w-full">
                  <div className="bg-white-A700 h-10 mx-auto w-full"></div>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-gray-600 p-[9px] w-full">
                    <Img
                      className="h-[94px] md:h-auto object-cover rounded-[10px] w-[48%]"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
                <div className="flex relative w-[67%] md:w-full">
                  <div className="flex flex-col my-auto w-[55%]">
                    <div className="bg-white-A700 h-10 mx-auto w-full"></div>
                    <Button
                      className="cursor-pointer mb-auto min-w-[190px] mt-[-40px] outline outline-[0.5px] outline-gray-600 text-center text-sm z-[1]"
                      shape="square"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Cintara surya paloh
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start ml-[-90px] my-auto outline outline-[0.5px] outline-gray-600 p-1 z-[1]">
                    <Text
                      className="mb-[37px] text-black-900 text-sm"
                      size="txtInterRegular14"
                    >
                      <>
                        Memindahkan Indonesia ke Isekai.
                        <br />
                        Nonton anime 3x sehari.
                        <br />
                        Melakukan peresapan pada budaya jepang.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative w-[30%] md:w-full">
              <div className="h-[61px] mx-auto w-full">
                <div className="absolute bg-white-A700 h-[61px] inset-y-[0] left-[28%] my-auto w-[38%]"></div>
                <Button
                  className="absolute cursor-pointer font-bold inset-x-[0] min-w-[325px] mx-auto outline outline-[0.5px] outline-gray-600 text-center text-sm top-[0]"
                  shape="square"
                  color="gray_300_01"
                  size="sm"
                  variant="fill"
                >
                  Koalisi
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-21px] mx-auto outline outline-[0.5px] outline-gray-600 p-0.5 w-full z-[1]">
                <Text
                  className="mb-[57px] text-black-900 text-sm"
                  size="txtInterRegular14"
                >
                  <>
                    Partai Persatuan Wiboo.
                    <br />
                    Partai Redbull.
                    <br />
                    Partai Black Magic.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPaslonPage;
