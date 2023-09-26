import { mode } from "@chakra-ui/theme-tools";
const Card = {
  baseStyle: (props) => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("#ffffff", "navyBlue.300")(props),
    border: "2px solid",
    borderColor: mode("brand.400", "white")(props),
    backgroundClip: "border-box"
  })
};

export const CardComponent = {
  components: {
    Card
  }
};
