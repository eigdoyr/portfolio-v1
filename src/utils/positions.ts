export const getXPositions = (
  count: number,
  cardWidth: number,
  gap: number,
): number[] => {
  const total = count * cardWidth + (count - 1) * gap;
  const start = -total / 2 + cardWidth / 2;
  return Array.from({ length: count }, (_, i) => start + i * (cardWidth + gap));
};
