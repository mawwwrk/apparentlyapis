// @ts-nocheck
import MD5 from "crypto-js/md5";
const closure1 = (k) => {
  return (p) => (t) => MD5(t, k, p);
};

const key = import.meta.env.VITE_MCAPI_P_KEY;
const makeHash = closure1(key);

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

const d = function () {
  const ode = (...args) => {
    let k;
    let l = args.length;
    for (const [i, x] of args.entries()) {
      l *= l;
      k = !i ? x : parseInt(k + x, l);
    }
    return String.fromCodePoint(k);
  };

  const dec = (input) =>
    atob(input)
      .split("")
      .filter((x) => x !== ",")
      .reduce((p, c, i, a) => {
        const [al, pl] = [a, p].map((x) => x.length);
        const q = p[pl - 1];
        i % 2 === 0 ? p.push(c) : (p[pl - 1] = ode(q, c));
        return p;
      }, []);

  return (arr) => dec(arr).join("");
};

export { doFetch, getImageDimensions, d, makeHash };
