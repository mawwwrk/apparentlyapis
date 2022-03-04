type CardDescriptionProps = { description: string };
export default function CardDescription({
  description,
}: CardDescriptionProps): JSX.Element {
  return <p>{description}</p>;
}
