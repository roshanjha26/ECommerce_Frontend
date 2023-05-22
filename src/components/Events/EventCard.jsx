import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae
          dolores omnis recusandae aperiam et, quam sit aliquid explicabo
          reiciendis exercitationem odio repellat itaque similique quisquam
          error, id a ex. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nobis ea sed veniam explicabo quibusdam atque ratione, similique
          quam nostrum porro vitae consectetur voluptate assumenda, quasi amet
          voluptatibus nulla, quo aliquid
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="flex-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              ₹109999
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              ₹99999
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
