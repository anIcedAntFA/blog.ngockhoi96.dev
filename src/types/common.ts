import type { ImageProps } from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Todo = any;

export type Nullable<T> = T | null;

export type Either<L, R> = L | R;

export type KeyType<T> = keyof T;

export type ValueType<T> = T[keyof T];

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

export type BaseValue = Either<string, number>;

export type BaseOption = {
  label: string;
  value: BaseValue;
};

export type ImageUrl = Either<string, ImageProps['src']>;
