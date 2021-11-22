const isTouchDevice = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || (window.navigator as any)?.msMaxTouchPoints > 0;
};

export default isTouchDevice;
