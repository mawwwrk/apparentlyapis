import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import "./card.css";

function Card(props: {
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}) {
  const {
    title,
    description,
    thumbnail: { path, extension },
  } = props;
  return (
    <div className="card">
      <CardTitle {...{ title }} />
      <CardImage {...{ path, extension }} />
      <CardDescription {...{ description }} />
    </div>
  );
}

export { Card };
