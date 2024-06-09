export enum LoadingEnum {
  idle,
  loading,
  success,
  error,
}

export type LoadingEnumType = keyof typeof LoadingEnum;
