import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/logo.svg";
import Logo2 from "./assets/footlogo2.png";
import Discord from "./assets/discord.svg";
import IG from "./assets/ig.svg";
import Twitter from "./assets/twitter.svg";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.footLogo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={style.footLinks}>
          <Link href="/#what-we-offer">
            <li className="hvr-underline-from-right">What we offer</li>
          </Link>
          <Link href="/#how-it-works">
            {" "}
            <li className="hvr-underline-from-right">How it works</li>
          </Link>
          <Link href="#" className="disable">
            <li className="hvr-underline-from-right disable">Whitepaper</li>
          </Link>
        </div>
        <div className={style.footIcons}>
          <Link href="/" className="disable">
            <Image src={Discord} className="hvr-pulse" alt="discord" />
          </Link>

          <Link href="/" className="disable">
            <Image src={IG} className="hvr-pulse" alt="IG" />
          </Link>

          <a href="https://twitter.com/buylistnft_">
            <Image src={Twitter} className="hvr-pulse" alt="twitter" />
          </a>
        </div>
      </div>
      <div className={style.footerContentM}>
        <div className={style.footLeftM}>
          <div className={style.footLogoM}>
            <Image src={Logo} alt="logo" />
          </div>
          <div className={style.footIconsM}>
            <Link href="/" className="disable">
              <Image src={Discord} alt="discord" />
            </Link>
            <Link href="/" className="disable">
              <Image src={IG} alt="IG" />
            </Link>
            <a href="https://twitter.com/buylistnft_">
              <Image src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div className={style.footRightM}>
          <Link href="/#what-we-offer">
            <p className="hvr-underline-from-right">What we offer </p>
          </Link>
          <Link href="/#how-it-works">
            {" "}
            <p className={`${style.linkMt} hvr-underline-from-right`}>
              How it works
            </p>
          </Link>
          <Link href="#" className="disable">
            <p className="hvr-underline-from-right">Whitepaper</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
