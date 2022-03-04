type CardTitleProps = { title: string };
export default function CardTitle({ title }: CardTitleProps): JSX.Element {
  return <h1>{title}</h1>;
}
