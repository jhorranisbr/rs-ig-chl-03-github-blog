import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostContainer, Actions, InfosFooter, InfoFooterItem } from './styles'

export function Post() {
  return (
    <PostContainer>
      <header>
        <Actions>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
          </a>

          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Actions>

        <h2>JavaScript data types and data structures</h2>

        <InfosFooter>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </InfoFooterItem>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </InfoFooterItem>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </InfoFooterItem>
        </InfosFooter>
      </header>
    </PostContainer>
  )
}
