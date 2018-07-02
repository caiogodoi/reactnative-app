export function addRepository(formText, response) {
  return {
    type: 'ADD_REPOSITORY',
    payload: { formText, ...response }
  }
}