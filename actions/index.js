export function addRepository(response) {
  return {
    type: 'ADD_REPOSITORY',
    payload: { ...response }
  }
}

export function setInput(value) {
  return {
    type: 'repoForm/SET_INPUT',
    payload: { value }
  }
}