import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  header {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme['base-profile']};

    border-radius: 10px;

    padding: 2rem;

    margin-top: -6rem;
  }

  h2 {
    flex: 1;
    width: 100%;

    margin: 1.25rem 0 0.5rem;

    color: ${({ theme }) => theme['base-title']};
    ${mixins.fonts.titleL};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    position: relative;

    border: 1px solid transparent;

    transition: border-color 0.2s;

    ${mixins.components.link};

    &:hover {
      border-bottom-color: ${({ theme }) => theme.blue};
    }
  }
`

export const InfosFooter = styled.footer`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`

export const InfoFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme['base-subtitle']}
  }

  svg {
    color: ${({ theme }) => theme['base-label']};
    font-size: 1.125rem;
  }
`

export const Description = styled.div`
  padding: 2.5rem 2rem;

  a {
    color: ${({ theme }) => theme.blue};
  }

  img {
    max-width: 100%;
  }
`
