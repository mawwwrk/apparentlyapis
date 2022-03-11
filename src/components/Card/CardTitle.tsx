export default function CardTitle(props: {
  header: string;
  data: { [x: string]: string };
}): JSX.Element {
  const { header, data } = props;
  return <h3>{header}</h3>;
}
