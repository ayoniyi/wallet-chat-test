import { useEffect, useRef, useState } from "react";
import { gsap, Power3, Expo } from "gsap";
import Image from "next/image";
import Link from "next/link";
import style from "./Nav.module.scss";
import Logo from "./assets/logo.svg";
import Ham from "./assets/ham.svg";
import Close from "./assets/close.svg";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useIsMounted } from "../../hooks/useIsMounted";

export const NavMobile = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [showModal, setShowModal] = useState(false);
  // const handleClose = () => {
  //   setShowModal(false);
  // };
  const mounted = useIsMounted();
  const menu = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const menuLogo = useRef();
  const menuBtn = useRef();
  const openMenu = useRef();
  const closeMenu = useRef();

  useEffect(() => {
    setIsLoading(false);
    const menuItems = document.querySelectorAll(".mLinks > li");
    const t1 = gsap.timeline();
    t1.to(menu.current, 1, {
      right: 0,
      ease: Power3.easeInOut,
    });
    t1.staggerTo(
      menuLogo.current,
      0.2,
      { opacity: 1, ease: Expo.easeOut },
      "0.1",
      "-=0.2"
    );
    t1.staggerTo(
      menuItems,
      0.6,
      { x: -60, opacity: 1, ease: Expo.easeOut },
      "0.1",
      "-=0.2"
    );
    t1.staggerTo(
      menuBtn.current,
      0.2,
      { y: -100, opacity: 1, ease: Expo.easeOut },
      "0.1",
      "-=0.2"
    );

    t1.reverse();
    openMenu.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link1.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link2.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };
    link3.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };

    closeMenu.current.onclick = function () {
      t1.reversed(!t1.reversed());
    };

    //}
  }, [menu, isLoading]);

  return (
    <>
      {mounted && <ConnectWallet />}
      {/* {showModal && <Waitlist handleClose={handleClose} />} */}
      <nav className={style.containerM}>
        <div className={style.contentM}>
          <div className={style.logoBoxM}>
            <Image src={Logo} alt="logo" />
          </div>
          <div className={style.hamBox}>
            <div className={style.hamImg} ref={openMenu}>
              <Image src={Ham} alt="menu" />
            </div>
          </div>
        </div>

        <div className={style.navMenu} ref={menu}>
          <div className={style.menuContent}>
            <div className={style.menuTop}>
              <div className={style.menuLogo} ref={menuLogo}>
                <Image src={Logo} alt="logo" />
              </div>

              <div className={style.closeMenu} ref={closeMenu}>
                <Image src={Close} alt="close" />
              </div>
            </div>
            <div className={style.menuBody}>
              <ul className={`${style.menuLinks} mLinks`}>
                <li className={style.mLink} ref={link1}>
                  <Link className="disable" href="/#what-we-offer">
                    What we offer{" "}
                  </Link>
                </li>
                <li className={style.mLink} ref={link2}>
                  <Link className="disable" href="/#how-it-works">
                    How it works
                  </Link>
                </li>
                <li className={`${style.mLink} `} ref={link3}>
                  <Link className="disable" href="#">
                    Whitepaper
                  </Link>
                </li>
                <div className={style.menuBtns} ref={menuBtn}>
                  <button
                    id="openConnect4"
                    //onClick={() => setShowModal(true)}
                  >
                    Connect Wallet
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
