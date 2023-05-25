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
  },
  overflow: {
    paragraphTodoCheckboxRoot: 'hidden',
  },
  whiteSpace: {
    paragraphTodoCheckboxRoot: 'nowrap',
  },
  textOverflow: {
    paragraphTodoCheckboxRoot: 'ellipsis',
  },
  textDecorationLine: {
    paragraphTodoCheckboxRootChecked: 'line-through',
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
  },
  padding: {
    button: '1.15rem 1.5rem',
    bigButton: '1.8rem 1.5rem',
    input: '0.9rem 1.5rem',
    todoInput: '0 1.5rem 0 1.5rem',
    todoCheckboxRoot: '0 1.5rem 0 1.5rem',
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
    checkboxIndicator: '1.5rem',
    todoInput: '100%',
    todoCheckboxRoot: '99%',
    passwordButton: '5rem',
    input: '100%',
  },
  height: {
    checkboxRoot: '2.7rem',
    checkboxIndicator: '1.5rem',
    formFieldTerms: '3rem',
    todoInput: '6rem',
    todoCheckboxRoot: '5rem',
    input: '4rem',
    passwordButton: '4rem',
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
  },
  justifyContent: {
    checkboxRoot: 'center',
    passwordButton: 'center',
  },
  alignItems: {
    checkboxRoot: 'center',
    formFieldTerms: 'center',
    todoCheckboxRoot: 'center',
    passwordButton: 'center',
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
  },
  marginTop: {
    formRootLastChild: '3.8rem',
  },
  marginBottom: {
    formRootNotLastChild: '3rem',
  },
  marginLeft: {
    title1: '-0.6rem',
    title2: '-0.3rem',
    title3: '-0.3rem',
  },
  transition: {
    button:
      'box-shadow .15s ease-in-out, border .15s ease-in-out, background-color .15s ease-in-out, color .15s ease-in-out',
    input:
      'box-shadow .15s ease-in-out, border .15s ease-in-out, background-color .15s ease-in-out, color .15s ease-in-out',
    link: 'color .15s ease-in-out',
    logo: 'opacity .15s ease-in-out',
    checkboxRoot:
      'background-color .15s ease-in-out, box-shadow .15s ease-in-out',
    checkboxIndicator:
      'background-color .15s ease-in-out, color .15s ease-in-out',
    todoCheckboxRoot:
      'background-color .15s ease-in-out, color .15s ease-in-out, box-shadow .15s ease-in-out',
  },
  colors: {
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

    formRoot: colors.black,

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

    bold: colors.pureBlack,

    todoCheckboxRootBg: colors.none,
    todoCheckboxRootBgHover: colors.grey1,
    todoCheckboxRootBgActive: colors.grey2,

    todoCheckboxRootBorder: colors.grey1,
    todoCheckboxRootBorderActive: colors.grey1,

    todoCheckboxRootBgChecked: colors.grey1,
    todoCheckboxRootBgCheckedHover: colors.grey2,
    todoCheckboxRootBgCheckedActive: colors.grey3,
    todoCheckboxRootBorderCheckedActive: colors.grey2,

    paragraphTodoCheckboxRootChecked: colors.grey5,

    passwordButtonBg: colors.grey1,
    passwordButtonBgHover: colors.grey2,
    passwordButtonBgActive: colors.grey3,

    blackIcons: colors.black,
  },
};

export default themes;
