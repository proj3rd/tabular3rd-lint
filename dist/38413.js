import { Definitions } from "tabular3rd/dist/classes/definitions.js";
import { compareVersionString } from "./func.js";
function is38413(def, specNum) {
    return def instanceof Definitions && specNum === "38413";
}
export const testCases = [
    (def, specNum, version) => {
        // Handover Cause IE in HO Report message (9.3.3.39) should point Cause IE (9.3.1.2)
        // From 16.2.0
        if (!is38413(def, specNum)) {
            return;
        }
        if (compareVersionString(specNum, "16.2.0") < 0) {
            return 0;
        }
        const defFound = def.findDefinition("9.3.3.39");
        if (!defFound) {
            throw Error(`Clause 9.3.3.39 is not found in 38413 ${version}`);
        }
        const elemFound = defFound.elementList.find((elem) => {
            const { name } = elem;
            return name === "Handover Cause";
        });
        if (!elemFound) {
            throw Error(`Handover Cuase IE is not found in clause 9.3.3.39 of 38413 ${version}`);
        }
        const { reference } = elemFound;
        if (!/\b9\.3\.1\.2\b/.test(reference)) {
            elemFound.reference = "9.3.1.2";
            console.warn("Reference of Handover Cause IE in clause 9.3.3.39 has been replace with 9.3.1.2");
        }
    },
];
//# sourceMappingURL=38413.js.map