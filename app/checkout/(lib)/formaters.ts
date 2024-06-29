import { CardProvider, getCardType, provitionalCardFormat } from "./card-providers";
import { digitsOnly, splitToChunks } from "./utils";

export const cardFormaters = Object.freeze({
  number(stateSetter: (value: CardProvider | null) => void) {
    return (value: string) => {
      const provider = getCardType(value);
      stateSetter(provider);
      return !provider
        ? provitionalCardFormat(value)
        : provider.format(value);
    };
  },

  expiration() {
    return (value: string) => {
      return splitToChunks(digitsOnly(value), [2, 2]).join('/');
    };
  },

  cvv() {
    return (value: string) => {
      return splitToChunks(digitsOnly(value), [3])?.[0] || '';
    };
  },
})