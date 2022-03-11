type CardImageProps = { path: string; extension: string };

const variants = {
  aspectRatio: ["portrait", "standard", "landscape"],
  size: ["small", "medium", "xlarge", "fantastic", "uncanny", "incredible"],
  fullSize: ["detail"],
};
export default function CardImage({ path, extension }: CardImageProps) {
  const variant = "/portrait_medium";
  return (
    <img className="thumbnail" src={`${path}${variant}.${extension}`} alt="" />
  );
}
