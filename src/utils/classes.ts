import { APIPaths, MarvelCategories, Paths } from "./types";

interface MarvelFetchRequest {
  headersList: Headers;
  path: MarvelCategories<string>;
  queryParameters;
  base: string;
  apiSecret: string;
}

class RequestHelper {
  #apiSecret = import.meta.env.VITE_API_KEY;
  private _queryParameters: string | undefined;
  constructor(
    public headersList = new Headers({
      referer: "developer.marvel.com/",
    }),
    public readonly base = "https://gateway.marvel.com:443/v1/public",
    public path: Paths = "series",
    parameterSet = {}
  ) {
    this.queryParameters = parameterSet;
  }
  get queryParameters() {
    return this._queryParameters ?? "" + `&apikey=${this.#apiSecret}`;
  }
  set queryParameters(
    parameterSet: string | string[][] | Record<string, string> | URLSearchParams
  ) {
    this._queryParameters = new URLSearchParams(parameterSet).toString();
  }
}
