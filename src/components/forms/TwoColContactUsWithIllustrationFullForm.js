import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { useTranslation } from "react-i18next";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

const onSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const form = document.getElementById("contact-us-form");
  const data = new FormData(form);
  console.log([...data.entries()]);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let formObj = {};
  for (let [key, value] of Array.from(data.entries())) {
    formObj[key] = value.toString();
  }
  const raw = JSON.stringify(formObj);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("https://email.guestly.ai/email", requestOptions)
    .then((response) => response.text())
    .then((result) => form.reset())
    .catch((error) => console.log("error", error));
};

export default ({
  subheading = "CONTACT US",
  heading = "",
  description = "We're excited to make your business more personal and successful with WhatsApp conversations.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const { t } = useTranslation();
  return (
    <Container id="contact-us">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>
              <>
                {t("section_8_header_1")}{" "}
                <span tw="text-primary-500">{t("section_8_header_2")}</span>
                <wbr /> {t("section_8_header_3")}
              </>
            </Heading>
            {description && <Description>{t("section_8_des")}</Description>}
            <Form id="contact-us-form">
              <Input
                type="text"
                name="name"
                placeholder={t("common_name_placeholder")}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder={t("common_email_placeholder")}
                required
              />
              <Input
                type="text"
                name="company"
                placeholder={t("common_company_placeholder")}
              />
              <Textarea
                name="message"
                placeholder={t("common_message_placeholder")}
              />
              <SubmitButton type="submit" onClick={onSubmit}>
                {t("common_send")}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
