export type variants = "primary" | "secondary" | "tertiary";

export interface IServiceCardProps {
  title: string;
  variants: variants;
  images: string;
}

export default function ServiceCard({
  title,
  variants,
  images,
}: IServiceCardProps) {
  const titles = title.split("#");
  return <h1>{title}</h1>;
}
