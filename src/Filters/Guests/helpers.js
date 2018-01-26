export function getButtonTitle(guestsCount) {
  if (guestsCount) {
    if (guestsCount === 1) return '1 guest';
    return `${guestsCount} guests`;
  }
  return 'Guests';
}
