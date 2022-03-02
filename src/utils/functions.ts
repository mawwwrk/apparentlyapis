function doFetch() {
  let res;
  fetch(
    "https://gateway.marvel.com:443/v1/public/events?apikey=b1e589bdcf49a1e7df3c58fbf7fcf188",
    {
      referrer: "developer.marvel.com",
      method: "GET",
    }
  )
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      res = data;
      console.log("data", data);
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(
      () => {
        console.log("finally");
      } /* finally */
    );
  return res;
}

export { doFetch };
