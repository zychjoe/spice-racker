/**
 * Obj to keep track of the shelf life of a LIbrarySpice.
 * Will be used alobg with Moment.JS to create expiration dates for
 * a new InventorySpice when user does not specify.
 */
interface ShelfLife {
  days: number | undefined,
  months: number | undefined,
  years: number | undefined,
}

export default ShelfLife;