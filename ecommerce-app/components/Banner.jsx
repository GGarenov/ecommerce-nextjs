import Image from "next/image";
import bannerImg from "../public/images/bannerImg.jpg";
import { Button } from "./elements/Button";

export const Banner = () => {
  return (
    <div className="flex">
      <div className="banner__image-container w-full sm:w-1/2">
        <Image alt="banner_image" src={bannerImg} />
      </div>
      <div className="banner_description-container w-full sm:w-1/2"></div>
      <div className="flex flex-col w-2/3">
        <h1 className="text-lg pb-3">Introducing New Styles</h1>
        <p className="pb-3">Introducing New Styles</p>
        <Button>Shop now</Button>
      </div>
    </div>
  );
};
