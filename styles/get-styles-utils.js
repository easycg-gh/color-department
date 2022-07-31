import {
  fontSizes,
  offsets,
  sizes,
  subsequenceOfBreakpoints,
} from "./constants";

import { getCurrentColor } from "./get-value-utils";
import { getResponsiveStyle } from "./media-query-utils";

const getCurrentDictionaryValue = (dictionary, breakpointName, type) =>
  dictionary?.[breakpointName]?.[type];

const getCurrentStyleByDictionary = (dictionary) => (propertyName) => (type) =>
  getResponsiveStyle(propertyName)(
    subsequenceOfBreakpoints.map((breakpointName) =>
      getCurrentDictionaryValue(dictionary, breakpointName, type)
    )
  );

const getCurrentOffsetStyle = getCurrentStyleByDictionary(offsets);

const getCurrentStylesByDirection = (styleName) => (direction, type) => {
  switch (direction) {
    case "top":
      return getCurrentOffsetStyle(styleName + "Top")(type);
    case "bottom":
      return getCurrentOffsetStyle(styleName + "Bottom")(type);
    case "left":
      return getCurrentOffsetStyle(styleName + "Left")(type);
    case "right":
      return getCurrentOffsetStyle(styleName + "Right")(type);
    case "vertical":
      return [
        getCurrentOffsetStyle(styleName + "Top")(type),
        getCurrentOffsetStyle(styleName + "Bottom")(type),
      ];
    case "horizontal":
      return [
        getCurrentOffsetStyle(styleName + "Left")(type),
        getCurrentOffsetStyle(styleName + "Right")(type),
      ];
    default:
      return getCurrentOffsetStyle(styleName)(type);
  }
};

export const getCurrentColorStyles = (color, theme) =>
  `color: ${getCurrentColor(color, theme)};`;

export const getCurrentBackgroundColorStyles = (color, theme) =>
  `background-color: ${getCurrentColor(color, theme)};`;

export const getCurrentFontSizeStyle = (type) =>
  getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

export const getCurrentMarginStyle = (direction, type) =>
  getCurrentStylesByDirection("margin")(direction, type);

export const getCurrentPaddingStyle = (direction, type) =>
  getCurrentStylesByDirection("padding")(direction, type);

export const getCurrentGridTemplateColumsStyle = () =>
  getResponsiveStyle("grid-template-columns")([
    "repeat(8, 12.5vw)",
    "repeat(8, 12.5vw)",
    "repeat(8, 12.5vw)",
    "repeat(8, 12.5vw)",
    "repeat(8, 12.5vw)",
    "repeat(6, 16.666667vw)",
    "repeat(6, 16.666667vw)",
    "repeat(2, 50vw)",
  ]);