import { Box, Stack, VStack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      justify={"space-evenly"}
      w={"full"}
      pb={"3rem"}
    >
      <VStack spacing={"5rem"} align={"left"}>
        <svg
          width="202"
          height="45"
          viewBox="0 0 202 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.32 12.06V15.45H55.74V33H51.54V15.45H45.96V12.06H61.32ZM79.8345 24.33C79.8345 24.93 79.7945 25.47 79.7145 25.95H67.5645C67.6645 27.15 68.0845 28.09 68.8245 28.77C69.5645 29.45 70.4745 29.79 71.5545 29.79C73.1145 29.79 74.2245 29.12 74.8845 27.78H79.4145C78.9345 29.38 78.0145 30.7 76.6545 31.74C75.2945 32.76 73.6245 33.27 71.6445 33.27C70.0445 33.27 68.6045 32.92 67.3245 32.22C66.0645 31.5 65.0745 30.49 64.3545 29.19C63.6545 27.89 63.3045 26.39 63.3045 24.69C63.3045 22.97 63.6545 21.46 64.3545 20.16C65.0545 18.86 66.0345 17.86 67.2945 17.16C68.5545 16.46 70.0045 16.11 71.6445 16.11C73.2245 16.11 74.6345 16.45 75.8745 17.13C77.1345 17.81 78.1045 18.78 78.7845 20.04C79.4845 21.28 79.8345 22.71 79.8345 24.33ZM75.4845 23.13C75.4645 22.05 75.0745 21.19 74.3145 20.55C73.5545 19.89 72.6245 19.56 71.5245 19.56C70.4845 19.56 69.6045 19.88 68.8845 20.52C68.1845 21.14 67.7545 22.01 67.5945 23.13H75.4845ZM81.8201 24.63C81.8201 22.95 82.1501 21.46 82.8101 20.16C83.4901 18.86 84.4001 17.86 85.5401 17.16C86.7001 16.46 87.9901 16.11 89.4101 16.11C90.6501 16.11 91.7301 16.36 92.6501 16.86C93.5901 17.36 94.3401 17.99 94.9001 18.75V16.38H99.1301V33H94.9001V30.57C94.3601 31.35 93.6101 32 92.6501 32.52C91.7101 33.02 90.6201 33.27 89.3801 33.27C87.9801 33.27 86.7001 32.91 85.5401 32.19C84.4001 31.47 83.4901 30.46 82.8101 29.16C82.1501 27.84 81.8201 26.33 81.8201 24.63ZM94.9001 24.69C94.9001 23.67 94.7001 22.8 94.3001 22.08C93.9001 21.34 93.3601 20.78 92.6801 20.4C92.0001 20 91.2701 19.8 90.4901 19.8C89.7101 19.8 88.9901 19.99 88.3301 20.37C87.6701 20.75 87.1301 21.31 86.7101 22.05C86.3101 22.77 86.1101 23.63 86.1101 24.63C86.1101 25.63 86.3101 26.51 86.7101 27.27C87.1301 28.01 87.6701 28.58 88.3301 28.98C89.0101 29.38 89.7301 29.58 90.4901 29.58C91.2701 29.58 92.0001 29.39 92.6801 29.01C93.3601 28.61 93.9001 28.05 94.3001 27.33C94.7001 26.59 94.9001 25.71 94.9001 24.69ZM123.872 16.14C125.912 16.14 127.552 16.77 128.792 18.03C130.052 19.27 130.682 21.01 130.682 23.25V33H126.482V23.82C126.482 22.52 126.152 21.53 125.492 20.85C124.832 20.15 123.932 19.8 122.792 19.8C121.652 19.8 120.742 20.15 120.062 20.85C119.402 21.53 119.072 22.52 119.072 23.82V33H114.872V23.82C114.872 22.52 114.542 21.53 113.882 20.85C113.222 20.15 112.322 19.8 111.182 19.8C110.022 19.8 109.102 20.15 108.422 20.85C107.762 21.53 107.432 22.52 107.432 23.82V33H103.232V16.38H107.432V18.39C107.972 17.69 108.662 17.14 109.502 16.74C110.362 16.34 111.302 16.14 112.322 16.14C113.622 16.14 114.782 16.42 115.802 16.98C116.822 17.52 117.612 18.3 118.172 19.32C118.712 18.36 119.492 17.59 120.512 17.01C121.552 16.43 122.672 16.14 123.872 16.14Z"
            fill="#5565F0"
          />
          <path
            d="M147.598 12.06V15.45H138.868V20.82H145.558V24.15H138.868V33H134.668V12.06H147.598ZM154.776 10.8V33H150.576V10.8H154.776ZM166.305 33.27C164.705 33.27 163.265 32.92 161.985 32.22C160.705 31.5 159.695 30.49 158.955 29.19C158.235 27.89 157.875 26.39 157.875 24.69C157.875 22.99 158.245 21.49 158.985 20.19C159.745 18.89 160.775 17.89 162.075 17.19C163.375 16.47 164.825 16.11 166.425 16.11C168.025 16.11 169.475 16.47 170.775 17.19C172.075 17.89 173.095 18.89 173.835 20.19C174.595 21.49 174.975 22.99 174.975 24.69C174.975 26.39 174.585 27.89 173.805 29.19C173.045 30.49 172.005 31.5 170.685 32.22C169.385 32.92 167.925 33.27 166.305 33.27ZM166.305 29.61C167.065 29.61 167.775 29.43 168.435 29.07C169.115 28.69 169.655 28.13 170.055 27.39C170.455 26.65 170.655 25.75 170.655 24.69C170.655 23.11 170.235 21.9 169.395 21.06C168.575 20.2 167.565 19.77 166.365 19.77C165.165 19.77 164.155 20.2 163.335 21.06C162.535 21.9 162.135 23.11 162.135 24.69C162.135 26.27 162.525 27.49 163.305 28.35C164.105 29.19 165.105 29.61 166.305 29.61ZM201.096 16.38L196.236 33H191.706L188.676 21.39L185.646 33H181.086L176.196 16.38H180.456L183.396 29.04L186.576 16.38H191.016L194.136 29.01L197.076 16.38H201.096Z"
            fill="#D77F3F"
          />
          <circle cx="17.5" cy="21.5" r="17.5" fill="#5565F0" />
          <path
            d="M24.3492 12.8088L21.0343 24.7463L9.62107 29.5662L12.936 17.6287L24.3492 12.8088Z"
            fill="white"
          />
        </svg>
        <Text color={"#5C5E87"}>All Rights Reserved</Text>
        <VStack align={"left"}>
          <Text color={"#2B3377"} fontWeight={"bold"}>
            Address
          </Text>
          <Text color={"#5C5E87"}>26 W 12th St. New York, NY 10342, NYC</Text>
        </VStack>
        <VStack align={"left"}>
          <Text color={"#2B3377"} fontWeight={"bold"}>
            Social Media
          </Text>
          <HStack spacing={"1.4rem"}>
            <BsFacebook color={"#373C59"} size={"2.56rem"} />
            <RiInstagramFill color={"#373C59"} size={"2.9rem"} />
            <AiFillTwitterCircle color={"#373C59"} size={"2.9rem"} />
            <BsYoutube color={"#373C59"} size={"3.1rem"} />
          </HStack>
        </VStack>
      </VStack>
      <VStack spacing={"1.75rem"} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Product
        </Text>
        <Text color={"#5C5E87"}>Product</Text>
        <Text color={"#5C5E87"}>Enterprise</Text>
        <Text color={"#5C5E87"}>Partners</Text>
        <Text color={"#5C5E87"}>Affiliate</Text>
        <Text color={"#5C5E87"}>Integrations</Text>
        <Text color={"#5C5E87"}>Developers</Text>
        <Text color={"#5C5E87"}>Students</Text>
        <Text color={"#5C5E87"}>Work OS</Text>
      </VStack>
      <VStack spacing={"1.75rem"} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Team
        </Text>
        <Text color={"#5C5E87"}>About Us</Text>
        <Text color={"#5C5E87"}>Contact Us</Text>
        <Text color={"#5C5E87"}>Careers</Text>
        <Text color={"#5C5E87"}>Find a Partner</Text>
        <Text color={"#5C5E87"}>In the News</Text>
      </VStack>
      <VStack spacing={"1.75rem"} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Solutions
        </Text>
        <Text color={"#5C5E87"}>Project Management</Text>
        <Text color={"#5C5E87"}>Marketing</Text>
        <Text color={"#5C5E87"}>CRM and Sales</Text>
        <Text color={"#5C5E87"}>Software Development</Text>
        <Text color={"#5C5E87"}>Constructions</Text>
        <Text color={"#5C5E87"}>Creative Production</Text>
        <Text color={"#5C5E87"}>Remote Work</Text>
        <Text color={"#5C5E87"}>HR</Text>
        <Text color={"#5C5E87"}>IT</Text>
        <Text color={"#5C5E87"}>See More Solutions</Text>
      </VStack>
      <VStack spacing={"1.75rem"} align={"left"}>
        <Text fontWeight="bold" color={"#2B3377"} pb={"0.75rem"}>
          Resources
        </Text>
        <Text color={"#5C5E87"}>Knowledge Base</Text>
        <Text color={"#5C5E87"}> Guides</Text>
        <Text color={"#5C5E87"}>Daily Webinars</Text>
        <Text color={"#5C5E87"}>Community</Text>
        <Text color={"#5C5E87"}>Customer Stories</Text>
        <Text color={"#5C5E87"}>Templates</Text>
        <Text color={"#5C5E87"}>Profesionals Services</Text>
        <Text color={"#5C5E87"}>Video Tutorials</Text>
        <Text color={"#5C5E87"}>Blog</Text>
        <Text color={"#5C5E87"}>Podcast</Text>
      </VStack>
    </Stack>
  );
};

export default Footer;
