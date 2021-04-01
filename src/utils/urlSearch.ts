type Params = {
  [key in string | number]: string | number
}

export default class UrlSearch {
  private constructor() {}
  static parse() {}

  static stringify(params: Params) {
    return Object.keys(params)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
      )
      .join('&')
  }
}
