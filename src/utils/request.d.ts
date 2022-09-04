export type Result <T> = {
  success: boolean,
  code: number,
  msg: string,
  data: T
}
