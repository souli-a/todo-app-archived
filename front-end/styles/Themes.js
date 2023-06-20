import colors from './Colors';

const themes = {
  fontSize: {
    button: '1.75rem',
    input: '1.6rem',
    link: '1.6rem',
    title1: '6.4rem',
    title2: '4.0rem',
    title3: '2.4rem',
    paragraph: '1.6rem',
    listItem: '1.6rem',
    formLabel: '1.7rem',
    formLabelTerms: '1.35rem',
    bigButton: '1.9rem',
    todoInput: '1.8rem',
    paragraphTodoCheckboxRoot: '1.8rem',
    card: '1.8rem',
    tag: '1.5rem',
  },
  textDecorationLine: {
    paragraphTodoCheckboxRootChecked: 'line-through',
  },
  overflow: {
    paragraphTodoCheckboxRoot: 'hidden',
  },
  textDecorationThickness: {
    paragraphTodoCheckboxRootChecked: '0.2rem',
  },
  border: {
    none: '0rem',
  },
  borderRadius: {
    button: '0.7rem',
    input: '0.7rem',
    formRoot: '0.7rem',
    checkboxRoot: '0.7rem',
    checkboxIndicator: '0.4rem',
    todoCheckboxRoot: '0.7rem',
    passwordInput: '0.7rem 0 0 0.7rem',
    passwordButton: '0 0.7rem 0.7rem 0',
    card: '0.7rem',
    roundedSeparator: '0.7rem',
    horizontalSeparator: '0.7rem',
    tag: '0.7rem',
    redButtonDelete: '0.9rem',
  },
  padding: {
    button: '1.15rem 1.5rem',
    bigButton: '1.8rem 1.5rem',
    input: '0.9rem 1.5rem',
    todoInput: '0 10.1rem 0 1.5rem',
    todoCheckboxRoot: '0 7.5rem 0 1.5rem',
    card: '0 1.5rem 0 1.5rem',
    tag: '0.6rem',
  },
  outline: {
    input: 'none',
  },
  fontWeight: {
    button: '600',
    formRoot: '400',
    formLabel: '400',
    title1: '400',
    title2: '400',
    title3: '400',
    bold: '800',
  },
  width: {
    image: '4rem',
    formRoot: '37rem',
    checkboxRoot: '2.7rem',
    todoCheckboxRoot: '100%',
    checkboxIndicator: '1.5rem',
    todoInput: '100%',
    passwordButton: '5rem',
    input: '100%',
    card: '100%',
    roundedSeparator: '0.5rem',
    horizontalSeparator: '100%',
    tag: '6rem',
    todoCheckboxIndicator: '100%',
  },
  height: {
    checkboxRoot: '2.7rem',
    checkboxIndicator: '1.5rem',
    formFieldTerms: '4rem',
    todoInput: '6rem',
    input: '4rem',
    passwordButton: '4rem',
    roundedSeparator: '0.5rem',
    horizontalSeparator: '0.1rem',
    todoCheckboxRoot: '5rem',
  },
  minHeight: {
    card: '5rem',
  },
  position: {
    redButtonDelete: 'absolute',
  },
  cursor: {
    button: 'pointer',
    link: 'pointer',
  },
  opacity: {
    logoHover: '0.7',
  },
  letterSpacing: {
    button: '0.025rem',
    title1: '0.05rem',
    title2: '0.05rem',
    title3: '0.05rem',
    paragraph: '0.015rem',
    listItem: '0.015rem',
  },
  listStyleType: {
    unorderedList: 'circle',
    orderedList: 'circle',
  },
  listStyle: {
    unorderedList: 'inside',
    orderedList: 'inside',
  },
  textDecoration: {
    link: 'underline',
  },
  display: {
    formRoot: 'flex',
    checkboxRoot: 'flex',
    formField: 'flex',
    formFieldTerms: 'flex',
    todoCheckboxRoot: 'flex',
    passwordButton: 'flex',
    card: 'flex',
    button: 'flex',
    tag: 'flex',
  },
  justifyContent: {
    checkboxRoot: 'center',
    passwordButton: 'center',
    button: 'center',
    tag: 'center',
  },
  alignItems: {
    checkboxRoot: 'center',
    formFieldTerms: 'center',
    todoCheckboxRoot: 'center',
    passwordButton: 'center',
    card: 'center',
    button: 'center',
    tag: 'center',
  },
  flexDirection: {
    formRoot: 'column',
    formField: 'column',
  },
  boxShadow: {
    button: '0 0 0 0.2rem',
    input: '0 0 0 0.2rem',
    checkboxRoot: '0 0 0 0.2rem',
    todoCheckboxRoot: '0 0 0 0.2rem',
    passwordButton: 'none',
    passwordButtonActive: 'none',
  },
  lineHeight: {
    title1: '7rem',
    title2: '4rem',
    title3: '3.5rem',
    paragraph: '2.4rem',
    listItem: '2.4rem',
    formLabelTerms: '1.7rem',
  },
  margin: {
    checkboxRoot: '0 1.4rem 0 0',
    formField: '0rem',
    formLabel: '0 0 1.3rem 0',
    formFieldTerms: '0 0 -1.7rem 0',
    redButtonDelete: '0.55rem 0 0 34.9rem',
  },
  marginTop: {
    formRootLastChild: '2.8rem',
  },
  marginBottom: {
    formRootNotLastChild: '3rem',
  },
  marginLeft: {
    title1: '-0.7rem',
    title2: '-0.3rem',
    title3: '-0.3rem',
  },
  transition: {
    button:
      'box-shadow .12s ease-in-out, border .12s ease-in-out, background-color .12s ease-in-out, color .12s ease-in-out',
    input:
      'box-shadow .12s ease-in-out, border .12s ease-in-out, background-color .12s ease-in-out, color .12s ease-in-out',
    link: 'color .12s ease-in-out',
    logo: 'opacity .12s ease-in-out',
    checkboxRoot:
      'background-color .12s ease-in-out, box-shadow .12s ease-in-out',
    checkboxIndicator:
      'background-color .12s ease-in-out, color .12s ease-in-out',
    todoCheckboxRoot:
      'background-color .12s ease-in-out, color .12s ease-in-out, box-shadow .12s ease-in-out',
  },
};

