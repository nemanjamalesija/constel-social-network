import { useDispatch } from 'react-redux';
import { RootDispatch } from '../ui/types/RootStateType';

export const useAppDispatch: () => RootDispatch = useDispatch;
