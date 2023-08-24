import React from "react";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>{t('section_1_title')}</Subheading>}
        heading={
          <>
            {t('section_1_header_1')}<HighlightedText> {t('section_1_header_2')}</HighlightedText>
          </>
        }
        description={t('section_1_description')}
      />
      <FeatureWithSteps
        subheading={<Subheading>{t('section_2_title')}</Subheading>}
        heading={
          <>
            {t('section_2_header_1')} <HighlightedText>{t('section_2_header_2')}</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Pricing
        subheading={<Subheading>{t('section_3_title')}</Subheading>}
        heading={
          <>
            {t('section_3_header_1')} <HighlightedText>{t('section_3_header_2')}</HighlightedText> {t('section_3_header_3')}{" "}
            <HighlightedText>{t('section_3_header_4')}</HighlightedText>
          </>
        }
        primaryButtonText={t('section_3_button_text')}
        features={[
          {
            Icon: CheckIcon,
            title: t('section_3_fe_1'),
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: CheckIcon,
            title: t('section_3_fe_2'),
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: CheckIcon,
            title: t('section_3_fe_3'),
            iconContainerCss: tw`bg-green-300 text-green-800`
          }
        ]}
        plans={[
          {
            name: t('section_3_p_1_name'),
            price: "€49",
            duration: t("common_monthly"),
            mainFeature: t("section_3_p_1_fe"),
            features: [
              `750 ${t("common_con_per_month")}*`,
              t("common_unl_cont"),
              `3 ${t('common_lang_sup')}`,
              `1 ${t("common_user")}`,
              t("common_dir_mess"),
              t("common_auto_broad_mess"),
              t("common_web_wid"),
              t("common_api_int"),
              t("common_cus_supp"),
            ]
          },
          {
            name: t('section_3_p_2_name'),
            price: "€79",
            duration: t("common_monthly"),
            mainFeature: t("section_3_p_2_fe"),
            features: [
              `2000 ${t("common_con_per_month")}*`,
              t("common_unl_cont"),
              `3 ${t('common_lang_sup')}`,
              `5 ${t("common_users")}`,
              t("common_dir_mess"),
              t("common_auto_broad_mess"),
              t("common_web_wid"),
              t("common_api_int"),
              t("common_cus_supp"),
            ],
            featured: true
          },
          {
            name: t('section_3_p_3_name'),
            price: "€139",
            duration: t("common_monthly"),
            mainFeature: t("section_3_p_3_fe"),
            features: [
              `${t("common_unlimited")} ${t("common_con_per_month")}*`,
              t("common_unl_cont"),
              `3 ${t('common_lang_sup')}`,
              `${t("common_unlimited")} ${t("common_users")}`,
              t("common_dir_mess"),
              t("common_auto_broad_mess"),
              t("common_web_wid"),
              t("common_api_int"),
              t("common_cus_supp"),
            ]
          }
        ]}
      />
      <ProfileThreeColGridCards />
      <GetStarted />
      <FAQ
        subheading={<Subheading>{t('section_4_title')}</Subheading>}
        heading={
          <>
            {t("section_4_header_1")} <HighlightedText>{t("section_4_header_2")}?</HighlightedText>
          </>
        }
        description={t("section_4_des")}
        faqs={[
          {
            question: t("section_4_faqs_q1"),
            answer: t("section_4_faqs_a1")
          },
          {
            question: t("section_4_faqs_q2"),
            answer: t("section_4_faqs_a2")
          },
          {
            question: t("section_4_faqs_q3"),
            answer: t("section_4_faqs_a3")
          },
          {
            question: t("section_4_faqs_q4"),
            answer: t("section_4_faqs_a4")
          },
          {
            question: t("section_4_faqs_q5"),
            answer: t("section_4_faqs_a5")
          }
        ]}
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
