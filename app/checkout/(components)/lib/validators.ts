import { digitsOnly, splitToChunks } from "../../(lib)/utils";
import { getCardType } from "./card-providers";

type CardParts = 'expiration' | 'cvv' | 'number' | 'holder';

export const cardValidators = Object.freeze<Record<`${CardParts}Errors`, (value: string) => string | null>>({
  expirationErrors(value) {
    value = digitsOnly(value);
    if (value.length < 4) return 'invalid length';
    if (Number.isNaN(value)) return 'invalid number';

    const [month, year] = splitToChunks(value, [2, 2]).map((v) => Number(v));

    if (month > 12 || month < 1) return 'invalid month';
    if (year > 35 || year < 24) return 'invalid year';

    if (year === 24) {
      return month <= (new Date().getMonth() + 1)
        ? 'lower month on the same year'
        : null;
    }

    return null;
  },

  cvvErrors(value: string) {
    value = digitsOnly(value);
    if (value.length < 3) return 'invalid length';
    if (Number.isNaN(value)) return 'invalid number';
    return null;
  },

  numberErrors(value) {
    const provider = getCardType(value);
    if (!provider) return 'unsoported provider';

    const filledFormated = provider.format(value + '0000000000000000');
    const formated = provider.format(value);

    if (filledFormated !== formated) return 'incomplete format';
    return null;
  },

  holderErrors(value) {
    if (value.trim().split(' ').length < 2) return 'suspicius holder name';
    return null;
  }
});

export function emailErrors(value: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value) ? null : 'invalid email';
}

export function phoneErrors(value: string) {
  return value.trim().length < 10 ? 'number is to short' : null;
}
