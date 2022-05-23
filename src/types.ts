import { Definitions } from 'tabular3rd/dist/classes/definitions';

export type TestCase = (
  def: Definitions,
  specNum: string,
  version: string
) => void;
