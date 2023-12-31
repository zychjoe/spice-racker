/**
 * Obj storing information about the spice in general.
 * When creating an instance of a spice in an inventory,
 * the user must select a spice from the library or add 
 * a new one to the library.
 */
interface LibrarySpice {
  name: string,
  shelfLife: moment.Duration | undefined,
  image: null,
}

export default LibrarySpice;