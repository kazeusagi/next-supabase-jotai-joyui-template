'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useAtom } from 'jotai';

import { Box, ColorPaletteProp, LinearProgress } from '@mui/joy';

import { LoadingEnumType } from '@/types/Loading';
import { loadingStatusAtom } from '@/util/atom';

export function LoadingBar() {
  const pathname = usePathname();

  const [loadingStatus, setLoadingStatus] = useAtom(loadingStatusAtom);

  const [color, setColor] = useState<ColorPaletteProp>('primary');
  const [progress, setProgress] = useState(30);
  const [determinate, setDeterminate] = useState(false);

  // 画面遷移の検知
  useEffect(() => {
    setLoadingStatus('success');
  }, [pathname]);

  // loadingStatusの検知
  useEffect(() => {
    if (loadingStatus === 'idle') return; // 何もしない
    if (loadingStatus === 'loading') startLoading();
    else return finishLoading(loadingStatus);
  }, [loadingStatus]);

  return (
    <Box position='absolute' top={0} left={0} width='100%' zIndex={1}>
      {loadingStatus != 'idle' && (
        <LinearProgress
          size='sm'
          color={color}
          value={progress}
          determinate={determinate}
        ></LinearProgress>
      )}
    </Box>
  );

  // 開始
  function startLoading() {
    setColor('primary');
    setProgress(30);
    setDeterminate(false);
  }

  // 終了
  // タイムアウトのクリア関数を返す
  function finishLoading(loadingStatus: LoadingEnumType): () => void {
    if (loadingStatus === 'success') setColor('success');
    else if (loadingStatus === 'error') setColor('danger');
    setProgress(100);
    setDeterminate(true);

    // 時間差でプログレスバーを非表示にする
    const time = loadingStatus === 'error' ? 4000 : 800;
    const timeout = setTimeout(() => {
      setLoadingStatus('idle');
    }, time);

    return () => clearTimeout(timeout);
  }
}
