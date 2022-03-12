import "./card.css";

const variants = {
  aspectRatio: ["portrait", "standard", "landscape"],
  size: ["small", "medium", "xlarge", "fantastic", "uncanny", "incredible"],
  fullSize: ["detail"],
};

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
    variant?: string;
    isModalChild?: boolean;
    showText?: boolean;
  }
  // fields: undefined
) {
  const {
    propsClickHandler,
    data: { description, thumbnail, ...rest },
    variant,
    isModalChild,
  } = props;
  const header = rest?.name ?? rest?.title ?? "none";
  const picVariant = variant ?? "/portrait_medium";
  const showText = props?.showText ?? false;
  const handleClick = () => {
    !isModalChild && console.log(header);
    propsClickHandler && propsClickHandler(props.data);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{showText && header}</h2>
      <img
        className="thumbnail"
        src={
          thumbnail?.path &&
          thumbnail?.extension &&
          `${path}${picVariant}.${extension}`
        }
        alt=""
      />
      );
      <p>{showText && description}</p>
    </div>
  );
}

export { Card };
