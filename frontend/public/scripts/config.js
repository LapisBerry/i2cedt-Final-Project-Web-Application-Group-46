/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} vocabulary
 * @property {string} meaning
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://localhost:3222";
