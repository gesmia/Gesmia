import { digitsOnly, splitToChunks } from "./utils";

export type CardProviderName
  = "Visa"
  | "Mastercard"
  | "AMEX"
  | "Discover"
  | "Diners"
  | "DinersCarteBlanche"
  | "JCB"
  | "VisaElectron";

export interface CardProvider {
  name: string;
  format(value: string): string;
  match(value: string): boolean;
}

export const Providers = Object.freeze<
  Record<CardProviderName, CardProvider>
>({
  VisaElectron: Provider('Visa Electron', {
    match: /^4026|417500|4508|4844|491(3|7)/,
    format: provitionalCardFormat
  }),
  Visa: Provider('Visa', {
    match: /^4/,
    format: (v) => splitToChunks(v, [4, 4, 4, 4]).join(' '),
  }),
  Mastercard: Provider('Mastercard', {
    match: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    format: (v) => splitToChunks(v, [4, 4, 4, 4]).join(' '),
  }),
  AMEX: Provider('AMEX', {
    match: /^3[47]/,
    format: (v) => splitToChunks(v, [4, 6, 4]).join(' '),
  }),
  Discover: Provider('Discover', {
    match: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
    format: (v) => splitToChunks(v, [4, 4, 4, 4]).join(' '),
  }),
  Diners: Provider('Diners', {
    match: /^36/,
    format: (v) => splitToChunks(v, [4, 6, 4]).join(' '),
  }),
  DinersCarteBlanche: Provider('Diners - Carte Blanche', {
    match: /^30[0-5]/,
    format: (v) => splitToChunks(v, [4, 6, 4]).join(' '),
  }),
  JCB: Provider('JCB', {
    match: /^35(2[89]|[3-8][0-9])/,
    format: (v) => splitToChunks(v, [4, 4, 4, 4]).join(' '),
  }),
});

export function getCardType(number: string): CardProvider | null {
  for (const provider of Object.values(Providers)) {
    if (provider.match(number)) return provider;
  }

  return null;
}

export function provitionalCardFormat(number: string): string {
  const chunks = splitToChunks(digitsOnly(number), 4);
  while (chunks.length > 5) chunks.pop()
  return chunks.join(' ');
}

interface ProviderArgs {
  format: (value: string) => string;
  match: RegExp;
}
function Provider(name: string, { match: regex, format }: ProviderArgs): CardProvider {
  const response = {
    name,
    format(value: string) {
      return format(digitsOnly(value));
    },
    match(value: string) {
      return regex.test(digitsOnly(value));
    }
  }

  return Object.freeze(response);
}


