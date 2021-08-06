const isEmpty = (value = {}) => {
  if (value) {
    if (value instanceof Map) return value.size === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (value.constructor
      && value.constructor.name
      && value.constructor.name === 'Date' && value.getDate()) return false;
    if (typeof value === 'string') return !value.trim();
    if (typeof value === 'number') return false;
    if (typeof value === 'boolean') return false;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    if (typeof value === 'function') return /{\s*}$/.test(value.toString());
  } else {
    if (typeof value === 'number' && value === 0) return false;
    if (typeof value === 'boolean' && !value) return false;
  }
  return true;
};

module.exports = isEmpty;