const lightTheme = {
  white: colors.white,
  black: colors.black,
  none: colors.none,

  blueBg: colors.blue4,
  blueHover: colors.blue5,
  blueActive: colors.blue6,
  blueBorder: colors.blue1,

  greyBg: colors.grey2,
  greyHover: colors.grey3,
  greyActive: colors.grey4,
  greyBorder: colors.grey1,

  bgColorTransparentButton: colors.none,
  bgColorTransparentButtonHover: colors.grey1,
  bgColorTransparentButtonActive: colors.grey2,
  colorBorderTransparentButton: colors.grey1,
  colorTransparentButton: colors.black,

  redBg: colors.red4,
  redHover: colors.red5,
  redActive: colors.red6,
  redBorder: colors.red1,

  greenBg: colors.green4,
  greenHover: colors.green5,
  greenActive: colors.green6,
  greenBorder: colors.green1,

  inputPlaceholder: colors.grey6,
  inputPlaceholderFocus: colors.grey4,
  inputBg: colors.grey1,
  inputBgNone: colors.none,

  link: colors.blue2,
  linkHover: colors.blue4,
  linkActive: colors.blue6,

  colorFormRoot: colors.black,

  checkboxRootBg: colors.grey1,
  checkboxRootHover: colors.grey2,
  checkboxRootActive: colors.grey3,
  checkboxRootBorder: colors.grey1,
  checkboxRootBorderChecked: colors.grey1,
  checkboxRootBgChecked: colors.none,
  checkboxRootBgCheckedHover: colors.grey1,
  checkboxRootBgCheckedActive: colors.grey2,

  checkboxIndicatorBg: colors.green1,
  checkboxIndicator: colors.green5,

  colorFormLabel: colors.grey6,

  bgColorLogo: 'none',

  bgColor: colors.transparent,

  colorBold: colors.pureBlack,

  bgColorTodoCheckboxRoot: colors.none,
  bgColorTodoCheckboxRootHover: colors.grey1,
  bgColorTodoCheckboxRootActive: colors.grey2,

  todoCheckboxRootBorder: colors.grey1,
  todoCheckboxRootBorderActive: colors.grey1,

  bgColorTodoCheckboxRootChecked: colors.grey1,
  bgColorTodoCheckboxRootCheckedHover: colors.grey2,
  bgColorTodoCheckboxRootCheckedActive: colors.grey3,
  todoCheckboxRootBorderCheckedActive: colors.grey2,

  colorParagraphTodoCheckboxRootChecked: colors.grey5,
  colorParagraphTodoCheckboxRoot: colors.black,

  passwordButtonBg: colors.grey1,
  passwordButtonBgHover: colors.grey2,
  passwordButtonBgActive: colors.grey3,

  blackIcon: colors.black,
  whiteIcon: colors.white,

  cardBg: colors.grey1,
  card: colors.grey3,

  colorRoundedSeparator: colors.black,
  colorHorizontalSeparator: colors.grey2,

  tag: colors.white,
  tagBg: colors.grey4,

  colorTitle: colors.black,

  colorCaret: colors.black,

  colorInput: colors.black,

  colorParagraph: colors.black,

  colorList: colors.black,

  bgColorAccountBanner: colors.grey1,
  bgColorIconAccountBanner: colors.black,
  bgColorDivIconAccountBannerHover: colors.grey2,
  bgColorDivIconAccountBannerActive: colors.grey3,
};

