// Global
import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import theme from '../../assets/theme/theme';

// Hook
import useWindowSize from '../../hook/useWindowSize';
import useScrollPosition from '@react-hook/window-scroll'

// Component
import GNB from '../../components/gnb/GNB';
import Section1 from '../../template/Section1';
import Section2 from '../../template/Section2';
import Section3 from '../../template/Section3';
import Section4 from '../../template/Section4';
import Section5 from '../../template/Section5';
import Section6 from '../../template/Section6';
import Section7 from '../../template/Section7';
import Section8 from '../../template/Section8';

const Container = styled.div`
  width: 100%;
  background-color: ${theme.color.bg};
`;

function Main() {
  // Intit Scroll Hook
  const scrollY = useScrollPosition(60);

  // Intit Section Ref
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  const refSection5 = useRef(null);
  const refSection6 = useRef(null);
  const refSection7 = useRef(null);
  const refSection8 = useRef(null);

  // Init Section Object
  const sectionList = [
    {
      ref: refSection1,
      theme: 'dark'
    },
    {
      ref: refSection2,
      theme: 'light'
    },
    {
      ref: refSection3,
      theme: 'light'
    },
    {
      ref: refSection4,
      theme: 'dark'
    },
    {
      ref: refSection5,
      theme: 'dark'
    },
    {
      ref: refSection6,
      theme: 'light'
    },
    {
      ref: refSection7,
      theme: 'light'
    },
    {
      ref: refSection8,
      theme: 'light'
    }
  ];

  const [bgTheme, setBgTheme] = useState(sectionList[0].theme);

  // Comparing Scroll Y and Each Ref Position
  useEffect(() => {
    if(refSection1.current!==null){
      if(refSection1.current.offsetTop<scrollY && scrollY<refSection2.current.offsetTop){
        console.log("section1");
        setBgTheme(sectionList[0].theme);
      } else if(refSection2.current.offsetTop<scrollY && scrollY<refSection3.current.offsetTop){
        console.log("section2");
        setBgTheme(sectionList[1].theme);
      } else if(refSection3.current.offsetTop<scrollY && scrollY<refSection4.current.offsetTop){
        console.log("section3");
        setBgTheme(sectionList[2].theme);
      } else if(refSection4.current.offsetTop<scrollY && scrollY<refSection5.current.offsetTop){
        console.log("section4");
        setBgTheme(sectionList[3].theme);
      } else if(refSection5.current.offsetTop<scrollY && scrollY<refSection6.current.offsetTop){
        console.log("section5");
        setBgTheme(sectionList[4].theme);
      } else if(refSection6.current.offsetTop<scrollY && scrollY<refSection7.current.offsetTop){
        console.log("section6");
        setBgTheme(sectionList[5].theme);
      } else if(refSection7.current.offsetTop<scrollY && scrollY<refSection8.current.offsetTop){
        console.log("section7");
        setBgTheme(sectionList[6].theme);
      }  else if(refSection8.current.offsetTop<scrollY){
        console.log("section8");
        setBgTheme(sectionList[7].theme);
      }
    }
  }, [scrollY]);
  


  return (
    <Container>
      <GNB bgTheme={bgTheme} />
      <Section1 refObject={refSection1} />
      <Section2 refObject={refSection2} />
      <Section3 refObject={refSection3} />
      <Section4 refObject={refSection4} />
      <Section5 refObject={refSection5} />
      <Section6 refObject={refSection6} />
      <Section7 refObject={refSection7} />
      <Section8 refObject={refSection8} />
    </Container>
  )
}

export default Main;