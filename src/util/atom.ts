import { atom } from 'jotai';

import { LoadingEnumType } from '@/types/Loading';

export const loadingStatusAtom = atom<LoadingEnumType>('loading');
