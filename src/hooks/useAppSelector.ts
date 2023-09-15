import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../ui/types/RootStateType';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
