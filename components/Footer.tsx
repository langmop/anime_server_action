import Image from "next/image";
import LogoImage from "../public/logo.svg";
import TiktokImage from "../public/tiktok.svg";
import InstagramImage from "../public/instagram.svg";
import TwitterImage from "../public/twitter.svg";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <Image
        src={LogoImage}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src={TiktokImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={InstagramImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src={TwitterImage}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
