import React from "react";
import { Button, Img, Text  } from "../../components";
import Footer from "../../components/Footer";

const VoteOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
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
            PEMILU PRESIDEN DUMBWAYS.ID
          </Text>
          <Text
            className="ml-80 md:ml-[0] text-white-A700 text-xl"
            size="txtInterRegular20"
          >
            Partai | Paslon | Voting
          </Text>
          <Text
            className="bg-blue_gray-100_01 flex h-[45px] items-center justify-center md:ml-[0] ml-[39px] rounded-[22px] text-black-900 text-center text-xl w-[45px]"
            size="txtInterBold20"
          >
            D
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col justify-start p-[69px] md:px-10 sm:px-5 w-full">
          <Text
            className="md:ml-[0] ml-[347px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
            size="txtInterBlack48"
          >
            INFO PEMILU TERUPDATE
          </Text>
          <div className="flex md:flex-col flex-row gap-12 items-center justify-start max-w-[1082px] mt-[70px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start w-[35%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBlack40"
              >
                Hasil :
              </Text>
              <div className="h-[368px] relative w-full">
                <Img
                  className="h-[368px] m-auto object-cover w-full"
                  src="images/img_2954750419767pdg040259_368x377.png"
                  alt="2954750419767pd"
                />
                <div className="absolute flex flex-col md:gap-10 gap-[81px] justify-start left-[11%] top-[23%] w-[71%]">
                  <Text
                    className="md:ml-[0] ml-[52px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterBold24Black900"
                  >
                    45%
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="mb-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterBold24Black900"
                    >
                      25%
                    </Text>
                    <Text
                      className="mt-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterBold24Black900"
                    >
                      78%
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start w-[61%] md:w-full">
              <div className="bg-pink-300 flex md:flex-col flex-row gap-9 items-center justify-start p-[17px] rounded-[15px] shadow-bs2 w-full">
                <div className="bg-gray-900_01 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center ml-2 md:ml-[0] p-[13px] rounded-[10px]">
                  <Text
                    className="mt-[5px] text-base text-center text-white-A700"
                    size="txtInterBold16WhiteA700"
                  >
                    <>
                      No.
                      <br />
                      Paslon
                    </>
                  </Text>
                  <Text
                    className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBold32"
                  >
                    3
                  </Text>
                </div>
                <div className="flex flex-col relative w-[78%] md:w-full">
                  <Text
                    className="mx-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                    size="txtInterBlack40Gray90001"
                  >
                    CINTARA SURYA PALOH
                  </Text>
                  <Text
                    className="mt-[-0.01px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 z-[1]"
                    size="txtInterBold36"
                  >
                    78%
                  </Text>
                </div>
              </div>
              <div className="bg-amber-300 flex flex-col items-start justify-start p-[17px] rounded-[15px] shadow-bs3 w-full">
                <div className="flex sm:flex-col flex-row gap-9 items-center justify-start ml-2 md:ml-[0] w-[66%] md:w-full">
                  <div className="bg-light_green-900 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center p-[13px] rounded-[10px]">
                    <Text
                      className="mt-[5px] text-base text-center text-white-A700"
                      size="txtInterBold16WhiteA700"
                    >
                      <>
                        No.
                        <br />
                        Paslon
                      </>
                    </Text>
                    <Text
                      className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtInterBold32"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-light_green-900"
                      size="txtInterBlack40Lightgreen900"
                    >
                      SURYA SURYA
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-900"
                      size="txtInterBold36Lightgreen900"
                    >
                      45%
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue-400 flex flex-row gap-9 items-center justify-start p-[17px] rounded-[15px] shadow-bs4 w-full">
                <div className="bg-teal-800 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-start ml-2 p-[13px] rounded-[10px]">
                  <Text
                    className="mt-[5px] text-base text-center text-white-A700"
                    size="txtInterBold16WhiteA700"
                  >
                    <>
                      No.
                      <br />
                      Paslon
                    </>
                  </Text>
                  <Text
                    className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBold32"
                  >
                    2
                  </Text>
                </div>
                <div className="md:h-[46px] h-[87px] relative w-[30%]">
                  <Text
                    className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-teal-800 top-[0] w-max"
                    size="txtInterBlack40Teal800"
                  >
                    CINTARA
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] text-4xl sm:text-[32px] md:text-[34px] text-teal-800"
                    size="txtInterBold36Teal800"
                  >
                    25%
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold leading-[normal] mb-2 min-w-[466px] sm:min-w-full md:ml-[0] ml-[538px] mr-[296px] mt-[79px] md:text-3xl sm:text-[28px] text-[32px] text-center"
            shape="round"
            color="lime_900_01"
            size="md"
            variant="fill"
          >
            MASUKAN SUARAMU
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[75px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
              size="txtInterBlack48"
            >
              INFO PASLON
            </Text>
            <div className="flex md:flex-col flex-row font-jua md:gap-10 items-center justify-between w-full">
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[215px] md:mt-0 mt-[231px] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100 text-center w-12"
                size="txtJuaRegular32"
              >
                <>&lt;</>
              </Text>
              <div className="bg-white-A700 flex md:flex-col flex-row font-inter gap-[42px] items-start justify-end p-16 md:px-10 sm:px-5 rounded-[10px] shadow-bs5">
                <Img
                  className="h-[328px] sm:h-auto md:mt-0 mt-[7px] object-cover rounded-[10px] w-[31%] md:w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <div className="flex flex-col gap-4 items-start justify-start md:mt-0 my-1.5 w-[65%] md:w-full">
                  <div className="h-[73px] relative w-[90%] sm:w-full">
                    <Text
                      className="mb-[-5.52px] text-2xl md:text-[22px] text-black-900 sm:text-xl z-[1]"
                      size="txtInterBold24Black900"
                    >
                      Nomor Urut : 1
                    </Text>
                    <Text
                      className="mt-auto mx-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                      size="txtInterBold40Gray90001"
                    >
                      CINTARA SURYA PALOH
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterRegular24"
                  >
                    <>
                      Visi & Misi :<br />
                      Memindahkan Indonesia ke Isekai.
                      <br />
                      Nonton anime 3x sehari.
                      <br />
                      Melakukan peresapan pada budaya jepang.
                      <br />
                      <br />
                      Koalisi :<br />
                      Partai Persatuan Wiboo.
                      <br />
                      Partai Redbull.
                      <br />
                      Partai Black Magic.
                    </>
                  </Text>
                </div>
              </div>
              <Text
                className="bg-white-A700 flex h-12 items-center justify-center mb-[219px] md:mt-0 mt-[227px] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100 text-center w-12"
                size="txtJuaRegular32"
              >
                <>&gt;</>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-[77px] p-[131px] md:px-10 sm:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-red-A700"
            size="txtInterBold40RedA700"
          >
            <>
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
              <br />
              YANG PENTING TIDAK MELEGALKAN SLOT
            </>
          </Text>
        </div>
        <Footer className="bg-black-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default VoteOnePage;
