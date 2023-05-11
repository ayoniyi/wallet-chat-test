import React from "react";
import style from "./UserNav.module.scss";
import Logo from "./logo.svg";
import ex from "./Exchange.svg";
import Image from "next/image";
import Link from "next/link";

const UserNav = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.links}>
            <div className={style.logo}>
              <Link href="/">
                {" "}
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <div className={style.text}>
              <p className="hvr-underline-from-right">Marketplace</p>
              <p className={`${style.grey} hvr-underline-from-right`}>
                My trades
              </p>
            </div>
          </div>
          <div className={style.btn}>
            <div className={style.sell}>
              <p>Sell</p>
              <Image src={ex} alt="sell" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNav;
