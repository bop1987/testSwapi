export const getQueryParamsUrl = (obj) => {
  const keys = Object.keys(obj)

  return keys.reduce((accum, item) => {
    if (obj[item].length > 0) {
      accum[item] = obj[item].join(',')
    }

    return accum
  }, {})
}
export const getActiveFiltersFromUrl = (obj) => {
  const keys = Object.keys(obj)

  return keys.reduce((accum, item) => {
    if (obj[item].length > 0) {
      accum[item] = obj[item].split(',')
    }

    return accum
  }, {})
}
