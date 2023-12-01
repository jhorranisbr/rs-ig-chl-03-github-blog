import logo from '../../assets/github-blog-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
