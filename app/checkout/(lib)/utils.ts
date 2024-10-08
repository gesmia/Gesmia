
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

export function objMap<k extends keyof any, T, U>(obj: Record<k, T>, map: (value: T) => U): Record<k, U> {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([key, value]: any) => [key, map(value)],
    ),
  );
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function splitToChunks(str: string, chunks?: number[]): string[];
export function splitToChunks(str: string, chunks?: number): string[];
export function splitToChunks(str: string, chunkSize?: number | number[]): string[] {
  chunkSize ??= 10;
  if (Array.isArray(chunkSize)) {
    return splitToChunks_array(str, chunkSize);
  }
  return splitToChunks_number(str, chunkSize);
}

function splitToChunks_number(str: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}

function splitToChunks_array(str: string, chunks: number[]): string[] {
  const response: string[] = [];
  let index = 0;

  for (const chunk of chunks) {
    if (index >= str.length) break;
    const characters = str.slice(index, index + chunk);
    response.push(characters);
    index += chunk;
  }

  return response;
}
