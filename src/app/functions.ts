import { ICircle, Circles } from "../types/Game";

const colors: string[] = ["black", "green", "yellow", "blue", "red"];

export function createCurcles(n: number): Circles {
  if (n < 1) return [];

  const circles: Circles = [];

  for (let i = 0; i < n; ++i) {
    const circle: ICircle = {
      id: Math.random().toString(36).substring(2, 9),
      color: colors[parseInt((Math.random() * 100).toFixed()) % colors.length],
      isTarget: false,
      size: 4,
      top: `${(parseInt((Math.random() * 100).toFixed()) % 65) + 15}%`, //15-80%
      left: `${(parseInt((Math.random() * 100).toFixed()) % 90) + 5}%`, //5-95%
    };

    circles.push(circle);
  }

  return circles;
}
