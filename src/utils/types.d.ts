import {
  type paths,
  type definitions,
  type external,
  type operations,
} from "./MarvelAPIschemaTyped";

export type APIPaths = paths;

type StringPartial = "/v1/public/";

type EndpointSplitter<T> =
  T extends `${StringPartial}${infer B}/{${string}}/${string}`
    ? B
    : T extends `${StringPartial}${infer B}/{${string}}`
    ? B
    : T extends `${StringPartial}${infer B}`
    ? B
    : never;

export type BaseEndpoints = EndpointSplitter<keyof APIPaths>;

type AllEndpoints<
  B extends string = BaseEndpoints,
  A = keyof APIPaths,
  SP extends string = StringPartial
> = A extends `${SP}${infer E}`
  ? E extends `${B}/${string}/${B}`
    ? `${B}/${number}/${B}`
    : E extends `${B}/${string}`
    ? `${B}/${number}`
    : E extends `${B}`
    ? E
    : never
  : never;

// type MarvelCategories<M extends string> = Capitalize<M> &
//   (
//     | "DataContainer"
//     | "DataWrapper"
//     | "List"
//     | "Summary"
//     | ""
//   ) extends keyof definitions
//   ? M
//   : never;

type D = definitions["ComicDataWrapper"];

type BasepointDefine<E> = E extends `${Capitalize<BaseEndpoints>}${infer S}`
  ? S extends ""
    ? never
    : S
  : never;

type DefinitionCategories = BasepointDefine<keyof definitions>;

type ResponseWrappers<D = DefinitionCategories> = D extends keyof definitions
  ? definitions[D]
  : never;

type K = ResponseWrappers;

type Singular<T> = T extends `${infer R}s` ? R : never;

type EndpointDefinition<
  E extends string,
  D extends string = "DataWrapper"
> = `${Capitalize<E>}${D}` extends keyof definitions
  ? definitions[`${Capitalize<E>}${D}`]
  : `${Singular<Capitalize<E>>}${D}` extends keyof definitions
  ? definitions[`${Singular<Capitalize<E>>}${D}`]
  : `${Capitalize<string>}${D}` extends keyof definitions
  ? definitions[`${Capitalize<string>}${D}`]
  : `${string}${DefinitionCategories}` extends keyof definitions
  ? keyof definitions extends infer P
    ? D extends P
      ? definitions[keyof definitions extends `${infer F}${D}`
          ? F & D & keyof definitions
          : keyof definitions]
      : never
    : never
  : never;

export type MarvelResponse<P extends string = 'series'> = P extends StringPartial
  ? EndpointDefinition<EndpointSplitter<P>>
  : EndpointDefinition<P>;
