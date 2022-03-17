// @ts-nocheck
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
  const { propsClickHandler, data, variant, isModalChild } = props;
  const header = data?.name ?? data?.title ?? "none";
  const description = data?.description ?? "";
  const picVariant = variant ?? "/portrait_medium";
  const showText = props?.showText ?? false;
  const handleClick = () => {
    !isModalChild && console.log(header);
    propsClickHandler && propsClickHandler(data);
  };
  let src;
  try {
    src = `${data.thumbnail.path}${picVariant}.${data.thumbnail.extension}`;
  } catch {
    console.debug("no src");
    src = undefined;
  }

  return (
    <div className="card" onClick={handleClick} aria-hidden="true">
      <h2>{showText && header}</h2>
      {src && <img className="thumbnail" src={src} alt="" />}
      <p>{description !== undefined && showText && description}</p>
    </div>
  );
}

export { Card };
