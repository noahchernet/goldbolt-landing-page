import {
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import YellowButton from "./Buttons/YellowButton";

type Props = {};

const IntegrateSection = (props: Props) => {
  return (
    <VStack spacing={"6.875rem"}>
      <Heading
        textAlign="center"
        maxW={"40rem"}
        as={motion.h1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span style={{ color: "#FFCA1D" }}>Integrate</span>{" "}
        <span style={{ color: "#565656" }}>
          with your existing tools in a few clicks
        </span>
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "2rem", md: "5.75rem" }}
      >
        <Image src={"/assets/company_zoom.png"} alt="zoom_logo" w={"8rem"} />
        <Image
          src={"/assets/company_adobe_cloud.png"}
          alt="adobe_cloud_logo"
          w={"8rem"}
        />
        <Image src={"/assets/company_slack.png"} alt="slack_logo" w={"8rem"} />
        <Image
          src={"/assets/company_dropbox.png"}
          alt="dropbox_logo"
          w={"8rem"}
        />
        <Image
          src={"/assets/company_gdrive.png"}
          alt="google_drive_logo"
          w={"8rem"}
        />
      </Stack>
      <YellowButton text={"View All"} />
    </VStack>
  );
};

export default IntegrateSection;
