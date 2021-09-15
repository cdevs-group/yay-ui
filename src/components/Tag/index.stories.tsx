import React from "react";
import { capitalize } from "lodash";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import Tag from "./Tag";
import { scales, variants } from "./types";
import { MenuIcon, MinusIcon, PlusIcon } from "../Svg";

export default {
  title: "Components/Tag",
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <Box>
      {Object.values(variants).map((variant) => {
        return (
          <Box key={variant} mb="32px ">
            <Flex alignItems="center">
              {Object.values(scales).map((scale) => {
                return (
                  <Tag scale={scale} variant={variant} mr="8px">
                    {`${capitalize(variant)}: ${scale.toUpperCase()}`}
                  </Tag>
                );
              })}
              <Tag variant={variant} outline mr="8px">
                {`${capitalize(variant)} Outline`}
              </Tag>
              <Tag variant={variant} outline startIcon={<MenuIcon />} mr="8px">
                {`${capitalize(variant)} Icon Left`}
              </Tag>
              <Tag variant={variant} outline endIcon={<PlusIcon />} mr="8px">
                {`${capitalize(variant)} Icon Right`}
              </Tag>
              <Tag variant={variant} outline startIcon={<PlusIcon />} endIcon={<MinusIcon />}>
                {`${capitalize(variant)} Both`}
              </Tag>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};
