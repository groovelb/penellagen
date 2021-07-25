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

// Media
import illust_handle_light from '../../assets/img/illust/illust_handle_light.svg';
import illust_handle_dark from '../../assets/img/illust/illust_handle_light.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.bg};
`;

const Handle = styled.div`
  position: fixed;
  z-index: 99;
  bottom: -112px;
  left: calc((100% - 224px)/2);
  width: 224px;
  height: 224px;
  img{
    width: 100%;
    height: 100%;
  }
  transform: ${props => `rotate(${props.progress * 6 * 360}deg)`};
  transition: transform 0.5s ease;
  @media screen and (max-width: 800px) {
    bottom: -82px;
    left: calc((100% - 164px)/2);
    width: 164px;
    height: 164px;
    
  }
`;

function Main() {

  // Intit Scroll Hook
  const scrollY = useScrollPosition(60);
  const [isScrollStart, setIsScrollStart] = useState(false);
  const scrollOffset = isMobile ? 200 : 400;
  const [progress, setProgress] = useState(0);


  // Intit Section Ref
  const bodyRef = useRef(null);
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  const refSection4Chart1 = useRef(null);
  const refSection4Chart2 = useRef(null);
  const refSection4_2 = useRef(null);
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
      ref2: refSection4_2,
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
      section4_2: false,
      chart2Section4: false,
      section5: false,
      section6: false,
      section7: false,
      section8: false
    }
  );

  // Init Section Anchor List
  const [anchorlist, setAnchorList] = useState({
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0,
    section6: 0,
    section7: 0,
    section8: 0,
  });

  const [bgTheme, setBgTheme] = useState(sectionList[0].theme);

  // Comparing Scroll Y and Each Ref Position
  useEffect(() => {
    setTriggerList({
      ...triggerList,
      section1: true
    });

    setAnchorList({
      section1: refSection1.current.offsetTop,
      section2: refSection2.current.offsetTop,
      section3: refSection3.current.offsetTop,
      section4: refSection4.current.offsetTop,
      section5: refSection5.current.offsetTop,
      section6: refSection6.current.offsetTop,
      section7: refSection7.current.offsetTop,
      section8: refSection8.current.offsetTop,
    })
    // Prevent Ref Pre-lading
    if (!isScrollStart && scrollY < 10) {
      setIsScrollStart(true);
      console.log(anchorlist);
    }

    if (isScrollStart) {
      if (bodyRef.current !== null) {
        setProgress(scrollY / bodyRef.current.scrollHeight);
      }
      if (refSection1.current.offsetTop <= scrollY && scrollY <= (refSection2.current.offsetTop - scrollOffset)) {
        setBgTheme(sectionList[0].theme);
        setTriggerList({
          ...triggerList,
          section1: true
        });
      } else if ((refSection2.current.offsetTop - scrollOffset) < scrollY && scrollY < refSection3.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[1].theme);
        setTriggerList({
          ...triggerList,
          section2: true
        });
      } else if (refSection3.current.offsetTop - scrollOffset < scrollY && scrollY < refSection4.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[2].theme);
        setTriggerList({
          ...triggerList,
          section3: true
        });
      } else if (refSection4.current.offsetTop - scrollOffset < scrollY && scrollY < refSection5.current.offsetTop - scrollOffset) {
        console.log('section4!');
        setBgTheme(sectionList[3].theme);
        setTriggerList({
          ...triggerList,
          section4: true
        });

        // Chart1 Trigger Check
        if (refSection3.current.offsetTop + refSection4Chart1.current.offsetTop < scrollY) {
          console.log('chart1!');
          setTriggerList({
            ...triggerList,
            chart1Section4: true
          });
        }

        // Section2 Trigger Check
        if (refSection4.current.offsetTop + refSection4_2.current.offsetTop < scrollY) {
          console.log('section4_2!');
          setTriggerList({
            ...triggerList,
            section4_2: true
          });
        }

        // Chart2 Trigger Check
        if (refSection3.current.offsetTop + refSection4Chart2.current.offsetTop < scrollY) {
          console.log('chart2!');
          setTriggerList({
            ...triggerList,
            chart2Section4: true
          });
        }
      } else if (refSection5.current.offsetTop - scrollOffset < scrollY && scrollY < refSection6.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[4].theme);
        setTriggerList({
          ...triggerList,
          section5: true
        });
      } else if (refSection6.current.offsetTop - scrollOffset < scrollY && scrollY < refSection7.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[5].theme);
        setTriggerList({
          ...triggerList,
          section6: true
        });
      } else if (refSection7.current.offsetTop - scrollOffset < scrollY && scrollY < refSection8.current.offsetTop - scrollOffset) {
        setBgTheme(sectionList[6].theme);
        setTriggerList({
          ...triggerList,
          section7: true
        });
      } else if (refSection8.current.offsetTop < scrollY) {
        setTriggerList({
          ...triggerList,
          section8: true
        });
        setBgTheme(sectionList[7].theme);
      }
    }
  }, [scrollY]);

  return (
    <Container ref={bodyRef}>
      <GNB
        bgTheme={bgTheme}
        anchorlist={anchorlist}
      />
      <Handle progress={progress}>
        <img src={bgTheme === 'light' ? illust_handle_dark : illust_handle_light} alt='' />
      </Handle>
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
        ref2Object={refSection4_2}
        isTrigger={triggerList['section4']}
        isRef2Trigger={triggerList['section4_2']}
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