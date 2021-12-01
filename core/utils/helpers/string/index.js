export const getParamsUrl = (settings) => {
  let params = ''

  for ( let key in settings ) {
    if (Boolean(settings[key]) || settings[key] === 0) {
      params += params ? '&' : '?'
      params += `${key}=${settings[key]}`
    }
  }

  return params
}
