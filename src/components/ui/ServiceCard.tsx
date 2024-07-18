import { cn } from "@/utils/cn";
import TitleWrapper from "./TitleWrapper";
import Typography from "../Typography";
import { MdArrowOutward } from "react-icons/md";
import Image, { StaticImageData } from "next/image";

export type variants = "primary" | "secondary" | "tertiary";

export interface IServiceCardProps {
  title: string;
  variants: variants;
  image: StaticImageData;
}

export interface IServiceCardStyles {
  background: string;
  variant: variants;
  icon: string;
  text: string;
}

const styles: Record<variants, IServiceCardStyles> = {
  primary: {
    background: "bg-primary",
    variant: "tertiary",
    icon: "bg-secondary text-primary rounded-full p-2",
    text: "text-secondary",
  },
  secondary: {
    background: "bg-secondary",
    variant: "tertiary",
    icon: "bg-tertiary text-secondary rounded-full p-2",
    text: "text-tertiary",
  },
  tertiary: {
    background: "bg-tertiary",
    variant: "primary",
    icon: "bg-secondary text-primary rounded-full p-2",
    text: "text-secondary",
  },
};

export default function ServiceCard({
  title,
  variants,
  image,
}: IServiceCardProps) {
  const titles = title.split("#");
  const BACKGROUND_CLASS_NAMES = styles[variants].background;
  const ICON_CLASS_NAMES = styles[variants].icon;
  const TEXT_CLASS_NAMES = styles[variants].text;
  return (
    <div
      className={cn(
        BACKGROUND_CLASS_NAMES,
        "grid grid-cols-2 rounded-md border border-black border-b-[6px] cursor-pointer p-8"
      )}
    >
      <div className="flex flex-col gap-y-12">
        <div className="col-start-1 col-end-2 flex flex-col">
          {titles.map((title) => (
            <TitleWrapper variant={styles[variants].variant}>
              <Typography variant={3}>{title}</Typography>
            </TitleWrapper>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <div className={ICON_CLASS_NAMES}>
            <MdArrowOutward size={24} />
          </div>
          <Typography variant={6} classNames={TEXT_CLASS_NAMES}>Learn More</Typography>
        </div>
      </div>

      <div className="col-start-2 col-end-3 ml-auto">
        <Image src={image} alt="Service Image" width={200} height={200} />
      </div>
    </div>
  );
}
