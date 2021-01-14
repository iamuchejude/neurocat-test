export { default as reportWebVitals } from './report-web-vitals';

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const debounce = (callback, wait = 500) => {
  let timeout = null;

  return (...args) => {
    const next = () => callback(...args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};
