// Global
import React, { useEffect, useState, useRef } from "react";
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import theme from '../../assets/theme/theme';

// Hook
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
  const [isScrollStart, setIsScrollStart] = useState(false);
  const scrollOffset = isMobile ? 200 : 400;


  // Intit Section Ref
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  const refSection4Chart1 = useRef(null);
  const refSection4Chart2 = useRef(null);
  const refSection5 = useRef(null);
  const refSection6 = useRef(null);
  const refSection7 = useRef(null);
  const refSection8 = useRef(null);


  // Init Section Object
  const sectionList = [
    {
      ref: refSection1,
      theme: 'dark',
    },
    {
      ref: refSection2,
      theme: 'light',
    },
    {
      ref: refSection3,
      theme: 'light',
    },
    {
      ref: refSection4,
      refChart1: refSection4Chart1,
      refChart2: refSection4Chart2,
      theme: 'dark',
    },
    {
      ref: refSection5,
      theme: 'dark',
    },
    {
      ref: refSection6,
      theme: 'light',
    },
    {
      ref: refSection7,
      theme: 'light',
    },
    {
      ref: refSection8,
      theme: 'light',
    }
  ];

  // Init Section Trigger List 
  const [triggerList, setTriggerList] = useState(
    {
      section1: false,
      section2: false,
      section3: false,
      section4: false,
      chart1Section4: false,
      chart2Section4: false,
      section5: false,
      section6: false,
      section7: false,
      section8: false
    }
  );

  const [bgTheme, setBgTheme] = useState(sectionList[0].theme);

  // Comparing Scroll Y and Each Ref Position
  useEffect(() => {
    setTriggerList({
      ...triggerList,
      section1: true
    });

    if (!isScrollStart && scrollY < 10) {
      setIsScrollStart(true);
    }

    if (isScrollStart) {
      if (refSection1.current.offsetTop <= scrollY && scrollY <= (refSection2.current.offsetTop - scrollOffset)) {
        console.log('section1');
        setBgTheme(sectionList[0].theme);
        setTriggerList({
          ...triggerList,
          section1: true
        });
      } else if ((refSection2.current.offsetTop - scrollOffset) < scrollY && scrollY < refSection3.current.offsetTop - scrollOffset) {
        console.log('section2');
        setBgTheme(sectionList[1].theme);
        setTriggerList({
          ...triggerList,
          section2: true
        });
      } else if (refSection3.current.offsetTop - scrollOffset < scrollY && scrollY < refSection4.current.offsetTop - scrollOffset) {
        console.log('section3');
        setBgTheme(sectionList[2].theme);
        setTriggerList({
          ...triggerList,
          section3: true
        });
      } else if (refSection4.current.offsetTop - scrollOffset < scrollY && scrollY < refSection5.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[3].theme);
        setTriggerList({
          ...triggerList,
          section4: true
        });

        console.log(refSection4Chart1.current.offsetTop);
        // Chart Trigger Check
        if(refSection3.current.offsetTop + refSection4Chart1.current.offsetTop < scrollY){
          console.log('chart1!');
          setTriggerList({
            ...triggerList,
            chart1Section4: true
          });
        }

        if(refSection3.current.offsetTop + refSection4Chart2.current.offsetTop < scrollY){
          console.log('chart2!');
          setTriggerList({
            ...triggerList,
            chart2Section4: true
          });
        }

      } else if (refSection5.current.offsetTop - scrollOffset < scrollY && scrollY < refSection6.current.offsetTop - scrollOffset) {
        console.log('section5');
        setBgTheme(sectionList[4].theme);
        setTriggerList({
          ...triggerList,
          section5: true
        });
      } else if (refSection6.current.offsetTop - scrollOffset < scrollY && scrollY < refSection7.current.offsetTop - scrollOffset) {
        console.log('section6');
        setBgTheme(sectionList[5].theme);
        setTriggerList({
          ...triggerList,
          section6: true
        });
      } else if (refSection7.current.offsetTop - scrollOffset < scrollY && scrollY < refSection8.current.offsetTop - scrollOffset) {
        console.log('section7');
        setBgTheme(sectionList[6].theme);
        setTriggerList({
          ...triggerList,
          section7: true
        });
      } else if (refSection8.current.offsetTop < scrollY) {
        console.log('section8');
        setTriggerList({
          ...triggerList,
          section8: true
        });
        setBgTheme(sectionList[7].theme);
      }
    }
  }, [scrollY]);

  return (
    <Container>
      <GNB bgTheme={bgTheme} />
      <Section1
        refObject={refSection1}
        isTrigger={triggerList['section1']}
      />
      <Section2
        refObject={refSection2}
        isTrigger={triggerList['section2']}
      />
      <Section3
        refObject={refSection3}
        isTrigger={triggerList['section3']}
      />
      <Section4
        refObject={refSection4}
        isTrigger={triggerList['section4']}
        refChart1={refSection4Chart1}
        refChart2={refSection4Chart2}
        isChart1Trigger={triggerList['chart1Section4']}
        isChart2Trigger={triggerList['chart2Section4']}
      />
      <Section5
        refObject={refSection5}
        isTrigger={triggerList['section5']}
      />
      <Section6
        refObject={refSection6}
        isTrigger={triggerList['section6']}
      />
      <Section7
        refObject={refSection7}
        isTrigger={triggerList['section7']}
      />
      <Section8
        refObject={refSection8}
        isTrigger={triggerList['section8']}
      />
    </Container>
  )
}

export default Main;