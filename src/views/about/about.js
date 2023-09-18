import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import TechStackCard from "../../components/techStackCard/techStackCard";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";

export default function About() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb="40px"
      >
        <TypeAnimation
          sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
          style={{ fontSize: "4em" }}
          cursor={false}
        />
      </Flex>

      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb="40px"
      >
        <TypeAnimation
          sequence={[
            "MY",
            500,
            "MY SKILLSET",
            500,
            "MY",
            500,
            "MY SKILLSET",
            500
          ]}
          style={{ fontSize: "4em" }}
          cursor={false}
        />
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
        align={{ base: "center", xl: "center" }}
        justify={{ base: "center", xl: "center" }}
      >
        <TechStackCard imagepath={angular} />
        <TechStackCard imagepath={react} />
        <TechStackCard imagepath={js} />
        <TechStackCard imagepath={typescript} />
        <TechStackCard imagepath={cpp} />
        <TechStackCard imagepath={node} />
        <TechStackCard imagepath={mongo} />
        <TechStackCard imagepath={express} />
        <TechStackCard imagepath={git} />
        <TechStackCard imagepath={gitlab} />
        <TechStackCard imagepath={html} />
        <TechStackCard imagepath={css} />
      </SimpleGrid>
    </Box>
  );
}