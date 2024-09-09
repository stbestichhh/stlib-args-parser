export interface OptionsType {
  [key: string]: string | boolean;
}

export function parseArgs(argv: string[]): OptionsType;
export const options: OptionsType;
