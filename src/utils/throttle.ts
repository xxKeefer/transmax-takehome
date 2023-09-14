// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThrottleCallback = (...args: any[]) => void;

export function throttle<T extends ThrottleCallback>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let isThrottled = false;
  let lastArgs: Parameters<T> | null = null;

  return (...args: Parameters<T>) => {
    if (!isThrottled) {
      callback(...args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          callback(...lastArgs);
          lastArgs = null;
        }
      }, delay);
    } else {
      lastArgs = args;
    }
  };
}
