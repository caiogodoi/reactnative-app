import { combineReducers } from 'redux';
import repos from './repos';
import repoForm from './repo-form';

export default combineReducers({
  repos,
  repoForm,
});