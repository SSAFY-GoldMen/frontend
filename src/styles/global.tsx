import { Global, css } from '@emotion/react';

import { fontStyle } from './fonts';

const style = () => css`
  ${fontStyle}

  body {
    font-family: 'IBMPlexSans';
    font-size: 1.1rem;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }

  span {
    font-family: 'NanumSquareNeo';
  }

  button {
    border: none;
    border-radius: 5px;

    outline: none;

    cursor: pointer;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
