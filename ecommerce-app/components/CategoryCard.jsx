import Image from "next/image";
import { Button } from "./elements/Button";

export const CategoryCard = ({ name, imgUrl }) => {
  return (
    <div className="relative w-full h-80">
      <Image src={imgUrl} layout="fill" alt={name} />
      <Button className="absolute -translate-y-1/2 -translate-x-1/2 mx-auto left-1/2 bottom-[10%]">{name}</Button>
    </div>
  );
};
