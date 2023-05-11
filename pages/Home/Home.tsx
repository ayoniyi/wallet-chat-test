import Nav from "../../components/nav/Nav";
import style from "./Home.module.scss";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Demo from "./assets/demo.svg";
import Hero from "./assets/heroImg.webp";
import Hero2 from "./assets/hero22.png";
import Line from "./assets/line.svg";

import TradeIcon from "./assets/tradeIcon.svg";
import Cart from "./assets/cart.svg";

import Trade from "./assets/trade.svg";
import Xchange from "./assets/xchange.svg";
import Sell from "./assets/sell.svg";
import SellSocial from "./assets/sellSocial.svg";

import Phone1 from "./assets/phone1n.png";
//import Phone2 from "./assets/phone2n.png";
import Phone3 from "./assets/chat.png";
import Chains from "./assets/chains.png";
import Lat from "./assets/tr.png";
import btmPhone from "./assets/btmPhone.webp";

import dashboard from "./assets/tradesbg.png";
import dashboardM from "./assets/tradesSm2.png";
import exchange from "./assets/exchange.svg";

import Safe from "./assets/safe.svg";
import Trust from "./assets/trust.svg";
import Transparent from "./assets/transparent.svg";

import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/footer/Footer";
// import Waitlist from "../../components/modals/Waitlist";

import { useRef, useState } from "react";
import ConnectWallet from "../../components/ConnectWallet/ConnectWallet";
import { useIsMounted } from "../../hooks/useIsMounted";
import { WalletChatWidget } from "../../components/rwc/dist/index";
//import { gsap, Power3, Expo } from "gsap";

const Home = () => {
  const settings = {
    dots: false,
    //fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1100,
    autoplaySpeed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    vertical: true,
  };
  const [showModal, setShowModal] = useState(false);
  const [widgetState, setWidgetState] = useState({
    chatAddr: "",
    isOpen: false,
  });
  const handleClose = () => {
    setShowModal(false);
  };
  const heroTxt: any = useRef();
  const btn1: any = useRef();
  const btn2: any = useRef();
  const heroImg: any = useRef();

  const mounted = useIsMounted();

  //
  const handleChat = () => {
    setWidgetState({
      ...widgetState,
      chatAddr: "0xA45eF0134e9f2F1f639A0d48C550deBc215CB760",
      isOpen: !widgetState.isOpen,
    });
  };

  return (
    <>
      <Nav />
      {mounted && <ConnectWallet />}

      <div className={style.container}>
        <section className={style.hero}>
          <div className={style.heroContent}>
            <div
              className={`${style.heroText} animate__animated animate__fadeIn animate__delay-2s`}
              ref={heroTxt}
            >
              <div className={style.heroTitle}>
                <h1>Escrow everything!</h1>
                <h1>
                  Exchange <span className={style.hSp}>products</span>{" "}
                </h1>
                <div className={style.textSlideBox}>
                  {" "}
                  <Slider {...settings} className={style.textSlide}>
                    <span>products</span>

                    <span>services</span>

                    <span>rewards</span>
                  </Slider>
                </div>
              </div>

              <div className={style.heroSubtxt}>
                <p>
                  Creating a safer and inclusive environment for p2p exchange.
                </p>
              </div>
            </div>

            <div
              className={`${style.heroBtns} animate__animated animate__fadeInLeft animate__delay-3s`}
            >
              <button
                //onClick={() => setShowModal(true)} ref={btn1}
                id="openConnect2"
              >
                Connect Wallet
                {/* <Image src={TradeIcon} alt="trade" /> */}
              </button>
              {/* <button
                //onClick={() => setShowModal(true)} ref={btn1}
                id="openConnect3"
              >
                Marketplace
                <Image src={Cart} alt="marketplace" />
              </button> */}
              {/* <div className={style.demo} ref={btn2}>
                <p>Demo</p>
                <Image src={Demo} alt="demo" />
              </div> */}
            </div>
            <div
              className={`${style.heroImg} animate__animated animate__fadeInUp animate__delay-3s`}
              ref={heroImg}
            >
              <Image src={Hero} alt="escrow everything.." />
            </div>
            <div className={style.heroImgM}>
              <Image src={Hero2} alt="escrow everything.." />
            </div>
          </div>
          <div className={style.heroBanner}>
            <div className={style.hBContent}>
              <div className={style.hBStats}>
                <div className={style.hStat}>
                  <h2>$40k</h2>
                  <p>Processed</p>
                </div>
                <div className={style.hStat}>
                  <h2>500+</h2>
                  <p>Transactions</p>
                </div>
                <div className={style.hStat}>
                  <h2>300+</h2>
                  <p>Items exchanged</p>
                </div>{" "}
              </div>
              <div className={style.hBTxt}>
                <Image src={Line} alt="stats" />
                <p>
                  With over <span>10,000 </span> users across the globe, our
                  mission is to create a much safer ecosystem for users to
                  interact.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div onClick={handleChat} className={style.chat}>
          <WalletChatWidget widgetState={widgetState} />
        </div>
      </div>
    </>
  );
};

export default Home;
