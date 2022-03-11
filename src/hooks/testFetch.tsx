import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  outline: hotpink solid 5px;
  height: 640px;
  width: 100%;
  margin: 10% auto;
  display: flex;
  place-items: center;
  justify-content: center;
`;

const APITarget = import.meta.env.DEV ? import.meta.env.VITE_MCI_API_URL : "";

export default function TestComponent() {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(APITarget, {
      headers: { referer: "comicvine.gamespot.com" },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dat) => {
        console.log(dat);
        setData(dat);
        setIsLoading(false);
        return dat;
      })
      .catch((error_) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <Div>
      <h1>Test Component</h1>
    </Div>
  );
}
