import { Definitions } from "tabular3rd/dist/classes/definitions";
import { compareVersionString } from "./func";
function is38455(def, specNum) {
    return def instanceof Definitions && specNum === "38455";
}
export const testCases = [
    (def, specNum, version) => {
        // Search Window Information IE (9.2.26) should exist
        // From 16.1.0
        if (!is38455(def, specNum)) {
            return;
        }
        if (compareVersionString(specNum, "16.1.0") < 0) {
            return 0;
        }
        const defFound = def.findDefinition("9.2.26");
        if (!defFound) {
            throw Error(`Clause 9.2.26 is not found in 38455 ${version}`);
        }
    },
];
//# sourceMappingURL=38455.js.map