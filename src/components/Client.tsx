import React from "react";
import styles from "../styles";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";

const Client = ({ client, index }: any) => {
  return (
    <div
      className={`${styles.flexCenter} m-[5px] min-w-[280px] h-[350px] flex-1 relative bg-[#f5fbfd]`}
    >
      <img
        className="rounded-[8px] h-[75%] z-[2]"
        src={client?.picture?.large}
      />
      <div
        className={`h-[100%] w-full absolute opacity-0 hover:opacity-100  ${styles.flexCenter} 
        inset-0 z-[3] bg-translucent cursor-pointer transition ease-in-out duration-500`}
      >
        <div
          className={`w-[40px] h-[40px] rounded-[50%] m-[10px] bg-dimWhite text-primary ${styles.flexCenter} 
          transition ease-in-out duration-500 hover:bg-primary hover:text-dimWhite hover:scale-110`}
        >
          <Link to={`/clients/${client.id.value}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div
          className={`w-[40px] h-[40px] rounded-[50%] m-[10px] bg-dimWhite text-primary ${styles.flexCenter} 
          transition ease-in-out duration-500 hover:bg-primary hover:text-dimWhite hover:scale-110`}
        >
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Client;
