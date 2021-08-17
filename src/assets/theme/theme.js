const theme = {
  color: {
    bg: '#FAF5F1',
    lightBeige: '#EDE1DD',
    lightBeige2: '#CABDBB',
    beige: '#b1a6a4',
    pinkBeige: '#AA837B',
    emeraldGreen: "#002938",
    greenTea: '#B1C79E',
    pinkOrange: '#FF775C',
    white: '#FFFFFF',
    black: '#333333'
  },
  spacing: {
    // Basic Unit X N
    unit: '16px',
    // Unit for Spacing Text & Component 
    tiny: '2px',
    small: '4px',
    regular: '8px',
    medium: '12px',
    big: '40px',
    // Unit for Spacing by Context
    liveArea: '1280px',
    sectionPadding: '160px',
    sectionPaddingMobile: '80px',
    titleMarginBottom: '80px',
    titleMarginBottomMobile: '48px',
    subSectionPadding: '48px',
    subSectionPaddingMobile: '24px',
    contentMarginBottom1: '48px',
    contentMarginBottom2: '80px',
    headlineMarginBottom: '32px',
    headlineMarginBottomMobile: '16px',
    subsectionMarginBottom: '160px',
    subsectionMarginBottomSmall: '120px',
    horizonTitle: '156px',
    horizonContent: '400px',
  },
  layout: {
    flexRow:`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `,
    flexCol:`
      display: flex;
      flex-direction: column;
    `,
    flexRowCol:`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      @media screen and (max-width: 480px) {
        flex-direction: column;
      }
    `
    ,
    alignCenter:`
      align-items: center;
    `,
    flexCenter:`
      align-items: center;
      justify-content: center;
    `
  },
  typeBlock: {
    msgBig: `
      font-family: 'Libre Caslon Text', serif;;
      font-size: 108px;
      line-height: 124px;
      letter-spacing: 11px;
      @media screen and (max-width: 1024px) {
        font-size: 86px;
        line-height: 104px;
        letter-spacing: 6px;
      }
      @media screen and (max-width: 480px) {
        font-size: 42px;
        line-height: 52px;
        letter-spacing: 2px;
      }
    `,
    msgMiddle: `
      font-family: 'Libre Caslon Text', serif;;
      font-size: 44px;
      line-height: 56px;
      letter-spacing: 4px;
      @media screen and (max-width: 480px) {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 2px;
      }
    `,
    numberingHuge: `
      font-family: 'Libre Caslon Text', serif;;
      font-size: 96px;
      line-height: 115px;
      letter-spacing: 0px;
    `,
    numberingBig: `
      font-family: 'Libre Caslon Text', serif; !important;
      font-size: 64px !important;
      line-height: 76px !important;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 44px !important;
        line-height: 44px !important;
        letter-spacing: 4.5px !important;
      }
    `,
    h1: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 26px;
        line-height: 40px;
        letter-spacing: 0px;
      }
    `,
    h2: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-weight: 500;
      font-size: 26px;
      line-height: 40px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0px;
      }
    `,
    subtitle: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 0px;
      }
    `,
    menu: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-weight: 500;
      font-size: 14.8px;
      line-height: 22px;
      letter-spacing: 0px;
    `,
    body: `
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 14.8px;
        line-height: 26px;
      }
    `,
    button: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0px;
    `,
    table: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 14.8px;
        line-height: 20px;
        letter-spacing: 0px;
      }
    `,
    caption: `
      font-family: 'Noto Sans KR','Noto Sans SC', sans-serif;
      font-size: 14.8px;
      line-height: 22px;
      letter-spacing: 0px;
      @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0px;
      }
    `,
  }
};

export default theme;