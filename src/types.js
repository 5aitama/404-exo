/**
 * @typedef {Object} JSONElement A single json element.
 * @property {string} name The language / framework name
 * @property {string} color The fist color
 * @property {string} secondColor The second color
 * @property {string} logo The logo image name (with extention)
 * @property {string} description The language / framework description.
 * @property {string[]} tags The language / framework tags.
 */

/**
 * @typedef {Object} JSONData The JSON file data.
 * @property {JSONElement[]} languages All languages.
 * @property {JSONElement[]} frameworks All frameworks.
 */