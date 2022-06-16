export const setUserStorage = async token => {
  try {
    await localStorage.setItem('token', token)
  } catch (e) {
    console.log({
      code: 'ERROR_SET_USER_STORAGE',
      error: e
    })
    return null
  }
}
