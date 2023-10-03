import { MomentInput } from "moment";
import LibrarySpice from "./LibrarySpice";

/**
 * Obj implemented when the item is added to the inventory.
 * If the spice being addedd is not already in the library,
 * a new LibrarySpice will be created.
 */
interface InventorySpice {
  spice: LibrarySpice,
  expDate: MomentInput | null,
}

export default InventorySpice;