import { Definitions } from "tabular3rd/dist/classes/definitions";
import { compareVersionString } from "./func";
import { TestCase } from "./types";

function is38423(def: unknown, specNum: string) {
  return def instanceof Definitions && specNum === "38423";
}

export const testCases: TestCase[] = [
  (def, specNum, version) => {
    // SN UL PDCP UP TNL Information IE of PDU Session Resource Setup Response Info (9.2.1.6) should point 9.2.3.76
    // From 15.2.0
    if (!is38423(def, specNum)) {
      return;
    }
    if (compareVersionString(specNum, "15.2.0") < 0) {
      return;
    }
    const defFound = def.findDefinition("9.2.1.6");
    if (!defFound) {
      throw Error(`Clause 9.2.1.6 is not found in 38423 ${version}`);
    }
    const elemFound = defFound.elementList.find((elem) => {
      const { name } = elem;
      return name === "SN UL PDCP UP TNL Information";
    });
    if (!elemFound) {
      throw Error(
        `SN UL PDCP UP TNL Information IE is not found in clause 9.2.1.6 of 38423 ${version}`
      );
    }
    const { reference } = elemFound;
    if (!/\b9\.2\.3\.76\b/.test(reference)) {
      console.warn(
        "SN UL PDCP UP TNL Information IE in clause 9.2.1.6 has been replace with 9.2.3.76"
      );
      elemFound.reference = "9.3.1.2";
    }
  },
];