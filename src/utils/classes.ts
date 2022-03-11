import { d } from "./functions";

class URLBase {
  static #key = {
    string: import.meta.env.VITE_MCAPI_API_KEY,
    key: d(),
  };
  #queryMap: Map<string, string>;
  private _queryParams: Map<string, string> | undefined;
  constructor(public base: string) {
    this.base = base;
    this.#queryMap = new Map([
      ["apikey", URLBase.#key.key(URLBase.#key.string)],
    ]);
  }

  set queryParams(args) {
    const base = this._queryParams ?? this.#queryMap;
    if (typeof args === "object") {
      for (const [key, value] of Object.entries(args)) {
        base.set(key, value);
      }
    } else if (Array.isArray(args)) {
      for (const [key, value] of args) {
        base.set(key, value);
      }
    }
    this._queryParams = base;
  }
  get queryParams() {
    return this._queryParams;
  }
}

class URLObject extends URLBase {
  constructor(
    public base: string,
    public path?: string,
    queryParams?: Map<string, string>,
    public options?: RequestInit
  ) {
    super(base);
    this.queryParams = queryParams;
    this.options = options;
    this.path = path;
  }
  get url() {
    if (this.path) {
      const url = new URL(this.path, this.base);
      if (this.queryParams) {
        for (const [key, value] of this.queryParams) {
          url.searchParams.set(key, value);
        }
      }
      return url.toString();
    }
  }
}

export { URLObject };
