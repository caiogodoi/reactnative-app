const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPOSITORY':
      const repository = {
        id: action.payload.id,
        thumbnail: action.payload.owner.avatar_url,
        title: action.payload.name,
        author: action.payload.owner.login,
      };
      return [...state, repository];
    default:
      return [];
  }
}

export default repos;