export type SecretObject = {
  name: string
  secrets: {
    [key: string]: string
  }
  namespace: string
}
