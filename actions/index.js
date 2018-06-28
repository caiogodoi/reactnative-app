export function AddItemAction(modalText, response) {
  return {
    type: 'ADD_ITEM',
    modalText,
    response,
  }
}