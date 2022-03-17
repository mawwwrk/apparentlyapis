import { AllEndpoints, StringPartial } from "./types";

function apiSecret() {
  return import.meta.env.VITE_API_KEY;
}

const base = "https://gateway.marvel.com";
const api: StringPartial = "/v1/public/";
const path: AllEndpoints = "series";
const stringify = (qp: Record<string, string | number> = {}) =>
  Object.entries(qp)
    .map(([key, value]) => {
      return `&${key}=${value}`;
    })
    .join("");
const urlString = (_path = path) => {
  return `${base}${api}${_path}?apikey=${apiSecret()}`;
};
const appendQuery = (url, query) => `${url}${stringify(query)}`;
export { urlString, appendQuery };

// function queryParameters(qp: Record<string, string | number> = {}) {
//   let queryParameters = qp;
//   function setQueryParameters(parameters: Record<string, string | number>) {
//     queryParameters = {
//       ...queryParameters,
//       ...(Array.isArray(parameters)
//         ? Object.fromEntries(parameters)
//         : parameters),
//     };
//   }

//   function stringifyQueryParams() {
//     return;
//   }
//   return {
//     set: setQueryParameters,
//     get: () => queryParameters,
//     stringify: stringifyQueryParams,
//   };
// }
// // queryParameters

// function path(p: AllEndpoints = "series") {
//   let path = p;
//   function setPath(value: string) {
//     const cleanString = value.startsWith("/") ? value.slice(1) : value;
//     path = cleanString as typeof path;
//   }
//   return {
//     set: setPath,
//     get: () => path,
//   };
// }

// function getRequest() {
//   const getKey = apiSecret;
//   const obj = {
//     path: path().get(),
//     _base: `${base}${api}`,
//     queryParameters: queryParameters().get(),
//     queryString: queryParameters().stringify(),
//     href: `${base}${api}${path().get()}?${queryParameters().stringify()}`,
//   };
//   return obj;
// }

// export { getRequest, queryParameters, path };
