import { NavLink } from 'react-router-dom'
import logo from '../../assets/github-blog-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
