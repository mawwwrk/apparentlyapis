// @ts-nocheck
import { SetStateAction, useEffect, useRef, useState } from "react";

function checkCache() {
  const cacheAvailable = "caches" in globalThis;
  return cacheAvailable;
}

function openCache() {
  const cache = globalThis.caches
    .open("my-cache")
    .then((cache) => {
      console.log("cache", cache);
      return cache;
    })
    .catch((error) => error);
}

export default function useCache() {
  const [cache, setCache] = useState(null);
  const cacheRef = useRef();

  async function doCache() {
    if (cache === null) checkCache(setCache) && openCache();
    if (!cache) return;
    const myCache = await openCache();
    cacheRef.current = myCache;
  }

  useEffect(() => {
    doCache();
    // return () => {
    //   second;
    // };
  }, []);
  return cacheRef.current;
}
