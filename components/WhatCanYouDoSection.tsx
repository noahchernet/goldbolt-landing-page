import { Box, Heading, Stack, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WhatCanYouDoSection = (props: Props) => {
  return (
    <Box mt={"10rem"} px={"11.87rem"}>
      <HStack
        justify={"center"}
        mb={"6.875rem"}
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Heading color="#565656">What can</Heading>
        <Heading color="brand.yellow">you do?</Heading>
      </HStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"center"}
        spacing={"5.625rem"}
      >
        <VStack align={"center"}>
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="102" height="102" rx="26" fill="#FED369" />
            <path
              d="M32.305 61.0049C32.5878 61.0053 32.8678 60.9498 33.129 60.8416C33.3902 60.7334 33.6275 60.5747 33.8271 60.3745L45.9375 48.264L50.8729 53.1995C51.0728 53.3994 51.3101 53.558 51.5713 53.6661C51.8324 53.7743 52.1124 53.83 52.395 53.83C52.6777 53.83 52.9576 53.7743 53.2188 53.6661C53.4799 53.558 53.7172 53.3994 53.9171 53.1995L67.4617 39.6549L67.4609 44.5024C67.4609 45.0733 67.6877 45.6208 68.0914 46.0245C68.495 46.4281 69.0425 46.6549 69.6134 46.6549C70.1843 46.6549 70.7318 46.4281 71.1355 46.0245C71.5391 45.6208 71.7659 45.0733 71.7659 44.5024L71.7675 34.4574C71.7675 33.8866 71.5407 33.3391 71.1371 32.9354C70.7334 32.5317 70.1859 32.3049 69.615 32.3049H59.57C58.9991 32.3049 58.4517 32.5317 58.048 32.9354C57.6443 33.3391 57.4175 33.8866 57.4175 34.4574C57.4175 35.0283 57.6443 35.5758 58.048 35.9795C58.4517 36.3831 58.9991 36.6099 59.57 36.6099H64.4184L52.395 48.6333L47.4596 43.6978C47.2597 43.4979 47.0224 43.3394 46.7613 43.2312C46.5001 43.123 46.2202 43.0673 45.9375 43.0673C45.6549 43.0673 45.3749 43.123 45.1138 43.2312C44.8526 43.3394 44.6153 43.4979 44.4154 43.6978L30.783 57.3303C30.4819 57.6314 30.2769 58.0149 30.1938 58.4325C30.1108 58.85 30.1534 59.2828 30.3163 59.6761C30.4792 60.0695 30.7551 60.4057 31.1091 60.6422C31.4631 60.8787 31.8793 61.0049 32.305 61.0049Z"
              fill="white"
            />
            <path
              d="M69.6151 65.3098H32.3051C31.7342 65.3098 31.1867 65.5366 30.783 65.9403C30.3794 66.3439 30.1526 66.8914 30.1526 67.4623C30.1526 68.0332 30.3794 68.5807 30.783 68.9844C31.1867 69.388 31.7342 69.6148 32.3051 69.6148H69.6151C70.1859 69.6148 70.7334 69.388 71.1371 68.9844C71.5408 68.5807 71.7676 68.0332 71.7676 67.4623C71.7676 66.8914 71.5408 66.3439 71.1371 65.9403C70.7334 65.5366 70.1859 65.3098 69.6151 65.3098Z"
              fill="white"
            />
          </svg>
          <Text
            fontSize="1.5rem"
            color="#2B3377"
            fontWeight="bold"
            pt={"3rem"}
            pb={"1.7rem"}
          >
            Business Planning
          </Text>
          <Text
            color="#585858"
            fontSize="1.15rem"
            textAlign={"center"}
            maxW={"27rem"}
          >
            Our Business Plan is a written document describing a company&apos;s
            core business activities.
          </Text>
        </VStack>
        <VStack align={"center"}>
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="102" height="102" rx="20" fill="#3ADAD9" />
            <g clipPath="url(#clip0_4620_94)">
              <path
                d="M50.6 33.0868C49.7513 33.0868 49.0625 32.398 49.0625 31.5493V27.5375C49.0625 26.6888 49.7513 26 50.6 26C51.4487 26 52.1375 26.6888 52.1375 27.5375V31.5493C52.1375 32.398 51.4487 33.0868 50.6 33.0868Z"
                fill="white"
              />
              <path
                d="M64.0704 38.6669C63.6768 38.6669 63.2832 38.5173 62.9839 38.2159C62.3833 37.6153 62.3833 36.6415 62.9839 36.0409L65.8211 33.2037C66.4218 32.603 67.3955 32.603 67.9962 33.2037C68.5968 33.8043 68.5968 34.7781 67.9962 35.3787L65.159 38.2159C64.8576 38.5152 64.464 38.6669 64.0704 38.6669Z"
                fill="white"
              />
              <path
                d="M73.6624 52.1375H69.6505C68.8018 52.1375 68.113 51.4487 68.113 50.6C68.113 49.7513 68.8018 49.0625 69.6505 49.0625H73.6624C74.5111 49.0625 75.1999 49.7513 75.1999 50.6C75.1999 51.4487 74.5111 52.1375 73.6624 52.1375Z"
                fill="white"
              />
              <path
                d="M66.9076 68.4452C66.514 68.4452 66.1204 68.2956 65.8211 67.9942L62.9839 65.157C62.3833 64.5564 62.3833 63.5826 62.9839 62.982C63.5846 62.3813 64.5583 62.3813 65.159 62.982L67.9962 65.8192C68.5968 66.4198 68.5968 67.3936 67.9962 67.9942C67.6948 68.2956 67.3012 68.4452 66.9076 68.4452Z"
                fill="white"
              />
              <path
                d="M34.2924 68.4452C33.8988 68.4452 33.5052 68.2956 33.2059 67.9942C32.6052 67.3936 32.6052 66.4198 33.2059 65.8192L36.0431 62.982C36.6437 62.3813 37.6175 62.3813 38.2181 62.982C38.8187 63.5826 38.8187 64.5564 38.2181 65.157L35.3809 67.9942C35.0796 68.2956 34.686 68.4452 34.2924 68.4452Z"
                fill="white"
              />
              <path
                d="M31.5493 52.1375H27.5375C26.6888 52.1375 26 51.4487 26 50.6C26 49.7513 26.6888 49.0625 27.5375 49.0625H31.5493C32.398 49.0625 33.0868 49.7513 33.0868 50.6C33.0868 51.4487 32.398 52.1375 31.5493 52.1375Z"
                fill="white"
              />
              <path
                d="M37.1296 38.6669C36.736 38.6669 36.3424 38.5173 36.0431 38.2159L33.2059 35.3787C32.6052 34.7781 32.6052 33.8043 33.2059 33.2037C33.8065 32.603 34.7803 32.603 35.3809 33.2037L38.2181 36.0409C38.8187 36.6415 38.8187 37.6153 38.2181 38.2159C37.9147 38.5152 37.5232 38.6669 37.1296 38.6669Z"
                fill="white"
              />
              <path
                d="M56.7499 69.05V71.6126C56.7499 73.5806 55.1304 75.2001 53.1624 75.2001H48.0374C46.3155 75.2001 44.45 73.8881 44.45 71.018V69.05H56.7499Z"
                fill="white"
              />
              <path
                d="M59.6404 39.4479C56.2784 36.7214 51.8504 35.6554 47.5249 36.5779C42.0924 37.7054 37.6849 42.1334 36.5574 47.5659C35.4094 53.1419 37.5004 58.6769 41.9694 62.0594C43.1789 62.9614 44.0194 64.3554 44.3064 65.9749V65.9954C44.3474 65.9749 44.4089 65.9749 44.4499 65.9749H56.7499C56.7909 65.9749 56.8114 65.9749 56.8524 65.9954V65.9749C57.1394 64.4169 58.0619 62.9819 59.4764 61.8749C62.9409 59.1279 64.9499 55.0279 64.9499 50.5999C64.9499 46.2539 63.0229 42.1949 59.6404 39.4479ZM49.8312 50.0874H51.3687C53.7713 50.0874 55.7249 52.041 55.7249 54.4436C55.7249 56.5818 54.1731 58.3571 52.1374 58.722V61.3624C52.1374 62.2111 51.4486 62.8999 50.5999 62.8999C49.7512 62.8999 49.0624 62.2111 49.0624 61.3624V58.7999H47.0124C46.1637 58.7999 45.4749 58.1111 45.4749 57.2624C45.4749 56.4137 46.1637 55.7249 47.0124 55.7249H51.3687C52.0759 55.7249 52.6499 55.1509 52.6499 54.4436C52.6499 53.7364 52.0759 53.1624 51.3687 53.1624H49.8312C47.4286 53.1624 45.4749 51.2087 45.4749 48.8061C45.4749 46.668 47.0268 44.8927 49.0624 44.5278V41.8874C49.0624 41.0387 49.7512 40.3499 50.5999 40.3499C51.4486 40.3499 52.1374 41.0387 52.1374 41.8874V44.4499H54.1874C55.0361 44.4499 55.7249 45.1387 55.7249 45.9874C55.7249 46.8361 55.0361 47.5249 54.1874 47.5249H49.8312C49.1239 47.5249 48.5499 48.0989 48.5499 48.8061C48.5499 49.5134 49.1239 50.0874 49.8312 50.0874Z"
                fill="white"
              />
              <path
                d="M44.3064 65.9749H44.4507C44.4094 65.9749 44.3476 65.9749 44.3064 65.9955V65.9749Z"
                fill="white"
              />
              <path
                d="M56.854 65.9749V65.9956C56.8124 65.9749 56.7916 65.9749 56.75 65.9749H56.854Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4620_94">
                <rect
                  width="49.2"
                  height="49.2"
                  fill="white"
                  transform="translate(26 26)"
                />
              </clipPath>
            </defs>
          </svg>

          <Text
            fontSize="1.5rem"
            color="#2B3377"
            fontWeight="bold"
            pt={"3rem"}
            pb={"1.7rem"}
          >
            Financial Planning
          </Text>
          <Text
            color="#585858"
            fontSize="1.15rem"
            textAlign={"center"}
            maxW={"27rem"}
          >
            Our expert team sensible decision about their money, to ensure they
            achieve the life goals. A financial plan.
          </Text>
        </VStack>
        <VStack align={"center"}>
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="102" height="102" rx="20" fill="#FD9B79" />
            <path
              d="M67.1773 47.4771C67.1773 57.7181 59.0428 65.9543 49.0887 65.9543C39.1345 65.9543 31 57.7181 31 47.4771C31 37.2362 39.1345 29 49.0887 29C59.0428 29 67.1773 37.2362 67.1773 47.4771Z"
              stroke="white"
              strokeWidth="4"
            />
            <rect
              x="40.1501"
              y="47.6973"
              width="4.68735"
              height="9.556"
              rx="2"
              fill="white"
            />
            <rect
              x="46.8464"
              y="42.2366"
              width="4.68735"
              height="15.0166"
              rx="2"
              fill="white"
            />
            <rect
              x="53.5427"
              y="37.4585"
              width="4.68735"
              height="19.7946"
              rx="2"
              fill="white"
            />
            <line
              x1="2"
              y1="-2"
              x2="14.9032"
              y2="-2"
              transform="matrix(0.700303 0.713846 -0.700303 0.713846 60.239 62.7139)"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <Text
            fontSize="1.5rem"
            color="#2B3377"
            fontWeight="bold"
            pt={"3rem"}
            pb={"1.7rem"}
          >
            Market Analysis
          </Text>
          <Text
            color="#585858"
            fontSize="1.15rem"
            textAlign={"center"}
            maxW={"27rem"}
          >
            A market analysis is a quantitative and qualitative assessment of a
            market. It looks into the size of the market.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default WhatCanYouDoSection;
