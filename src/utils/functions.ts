function doFetch() {
  let res;
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
      res = data;
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
  return res;
}

export { doFetch };
