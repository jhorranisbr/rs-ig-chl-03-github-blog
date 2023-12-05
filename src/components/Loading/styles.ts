import styled from 'styled-components'

export const LoadingContainer = styled.main`
  width: 4rem;
  height: 4rem;

  margin: 5rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  svg {
    animation-name: spin;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`
