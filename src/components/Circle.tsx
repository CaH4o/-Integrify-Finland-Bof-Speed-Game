import { Box } from "@mui/material";

import { Circle as CircleProps } from "../types/Game";

export function Circle(props: CircleProps): JSX.Element {
  const p: number = props.size;
  const bgcolor: string = props.color;
  const isTarget: boolean = props.isTarget;
  const handleClick = props.handleClick;
  const top: string = `${Math.random() * 75 + 15}%`;
  const left: string = `${Math.random() * 90 + 5}%`;

  const style = {
    bgcolor,
    p,
    top,
    left,
    position: "absolute" as "absolute",
    transitionDuration: "0.1s",
    //transform: "translate(-50%, -50%)",
    boxShadow: 12,
  };

  return (
    <Box onClick={handleClick} className="Circle" sx={style}>
      {null}
    </Box>
  );
}
