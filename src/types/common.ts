// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Todo = any;

export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> &
  TOverridden;

export type NonEmptyArray<A> = [A, ...A[]];
export interface INonEmptyArray<A> extends Array<A> {
  0: A;
}

// type NonEmptyObject<T> = { [K in keyof T]: T[K] } & { [x: string]: unknown };
export type NonEmptyObject<O> = keyof O extends never ? never : O;

export type EmptyObject = Record<PropertyKey, never>;

export type Primitive = string | number | boolean | null | undefined;

export type BaseValue = string | number;

export type BaseOption = {
  label: string;
  value: BaseValue;
};
