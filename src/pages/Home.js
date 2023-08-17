import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight";
import Footer from "components/footers/FiveColumnWithBackground.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js"
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Why Guestly</Subheading>}
        heading={
          <>
            Leverage your <HighlightedText>guest experience</HighlightedText>
          </>
        }
        description="At Guestly, we're on a mission to revolutionize the way Hotels, B&Bs, Apartments and Resorts communicate with their guests."
      />
      <FeatureWithSteps
        subheading={<Subheading>Get Started</Subheading>}
        heading={
          <>
            Unlock the power of <HighlightedText>Guest Communication</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Start <HighlightedText>chatting</HighlightedText> with your guests{" "}
            <HighlightedText>today</HighlightedText>
          </>
        }
        primaryButtonText="Request Now"
        features={[
          {
            Icon: CheckIcon,
            title: "30-day free trial",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: CheckIcon,
            title: "No setup fees",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: CheckIcon,
            title: "PC & mobile ready",
            iconContainerCss: tw`bg-green-300 text-green-800`
          }
        ]}
        plans={[
          {
            name: "Starter",
            price: "€49",
            duration: "Monthly (pay yearly)",
            mainFeature: "For small businesses",
            features: [
              "1 Whatsapp Phone number",
              "1000 Conversations/month*",
              "Unlimited Contacts",
              "3 Languages supported",
              "1 User",
              "Direct Messages",
              "Automated Broadcast Messages",
              "Website Widget",
              "PMS API Integration*",
              "Email & Phone Support"
            ]
          },
          {
            name: "Pro",
            price: "€79",
            duration: "Monthly (pay yearly)",
            mainFeature: "For the SMEs",
            features: [
              "1 Whatsapp Phone number",
              "3000 Conversations/month*",
              "Unlimited Contacts",
              "3 Languages supported",
              "5 Users",
              "Direct Messages",
              "Automated Broadcast Messages",
              "Website Widget",
              "PMS API Integration*",
              "Email & Phone Support"
            ],
            featured: true
          },
          {
            name: "Pro",
            price: "€139",
            duration: "Monthly (pay yearly)",
            mainFeature: "For large businesses",
            features: [
              "1 Whatsapp Phone number",
              "Unlimited Conversations/month*",
              "Unlimited Contacts",
              "3 Languages supported",
              "Unlimited Users",
              "Direct Messages",
              "Automated Broadcast Messages",
              "Website Widget",
              "PMS API Integration*",
              "Email & Phone Support"
            ]
          }
        ]}
      />
      <ProfileThreeColGridCards />
      <GetStarted />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What phone number should I use for WhatsApp?",
            answer:
              "You should use your business phone number to connect with your guests on WhatsApp through Guestly."
          },
          {
            question:
              "Which PMS integrations do you support?",
            answer:
              "Currently, we support seamless integrations with XENUS and ASA Hotel, ensuring that your existing systems work harmoniously with Guestly."
          },
          {
            question: "What sets Guestly apart from the WhatsApp Business app?",
            answer:
              "Unlike the standard WhatsApp Business app, Guestly leverages the robust capabilities of the WhatsApp Business API. This empowers you with automated messages, broadcasting, marketing campaigns, multi-device support, and flawless PMS integration."
          },
          {
            question:
              "Is there an extra fee for using the WhatsApp Business API?",
            answer:
              "Yes, there is an additional cost of €0.03-0.05 for each conversation (24-hour message threads) that you send using the WhatsApp Business API. This fee is paid to WhatsApp from your Facebook Business Account."
          },
          {
            question: "How secure is my guest data with Guestly?",
            answer:
              "We prioritize the security and privacy of your guest data. Our system employs robust encryption protocols and adheres to strict data protection standards (GDPR) to ensure that your information remains secure and confidential."
          }
        ]}
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
