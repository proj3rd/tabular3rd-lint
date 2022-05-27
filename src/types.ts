import { Definitions } from 'tabular3rd/dist/classes/definitions.js';

export type TestCase = (
  def: Definitions,
  specNum: string,
  version: string
) => void;
