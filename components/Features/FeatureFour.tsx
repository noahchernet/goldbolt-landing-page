import {
  Box,
  Image,
  Stack,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function FeatureFour({}: Props) {
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      align={"center"}
      spacing={"7.7rem"}
      mt={"10rem"}
      px={"11.87rem"}
    >
      <Image
        src="/assets/save_time_picture_woman.png"
        alt="save_time_picture_woman"
        h="25rem"
      />
      <Spacer />
      <VStack align="left" spacing={"1.25rem"}>
        <Heading color={"#4A4A4A"} fontSize={"2.5rem"}>
          Manage everything in one workspace
        </Heading>
        <svg
          width="65"
          height="6"
          viewBox="0 0 65 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3"
            y1="3"
            x2="62"
            y2="3"
            stroke="#ffca1d"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <Text color={"#575757"} fontSize={"1.5rem"}>
          Planning, tracking and delivering your team&apos;s best work has
          never been easier. An integrated workspace that&apos;s simple to use,
          TeamFlow lets you spend less time managing your work and more time
          actually doing it.
        </Text>
      </VStack>
    </Stack>
  );
}

export default FeatureFour;