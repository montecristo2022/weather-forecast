import { useSelector } from 'react-redux';
import {  selectLoading} from '../redux/tasks/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);


  return {
    isLoading,
  };
};
