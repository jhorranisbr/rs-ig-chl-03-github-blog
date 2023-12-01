import styled from 'styled-components'

import headerCover from '../../assets/header-cover.svg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['base-profile']};
  background-image: url(${headerCover});
  background-size: 100%;
  background-position: bottom center;

  img {
    margin: 4rem auto 8.375rem;
  }
`
