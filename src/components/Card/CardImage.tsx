type CardImageProps = { path: string; extension: string };
export default function CardImage({ path, extension }: CardImageProps) {
  return <img className="thumbnail" src={`${path}.${extension}`} alt="" />;
}
