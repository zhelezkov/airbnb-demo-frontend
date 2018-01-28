export function getButtonTitle(min, max) {
  if (min !== 10 || max !== 1000) {
    return `From $${min} to $${max}`;
  }
  return 'Price';
}
