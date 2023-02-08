import { Box } from "@mui/material";

import { CircleProp } from "../types/Game";

export function Circle(props: CircleProp): JSX.Element {
  const p: number = props.circle.size;
  const bgcolor: string = props.circle.color;
  const isTarget: boolean = props.circle.isTarget;
  const handleClick = props.handleClick;
  const top: string = props.circle.top;
  const left: string = props.circle.left;

  const style = {
    bgcolor,
    p,
    top,
    left,
    position: "absolute" as "absolute",
    transitionDuration: "0.1s",
    boxShadow: 12,
  };

  return (
    <Box
      onClick={(e) =>
        function () {
          handleClick(props.circle);
        }
      }
      className="Circle"
      sx={style}
    >
      {null}
    </Box>
  );
}
