import React from 'react';
import Link from "next/link";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Marcel Mbarga's Portfolio
        </SectionTitle>
        <SectionText>
          A Frontend Developer living in Sejong, Korea🇰🇷 .
        </SectionText>
        <Link href="#about">
          <Button onClick={props.handleClick}>Contact me!</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;