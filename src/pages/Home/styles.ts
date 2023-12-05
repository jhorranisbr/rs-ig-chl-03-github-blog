import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto 2rem;
`

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme['base-profile']};

  border-radius: 10px;

  padding: 2rem;

  margin-top: -6rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.45rem;
    height: 9.45rem;

    object-fit: cover;

    border-radius: 10px;
  }
`

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      flex: 1;

      color: ${({ theme }) => theme['base-title']};
      ${mixins.fonts.titleL};
    }

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme.blue};
      text-decoration: none;
      position: relative;

      border-bottom: 1px solid transparent;

      transition: border-color 0.2s;

      ${mixins.components.link};

      &:hover {
        border-color: ${({ theme }) => theme.blue};
      }
    }
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    ${mixins.fonts.textM};
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  margin-top: 1rem;
`

export const ProfileFooterItem = styled.div`
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

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 4.5rem 0 3rem;

  input {
    flex: 1;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};

    background: ${({ theme }) => theme['base-input']};

    padding: 0.75rem 1rem;

    ${mixins.fonts.textM};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme.blue};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    ${mixins.fonts.titleS};
    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme['base-span']};
  }
`

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
