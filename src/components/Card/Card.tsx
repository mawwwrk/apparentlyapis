import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import "./card.css";

function Card(
  props: {
    propsClickHandler: () => void;
    data: {
      description: string;
      thumbnail: { path: string; extension: string };
      title: string | null;
      name: string | null;
      id: number | null;
      images: {
        path: string;
        extension: string;
      }[];
    };
  }
  // fields: undefined
) {
  const {
    propsClickHandler,
    data: {
      description,
      thumbnail: { path, extension },
      ...rest
    },
  } = props;
  const header = rest?.name ?? rest?.title ?? "none";

  const showHeader = false;
  const handleClick = () => {
    console.log(header);
    propsClickHandler();
  };

  return (
    <div className="card" onClick={handleClick}>
      {showHeader ? <CardTitle header={header} data={rest} /> : ""}
      <CardImage {...{ path, extension }} />
      <CardDescription {...{ description }} />
    </div>
  );
}

export { Card };
