import React from "react";

import { Button, Img, List, Text } from "components";

const AdminPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
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
            className="md:ml-[0] ml-[588px] text-white-A700 text-xl"
            size="txtInterRegular20"
          >
            Partai | Paslon
          </Text>
          <Text
            className="bg-blue_gray-100_01 flex h-[45px] items-center justify-center md:ml-[0] ml-[30px] rounded-[22px] text-black-900 text-center text-xl w-[45px]"
            size="txtInterBold20"
          >
            A
          </Text>
        </div>
        <Text
          className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          DASHBOARD
        </Text>
        <List
          className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1140px] mt-12 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[154px] relative w-1/5">
                <div className="bg-amber-300 h-[76px] m-auto outline outline-[5px] outline-light_green-900 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-light_green-900 w-max"
                  size="txtInterBold40Lightgreen900"
                >
                  1
                </Text>
              </div>
              <div className="bg-amber-300 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs6 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-900"
                    size="txtInterBlack40Lightgreen900"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-light_green-900 text-shadow-ts text-xl"
                    size="txtInterMedium20"
                  >
                    <>
                      Akumulasi :45%
                      <br />
                      Jumlah Vote : 117 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[155px] relative w-1/5">
                <div className="bg-teal-A200 h-[76px] m-auto outline outline-[5px] outline-cyan-900 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-cyan-900 w-max"
                  size="txtInterBold40Cyan900"
                >
                  2
                </Text>
              </div>
              <div className="bg-teal-A200 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs7 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-cyan-900"
                    size="txtInterBlack40Cyan900"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-cyan-900 text-shadow-ts text-xl"
                    size="txtInterMedium20Cyan900"
                  >
                    <>
                      Akumulasi :75%
                      <br />
                      Jumlah Vote : 300 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[155px] relative w-1/5">
                <div className="bg-red-A200 h-[76px] m-auto outline outline-[5px] outline-gray-900_01 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-max"
                  size="txtInterBold40Gray90001"
                >
                  3
                </Text>
              </div>
              <div className="bg-red-A200 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs8 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                    size="txtInterBlack40Gray90001"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-gray-900_01 text-shadow-ts text-xl"
                    size="txtInterMedium20Gray90001"
                  >
                    <>
                      Akumulasi :45%
                      <br />
                      Jumlah Vote : 117 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <footer className="bg-blue_gray-100_01 flex items-center justify-center mt-[126px] md:px-5 w-full">
          <div className="flex flex-col gap-[38px] items-center justify-center mb-48 mt-[140px] mx-auto w-[61%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[53px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
                  size="txtInterBlack48"
                >
                  LIST VOTER
                </Text>
                <ul className="flex flex-col items-center justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly">
                        <div className="flex relative w-[62%] md:w-full">
                          <div className="flex flex-row items-center justify-start my-auto sm:pr-5 pr-[25px] w-[53%]">
                            <Text
                              className="bg-gray-300_01 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] rounded-tl-[1px] text-black-900 text-sm w-[72px]"
                              size="txtInterBold14"
                            >
                              No
                            </Text>
                            <Text
                              className="bg-gray-300_01 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[183px]"
                              size="txtInterBold14"
                            >
                              Nama
                            </Text>
                          </div>
                          <Text
                            className="bg-gray-300_01 h-10 justify-center ml-[-25px] my-auto outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[280px] z-[1]"
                            size="txtInterBold14"
                          >
                            Alamat
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[149px] outline outline-[0.5px] outline-gray-600 text-center text-sm"
                          shape="square"
                          color="gray_300_01"
                          size="sm"
                          variant="fill"
                        >
                          Jenis kelamin
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[191px] outline outline-[0.5px] outline-gray-600 text-center text-sm"
                          shape="square"
                          color="gray_300_01"
                          size="sm"
                          variant="fill"
                        >
                          Paslon
                        </Button>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm"
                          >
                            <Text size="txtInterRegular14">1</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm"
                          >
                            <Text size="txtInterRegular14">
                              Sugeng No Pants
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm"
                          >
                            <Text size="txtInterRegular14">Cileungsi</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm"
                          >
                            <Text size="txtInterRegular14">Laki Laki</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-indigo-900 text-sm"
                          >
                            <Text size="txtInterRegular14Indigo900">Paloh</Text>
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly">
                        <div className="bg-white-A700 flex flex-row items-center justify-evenly w-[30%] md:w-full">
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[72px]"
                            size="txtInterRegular14"
                          >
                            2
                          </Text>
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[183px]"
                            size="txtInterRegular14"
                          >
                            Haris Gams
                          </Text>
                        </div>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[280px]"
                          size="txtInterRegular14"
                        >
                          Serang
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[149px]"
                          size="txtInterRegular14"
                        >
                          Perempuan
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-indigo-900 text-sm w-[191px]"
                          size="txtInterRegular14Indigo900"
                        >
                          Surya
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly">
                        <div className="bg-white-A700 flex flex-row items-center justify-evenly w-[30%] md:w-full">
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[72px]"
                            size="txtInterRegular14"
                          >
                            3
                          </Text>
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[183px]"
                            size="txtInterRegular14"
                          >
                            Aziz Union
                          </Text>
                        </div>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[280px]"
                          size="txtInterRegular14"
                        >
                          Bekasi
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[149px]"
                          size="txtInterRegular14"
                        >
                          Laki Laki
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-indigo-900 text-sm w-[191px]"
                          size="txtInterRegular14Indigo900"
                        >
                          Cintara
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly">
                        <div className="bg-white-A700 flex flex-row items-center justify-evenly w-[30%] md:w-full">
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] rounded-bl-[1px] text-black-900 text-sm w-[72px]"
                            size="txtInterRegular14"
                          >
                            4
                          </Text>
                          <Text
                            className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[183px]"
                            size="txtInterRegular14"
                          >
                            Lae Tanjung Balai
                          </Text>
                        </div>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[280px]"
                          size="txtInterRegular14"
                        >
                          Tanjung Balai
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-black-900 text-sm w-[149px]"
                          size="txtInterRegular14"
                        >
                          Laki Laki
                        </Text>
                        <Text
                          className="bg-white-A700 h-10 justify-center outline outline-[0.5px] outline-gray-600 pl-2.5 sm:pr-5 pr-[35px] py-[11px] text-indigo-900 text-sm w-[191px]"
                          size="txtInterRegular14Indigo900"
                        >
                          Paloh
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              TOTAL SUARA TERKUMPUL : 1000 Voters
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdminPage;
