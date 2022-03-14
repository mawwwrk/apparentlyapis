export interface ResponseResult {
  [key: string]: CollectionType | string | number;
}

export interface ApiResponseType {
  code: number;
  attributionText: string;
  attributionHTML: string;
  data: ResponseData;
  etag: string;
  status: string;
}

export interface ResponseData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResponseResult[];
}
export type RefCache = { [key: string]: ApiResponseType };

export interface CollectionItems {
  resourceURI: string;
}

export interface CollectionType {
  available: number;
  collectionURI: string;
  returned: number;
  items: Array<CollectionItems>;
}
