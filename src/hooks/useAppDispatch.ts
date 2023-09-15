import { useDispatch } from 'react-redux';
import { RootDispatch } from '../types/RootStateType';
export const useAppDispatch: () => RootDispatch = useDispatch;
