import { is } from "./func";
import { TestCase } from "./types";

export const testCases: TestCase[] = [
  /**
   * Maximum Integrity Protected Data Rate IE (9.3.1.57) should exist
   * From 17.0.0
   */
  (def, specNum, version) => {
    if (!is("37483")("17.0.0")(def, specNum, version)) {
      return;
    }
    const defFound = def.findDefinition("9.3.1.57");
    if (!defFound) {
      throw Error(`Clause 9.3.1.57 is not found in 37483 ${version}`);
    }
  },
  /**
   * Redundant QoS Flow Indicator IE (9.3.1.74) should exist
   * From 17.0.0
   */
  (def, specNum, version) => {
    if (!is("37483")("17.0.0")(def, specNum, version)) {
      return;
    }
    const defFound = def.findDefinition("9.3.1.74");
    if (!defFound) {
      throw Error(`Clause 9.3.1.74 is not found in 37483 ${version}`);
    }
  },
  /**
   * Trace Collection Entity IP Address IE in CELL TRAFFIC TRACE (9.2.3.3) should point 9.3.2.4
   * From 17.0.0
   */
  (def, specNum, version) => {
    if (!is("37483")("17.0.0")(def, specNum, version)) {
      return;
    }
    const defFound = def.findDefinition("9.2.3.3");
    if (!defFound) {
      throw Error(`Clause 9.2.3.3 is not found in 37483 ${version}`);
    }
    const elemFound = defFound.elementList.find((elem) => {
      const { name } = elem;
      return name === "Trace Collection Entity IP Address";
    });
    if (!elemFound) {
      throw Error(
        `Trace Collection Entity IP Address IE is not found in clause 9.2.3.3 of 37483 ${version}`
      );
    }
    const { reference } = elemFound;
    if (!/\b9\.3\.2\.4\b/.test(reference)) {
      elemFound.reference = "9.3.2.4";
      console.warn(
        "Trace Collection Entity IP Address IE in clause 9.2.3.3 has been replace with 9.3.2.4"
      );
    }
  },
];
