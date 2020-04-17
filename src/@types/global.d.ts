export {};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
  interface Console {
    tron: any;
  }

  interface IImmutableMap<T, K, V> extends Map<K, V> {
    toJS(): T;
    get<I extends keyof T>(key: I & K): T[I] & V;
    set<S extends keyof T>(key: S & K, value: T[S] & V): Map<K, V>;
  }
}
