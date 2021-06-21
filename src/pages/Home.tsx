import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex, Image, ButtonMenu, ButtonMenuItem, LanguageIcon, Heading, Text, Button } from "@pancakeswap/uikit";
import { useTranslation } from "../context/Localization";
import { EN, ZHCN, languageList } from "../config/localization/languages";
import Page from "../components/Page";

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

// <Button as="a" /> produces a Typescript error despite it being okay in other projects
// with the same tsconfig. To get around this we create a dummy anchor
const Anchor = styled.a``;

const Home = () => {
  const { t, setLanguage, currentLanguage } = useTranslation();
  const [index, setIndex] = useState(currentLanguage.code === "en" ? 0 : 1);

  const handleItemClick = (index: number) => {
    if (index === 1) {
      setLanguage(ZHCN);
    } else {
      setLanguage(EN);
    }

    setIndex(index);
  };

  return (
    <Page p="16px" mx="auto" maxWidth="640px" width="100%">
      <Hero>
        <div>
          <Flex alignItems="center">
            <LanguageIcon width="20px" mr="8px" />
            <ButtonMenu scale="sm" variant="subtle" activeIndex={index} onItemClick={handleItemClick}>
              {languageList.map((language) => {
                return <ButtonMenuItem key={language.code}>{language.code.toUpperCase()}</ButtonMenuItem>;
              })}
            </ButtonMenu>
          </Flex>
        </div>
        <div>
          <Image src="/static/images/rocket2.png" alt="hero-image" width={228} height={228} />
        </div>
      </Hero>
      <Box mb="24px">
        <Image src="/static/images/logo.svg" alt="logo" width={160} height={26} />
      </Box>
      <Box mb="24px">
        <Heading color="secondary" scale="xxl">
          {t("The moon is made of Pancakes.")}
        </Heading>
      </Box>
      <Box mb="16px">
        <Text bold>
          {t("Trade, Earn, and Win on PancakeSwap, the #1 destination for crypto on Binance Smart Chain.")}
        </Text>
      </Box>
      <Box>
        <Box>
          <Button as={Anchor} href="https://pancakeswap.finance" mb="8px">
            {t("Go to PancakeSwap")}
          </Button>
        </Box>
        <Button as={Anchor} href="https://exchange.pancakeswap.finance/#/swap" variant="secondary">
          {t("Trade Now")}
        </Button>
      </Box>
    </Page>
  );
};

export default Home;
