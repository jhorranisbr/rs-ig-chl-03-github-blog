import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 10px;

  background: ${({ theme }) => theme['base-post']};

  padding: 1rem 1.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      ${mixins.fonts.titleM};
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      ${mixins.fonts.textS};
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme['base-text']};
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
