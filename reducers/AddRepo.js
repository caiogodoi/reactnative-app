const AddRepo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const repository = {
        id: action.response.id,
        thumbnail: action.response.owner.avatar_url,
        title: action.response.name,
        author: action.response.owner.login,
      };
      return [...state, repository];
    default:
      return [];
  }
}

export default AddRepo;