const darkTheme = {
  white: colors.white,
  black: colors.black,
  none: colors.none,

  blueBg: colors.blue4,
  blueHover: colors.blue5,
  blueActive: colors.blue6,
  blueBorder: colors.blue1,

  greyBg: colors.grey2,
  greyHover: colors.grey3,
  greyActive: colors.grey4,
  greyBorder: colors.grey1,

  bgColorTransparentButton: colors.none,
  bgColorTransparentButtonHover: colors.grey4,
  bgColorTransparentButtonActive: colors.grey5,
  colorBorderTransparentButton: colors.grey4,
  colorTransparentButton: colors.white,

  transparentBg: colors.none,
  transparentHover: colors.grey1,
  transparentActive: colors.grey2,
  transparentBorder: colors.grey1,

  redBg: colors.red4,
  redHover: colors.red5,
  redActive: colors.red6,
  redBorder: colors.red1,

  greenBg: colors.green4,
  greenHover: colors.green5,
  greenActive: colors.green6,
  greenBorder: colors.green1,

  inputPlaceholder: colors.grey6,
  inputPlaceholderFocus: colors.grey4,
  inputBg: colors.grey1,
  inputBgNone: colors.none,

  link: colors.blue2,
  linkHover: colors.blue4,
  linkActive: colors.blue6,

  colorFormRoot: colors.white,

  checkboxRootBg: colors.grey1,
  checkboxRootHover: colors.grey2,
  checkboxRootActive: colors.grey3,
  checkboxRootBorder: colors.grey1,
  checkboxRootBorderChecked: colors.grey1,
  checkboxRootBgChecked: colors.none,
  checkboxRootBgCheckedHover: colors.grey1,
  checkboxRootBgCheckedActive: colors.grey2,

  checkboxIndicatorBg: colors.green1,
  checkboxIndicator: colors.green5,

  formLabelTerms: colors.grey6,

  bgColorLogo: 'invert(100%)',

  bgColor: colors.dark,

  colorBold: colors.white,

  bgColorTodoCheckboxRoot: colors.grey1,
  bgColorTodoCheckboxRootHover: colors.grey3,
  bgColorTodoCheckboxRootActive: colors.grey4,

  todoCheckboxRootBorder: colors.grey1,
  todoCheckboxRootBorderActive: colors.grey1,

  bgColorTodoCheckboxRootChecked: colors.dark,
  bgColorTodoCheckboxRootCheckedHover: colors.grey4,
  bgColorTodoCheckboxRootCheckedActive: colors.grey5,
  todoCheckboxRootBorderCheckedActive: colors.grey6,

  colorParagraphTodoCheckboxRootChecked: colors.white,
  colorParagraphTodoCheckboxRoot: colors.black,

  passwordButtonBg: colors.grey1,
  passwordButtonBgHover: colors.grey2,
  passwordButtonBgActive: colors.grey3,

  blackIcon: colors.black,
  whiteIcon: colors.white,

  cardBg: colors.grey1,
  card: colors.grey3,

  colorRoundedSeparator: colors.grey1,
  colorHorizontalSeparator: colors.grey6,

  tag: colors.white,
  tagBg: colors.grey4,

  colorTitle: colors.white,

  colorCaret: colors.white,

  colorInput: colors.white,

  colorParagraph: colors.white,

  colorList: colors.white,

  bgColorAccountBanner: colors.black,
  bgColorIconAccountBanner: colors.grey1,
  bgColorDivIconAccountBannerHover: colors.grey4,
  bgColorDivIconAccountBannerActive: colors.grey6,
};

export { themes, darkTheme, lightTheme };
