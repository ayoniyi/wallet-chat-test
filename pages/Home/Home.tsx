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
  const handleClose = () => {
    setShowModal(false);
  };
  const heroTxt: any = useRef();
  const btn1: any = useRef();
  const btn2: any = useRef();
  const heroImg: any = useRef();

  const mounted = useIsMounted();

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
                Create trade
                <Image src={TradeIcon} alt="trade" />
              </button>
              <button
                //onClick={() => setShowModal(true)} ref={btn1}
                id="openConnect3"
              >
                Marketplace
                <Image src={Cart} alt="marketplace" />
              </button>
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

        <section className={style.services} id="what-we-offer">
          <div className={style.serviceContent}>
            <div className={style.serviceTitle}>
              <h2>Protection as a service</h2>
              {/* <p>
                Making it possible for the crypto ecosystem to safely interact
                with the global marketplace.
              </p> */}
            </div>
            <div className={style.serviceBoxes}>
              <div className={style.serviceRow}>
                <div className={style.serviceBox}>
                  <div className={style.sbTxt}>
                    <h2>Trade whitelist spots</h2>
                    <p>
                      Exchange your whitelist for cash, put it up and see
                      who&apos;s buying!
                    </p>
                  </div>
                  <div className={style.sbImg}>
                    <Image src={Trade} alt="trade spots" />
                  </div>
                </div>
                <div className={style.serviceBox}>
                  <div className={style.sbTxt}>
                    <h2>Sell illiquid tokens </h2>
                    <p>Exchange illiquid tokens in our marketplace</p>
                  </div>
                  <div className={style.sbImg}>
                    <Image src={Sell} alt="sell tokens" />
                  </div>
                </div>
              </div>
              <div className={style.serviceRow}>
                <div className={style.serviceBox}>
                  <div className={style.sbTxt}>
                    <h2>Exchange NFTs</h2>
                    <p> Exchange NFTs for tokens or other NFTs</p>
                  </div>
                  <div className={style.sbImg}>
                    <Image src={Xchange} alt="exchange NFTs" />
                  </div>
                </div>
                <div className={style.serviceBox}>
                  <div className={style.sbTxt}>
                    <h2>Sell social media accounts</h2>
                    <p>
                      {" "}
                      Put your twitter, insta or facebook up and see who&apos;s
                      buying
                    </p>
                  </div>
                  <div className={style.sbImg}>
                    <Image src={SellSocial} alt="sell social media accounts" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.features}>
          <div className={style.featuresContent}>
            <div className={style.featuresTitle}>
              <h2>The easiest and most secure OTC escrow service.</h2>
              {/* <p>
                Our technology is designed to remove 3rd party escrow
                interactions by maximising the power of p2p using crytpcurrency.
              </p> */}
            </div>
            <div className={style.featureBoxes}>
              <div className={style.featureBox}>
                <Image src={Safe} alt="Safety" />
                <h3>Safe</h3>
                <p>Users assets safety is of maximum priority</p>
              </div>
              <div className={style.featureBox}>
                <Image src={Trust} alt="Trustless" />
                <h3>Trustless</h3>
                <p>No third party interactions involved</p>
              </div>
              {/* <div className={style.featureBox}>
                <Image src={feature3} alt="Control" />
                <h3>Control</h3>
                <p>Users control their transactions</p>
              </div> */}
              <div className={style.featureBox}>
                <Image src={Transparent} alt="Transparent" />
                <h3>Transparent</h3>
                <p>The entire transaction process is automated</p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.escrow} id="how-it-works">
          <div className={style.escrowContent}>
            <div className={style.esTitle}>
              <h2>Escrow like its 2023</h2>
            </div>
            <div className={style.esBoxes}>
              <div className={style.esBg}>
                <div className={style.esLeft}>
                  <h2>Sharable transaction links</h2>
                  <p>
                    Once a buyer and seller agree on item to be exchanged +
                    price, seller creates a transaction with the details and
                    shares it to the buyer.
                  </p>
                </div>
                <div className={style.esRight}>
                  <Image src={Phone1} alt="sharable links" />
                </div>
              </div>
              <div className={style.esRow}>
                <div className={style.esSm}>
                  <div className={style.esTop}>
                    <h2>Latent accounts</h2>
                    <p>
                      Buyers now send escrow funds directly to the sellers
                      latent account. Seller cannot process funds until the
                      buyer confirms, eliminating the need for 3rd party
                      involvement
                    </p>
                  </div>
                  <div className={style.esBottom}>
                    <Image src={Lat} alt="latent accounts" />
                  </div>
                </div>
                <div className={style.esSm2}>
                  <div className={style.esTop}>
                    <h2>Chat in transactions </h2>
                    <p>Keep up with users you&apos;re in transcactions with.</p>
                  </div>
                  <div className={style.esBottom}>
                    <Image src={Phone3} alt="sharable giveaway links" />
                  </div>
                </div>
              </div>
              <div className={style.esBg2}>
                <div className={style.esLeft}>
                  <h2>EVM Compatible networks</h2>
                  <p>Runs on all the EVM compatible blockchains</p>
                </div>
                <div className={style.esRight}>
                  <Image src={Chains} alt="sharable links" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.dashboard}>
          <div className={style.dashboardContent}>
            <div className={style.dashboardTitle}>
              <h2>A marketplace for everything</h2>
            </div>
            <div className={style.dashboardImg}>
              <Image className={style.ImgW} src={dashboard} alt="dashboard" />
              <Image className={style.ImgM} src={dashboardM} alt="dashboard" />
            </div>
          </div>
        </section>

        <FAQ />
        <section className={style.bottomBanner}>
          <div className={style.bottomBannerBox}>
            <div className={style.btmBannerContent}>
              <div className={style.btmLeft}>
                <h3>Buylist is a safer ecosystem for all!</h3>
                <p>
                  Join a community of <span>10,000+</span> users safely
                  exhanging items and resourcses
                </p>
                <div className={style.btmLeftBtns}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/messages/compose?recipient_id=1377926822474682373&text=Hello%20Buylist"
                    className="twitter-dm-button"
                    data-screen-name="@buylistnft_"
                  >
                    <div className={style.btmBtn}>
                      Exchange now
                      <Image src={exchange} alt="exchange" />
                    </div>
                  </a>

                  <div
                    className={style.btmBtn2}
                    onClick={() => setShowModal(true)}
                  >
                    Join waitlist
                  </div>
                </div>
              </div>
              <div className={style.btmRight}>
                <Image src={btmPhone} alt="buylist" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
