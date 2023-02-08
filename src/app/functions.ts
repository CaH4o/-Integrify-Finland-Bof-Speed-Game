import { Circle, Circles } from "../types/Game";

export function createCurcles(n: number): Circles {
  if (n < 1) return [];

  const circles: Circles = [];

  for (let i = 0; i < n; ++i) {
    const circle: Circle = {
      id: Math.random().toString(36).substring(2, 9),
      color: "black",
      isTarget: false,
      size: 4,
      top: `${Math.random() * 75 + 15}%`,
      left: `${Math.random() * 90 + 5}%`,
    };

    circles.push(circle);
  }

  return circles;
}
