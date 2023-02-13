import {EncoderDecoder} from './EncoderDecoder'

export const secretDecoders = (secrets: {[key: string]: string}) => {
  const decodedSecrets = {}
  for (const item of Object.keys(secrets)) {
    const it = new EncoderDecoder(secrets[item]).decodeBase64String()
    decodedSecrets[item] = it
  }
  return decodedSecrets
}
