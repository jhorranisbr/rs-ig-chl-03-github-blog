import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

import { NavLink } from 'react-router-dom'

export const PostCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;

  border-radius: 10px;
  border: 2px solid transparent;

  background: ${({ theme }) => theme['base-post']};

  padding: 1rem 1.5rem;

  text-decoration: none;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      ${mixins.fonts.titleM};
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      ${mixins.fonts.textS};
      color: ${({ theme }) => theme['base-span']};

      text-wrap: nowrap;
      margin-top: 1.25ex;
    }
  }

  p {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme['base-text']};
    display: -webkit-box;

    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
