import { useState, useRef } from "react";
import style from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/logo.svg";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useIsMounted } from "../../hooks/useIsMounted";

export const NavWeb = () => {
  //const [showConnect, setShowConnect] = useState(false);

  // const handleModal = () => {
  //   setShowConnect(!showConnect);
  // };
  //const openConnect = useRef();
  const mounted = useIsMounted();
  return (
    <>
      {mounted && (
        <ConnectWallet
        //handleModal={handleModal}
        //showConnect={showConnect}
        />
      )}
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            <Image src={Logo} alt="buylist" />
          </div>
          <div className={style.mid}>
            <div className={style.links}>
              <Link
                href="#what-we-offer"
                className={`${style.link} hvr-underline-from-right`}
              >
                <p>What we offer</p>
              </Link>
              <Link
                href="#how-it-works"
                className={`${style.link} hvr-underline-from-right`}
              >
                <p>How it works</p>
              </Link>
              <Link
                href="#"
                className={`${style.link} hvr-underline-from-right disable`}
              >
                <p>Whitepaper</p>
              </Link>
            </div>
          </div>
          <div className={style.right}>
            <button
              id="openConnect"
              //ref={openConnect}
              //onClick={() => setShowModal(true)}
            >
              Create Trade
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
