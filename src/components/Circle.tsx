import React from "react";

import { Circle as CircleProps } from "../types/Game";

export function Circle(props: CircleProps): JSX.Element {
  const size: number = props.size;
  const color: string = props.color;
  const isTarget: boolean = props.isTarget;
  const handleClick = props.handleClick;

  return <div onClick={handleClick}>Circle</div>;
}
