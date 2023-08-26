import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Select, { components } from "react-select";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/guestly-logo2.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as GlobeIcon } from "feather-icons/dist/icons/globe.svg";
import { useTranslation } from "react-i18next";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const SELECT = styled(Select)(() => [
  `
  .Select__indicator-separator {
    ${tw`hidden`}
  }
  .Select__menu {
    ${tw`text-blue-600`}
  }
  .css__control {
    height: 40px;
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
  }
`
]);

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-24 h-10`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
const LangIcon = styled.span`
  ${tw`transition duration-300 p-0`}
  svg {
    ${tw`w-5 h-5 text-gray-600`}
  }
`;
const LangCont = tw.div`flex`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
  ${LangCont} {
    ${tw`flex flex-col items-center`}
  }
  ${SELECT} {
    ${tw`mr-4 p-0 text-gray-900 text-lg`}
    div {
      font-size: 1.125rem
    }
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg"
}) => {
  const { i18n, t } = useTranslation();
  const options = [
    { value: "en", label: "EN" },
    { value: "it", label: "IT" },
    { value: "de", label: "DE" }
  ];
  const selectedLang = options.find((f) => f.value === i18n.language);
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];
  const [selectedOption, setSelectedOption] = useState(selectedLang);
  // added type if using typescript
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <LangIcon>
          <GlobeIcon tw="border-transparent" style={{color: "hsl(0, 0%, 20%)"}} />
        </LangIcon>
      </components.DropdownIndicator>
    );
  };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      flexDirection: "row-reverse",
      borderColor: 'transparent',
      border: "none",
      boxShadow: "none",
      borderStyle: "solid",
      borderRadius: 0,
      fontWeight: 600,
      height: "100%",
      fontSize: "0.875rem",
      fontColor: "hsl(0, 0%, 20%)",
      ":hover *": {
        cursor: "pointer",
        color: "#7069FE",
      },
      ":hover": {
        borderColor: '#7069FE',
        borderWidth: "0 0 2px 0",
        borderStyle: "solid",
        borderRadius: 0,
      },
      ":active": {
        border: 0
      },
      ":focus": {
        border: 0,
      },
      "> *": {
        padding: "0 !important"
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontFamily: "Inter 1rem",
        fontWeight: 600,
        backgroundColor: "white",
        textAlign: "center",
        color: isFocused || isSelected ? "#7069FE" : undefined,
        ":active": {
          ...styles[":active"],
          color: "#7069FE",
        },
        ":hover": {
          borderColor: '#7069FE',
          borderWidth: "0 0 2px 0",
          borderStyle: "solid",
          borderRadius: 0,
        },
        content: '""'
      };
    },
    input: (styles) => ({
      ...styles,
      fontFamily: "Inter",
      padding: "0"
    })
  };
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="#why-guestly" onClick={toggleNavbar}>
        {t("common_about")}
      </NavLink>
      <NavLink href="#pricing" onClick={toggleNavbar}>
        {t("common_pricing")}
      </NavLink>
      <NavLink href="#about" onClick={toggleNavbar}>
        {t("common_team")}
      </NavLink>
      <NavLink href="#faq" onClick={toggleNavbar}>
        {t("common_faq")}
      </NavLink>
    </NavLinks>,

    <NavLinks key={2}>
      <LangCont>
        <SELECT
          defaultValue={selectedOption}
          onChange={(v) => {
            setSelectedOption(v);
            i18n.changeLanguage(v.value);
          }}
          options={options}
          components={{ DropdownIndicator, IndicatorSeparator: "" }}
          isSearchable={false}
          //menuIsOpen={true}
          styles={colourStyles}
          tw="pr-4"
        />
        <PrimaryLink
          onClick={toggleNavbar}
          css={roundedHeaderButton && tw`rounded-full`}
          href="#contact-us"
        >
          {t("common_contact_us")}
        </PrimaryLink>
      </LangCont>
    </NavLinks>
  ];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon
              tw="w-6 h-6 fixed"
              style={{ top: "2.5rem", right: "2rem" }}
            />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
