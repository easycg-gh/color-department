import { PropTypes } from "prop-types";
import { colors } from "../styles/constants";
import { typesOfoffset } from "../styles/constants";

export const propTypesMargin = {
  my: PropTypes.oneOf(typesOfoffset),
  mx: PropTypes.oneOf(typesOfoffset),
  mt: PropTypes.oneOf(typesOfoffset),
  mb: PropTypes.oneOf(typesOfoffset),
  ml: PropTypes.oneOf(typesOfoffset),
  mr: PropTypes.oneOf(typesOfoffset),
  m: PropTypes.oneOf(typesOfoffset),
};

export const propTypesPadding = {
  py: PropTypes.oneOf(typesOfoffset),
  px: PropTypes.oneOf(typesOfoffset),
  pt: PropTypes.oneOf(typesOfoffset),
  pb: PropTypes.oneOf(typesOfoffset),
  pl: PropTypes.oneOf(typesOfoffset),
  pr: PropTypes.oneOf(typesOfoffset),
  p: PropTypes.oneOf(typesOfoffset),
};

export const propTypesTextTag = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"]),
};

export const propTypesColors = {
  color: PropTypes.oneOf([...Object.keys(colors), "primary"]),
};

export const propTypesChildren = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
