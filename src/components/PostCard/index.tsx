import { formatDistanceToNow } from 'date-fns'
import { IPost } from '../../pages/Home'
import { clampText } from '../../utils/textUtils'
import { PostCardContainer } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  data: IPost
}

export function PostCard({ data }: PostProps) {
  const { title, body, number, created_at: createdAt } = data

  const formattedCreatedAt = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h3>{title}</h3>
        <span>{formattedCreatedAt}</span>
      </header>

      <p>{clampText(body, 30)}</p>
    </PostCardContainer>
  )
}
