function doFetch() {
  let response;
  fetch(
    "https://gateway.marvel.com:443/v1/public/events?apikey=b1e589bdcf49a1e7df3c58fbf7fcf188",
    {
      referrer: "developer.marvel.com",
      method: "GET",
    }
  )
    .then(
      (response) => response.json()
      // console.log("response", response);
    )
    .then((data) => {
      response = data;
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });
  /* .finally(
      () => {
        console.log("finally");
      }
    ); */
  return response;
}

function getImageDimensions(imgSource: string) {
  const img = new Image();
  img.src = imgSource;
  return {
    width: img.width,
    height: img.height,
    aspectRatio: `${img.width} / ${img.height}`,
  };
}

export { doFetch, getImageDimensions };
