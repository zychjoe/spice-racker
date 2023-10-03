import ShelfLife from "./ShelfLife";

/**
 * Obj storing information about the spice in general.
 * When creating an instance of a spice in an inventory,
 * the user must select a spice from the library or add 
 * a new one to the library.
 */
interface LibrarySpice {
  name: string,
  shelfLife: ShelfLife | undefined,
  image: null,
}

export default LibrarySpice;