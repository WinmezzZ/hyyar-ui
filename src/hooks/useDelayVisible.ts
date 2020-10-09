import React, { useRef, useState, useEffect } from 'react';
import usePrevious from './usePreview';

type Result<T> = [T, React.Dispatch<React.SetStateAction<T>>, T];

/**
 * 延时设置visible
 * @param initialState 初始值
 * @param delay  延时时间
 * @param callback 每次改变值延时后触发的回调
 */
export const useDelayVisible = <T>(initialState: T, delay: number, callback: (value: T) => void): Result<T> => {
  const [state, setState] = useState(initialState);
  const prevState = usePrevious(state);
  const [delayState, setDelayState] = useState(initialState);
  const ref = useRef<number>();

  useEffect(() => {
    // 无修改时跳过
    if (state === prevState) return;
    if (!state) {
      // 隐藏时延时设置 delayState，同时执行回调
      ref.current = setTimeout(() => {
        setDelayState(state);
        callback(state);
      }, delay);
    } else {
      // 显示时同时设置 delayState，延时执行回调
      setDelayState(state);
      ref.current = setTimeout(() => {
        callback(state);
      }, delay);
    }
  }, [state]);

  useEffect(() => {
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, []);

  return [state, setState, delayState];
};
