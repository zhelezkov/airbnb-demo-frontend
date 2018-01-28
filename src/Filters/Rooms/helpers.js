export function getButtonTitle(entireHome, privateRoom, sharedRoom) {
  const roomsCount = entireHome + privateRoom + sharedRoom;
  if (roomsCount <= 1) return 'Room type';
  return `Room type • ${roomsCount}`;
}
