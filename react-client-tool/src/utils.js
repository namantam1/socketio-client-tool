
/**
 * 
 * @param {string} key Key to find from local storage 
 * @param {*} def Default value to return if not found
 */
export function getDefault(key, def) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : def;
}

/**
 * Set default value in locastorage
 * 
 * @param {string} key Key to set
 * @param {*} value value to set
 */
export function setDefault(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}
