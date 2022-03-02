import data from "../data";

const response = data;

export default function Story() {
  const { title, description } = response;
  const { path, extension } = response.thumbnail;
  return (
    <div>
      <h1>{title}</h1>
      <img className="thumbnail" src={`${path}.${extension}`} alt="" />
      <p>{description}</p>
    </div>
  );
}
