import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import * as React from "react";

const Root = styled("div")(({theme}) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2)
  }
}));

export default function DividerText() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <Root>
      <Divider>
        <Chip label="Brief Description" />
      </Divider>
      {content}
    </Root>
  );
}
