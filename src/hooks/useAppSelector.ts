import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types/RootStateType';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
