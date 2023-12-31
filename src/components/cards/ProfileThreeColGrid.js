import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { useTranslation } from "react-i18next";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;
const HighlightedText = tw.span`text-primary-500`;

export default ({
  heading = "",
  subheading = "OUR TEAM",
  description = "We're driven by shared passion for hospitality. Infused with innovative tech spirit, crafting the future of guest communication with Guestly.",
  cards = [
    {
      imageSrc: "/Nicola.jpg",
      position: "common_founder_ceo",
      name: "common_nicola"
    },
    {
      imageSrc: "/luca.jpg",
      position: "common_founder_cto",
      name: "common_luca"
    }
  ]
}) => {
  const { t } = useTranslation();
  return (
    <Container id="about">
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{t('section_5_title')}</Subheading>}
          {<Heading>{<>{t('section_5_header_1')} <HighlightedText> {t('section_5_header_2')} </HighlightedText> {t('section_5_header_3')}</>}</Heading>}
          {description && <Description>{t('section_5_des')}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{t(card.position)}</span>
                <span className="name">{t(card.name)}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
