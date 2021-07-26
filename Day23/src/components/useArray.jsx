import { useCallback, useEffect, useState } from "react";

export const useArray = (initial) => {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    add: useCallback((a) => setValue((v) => [...v, a])),
    clear: useCallback((a) => setValue(() => [])),
    removeById: useCallback((id) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
    removeByIndex: useCallback((index) =>
      setValue((v) => {
        const x = [...v];
        x.splice(index, 1);
        return x;
      })
    ),
  };
};

export function useUnSplashPhotos(secret, query) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const url = `https://api.unsplash.com?query=${query}`;

  useEffect(() => {
    console.log("called");
  }, [query]);
  return [images, error, loading];
}
