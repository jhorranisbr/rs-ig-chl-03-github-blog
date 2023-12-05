import { useEffect, useState, useCallback } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IPost } from '../Home'

import { api } from '../../lib/api'

import { NavLink, useParams } from 'react-router-dom'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  PostContainer,
  Actions,
  InfosFooter,
  InfoFooterItem,
  Description,
} from './styles'
import { Loading } from '../../components/Loading'

export function Post() {
  const [post, setPost] = useState<IPost | null>(null)

  const { id } = useParams()

  const fetchPost = useCallback(async () => {
    const username = import.meta.env.VITE_USERNAME
    const reponame = import.meta.env.VITE_REPONAME

    try {
      const response = await api.get(
        `repos/${username}/${reponame}/issues/${id}`,
      )
      setPost(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return post ? (
    <PostContainer>
      <header>
        <Actions>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
          </NavLink>

          <a href={post.html_url} target="_blank" rel="noopener noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Actions>

        <h2>{post?.title}</h2>

        <InfosFooter>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post?.user.login}</span>
          </InfoFooterItem>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </InfoFooterItem>
          <InfoFooterItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentários</span>
          </InfoFooterItem>
        </InfosFooter>
      </header>

      <Description>
        <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
      </Description>
    </PostContainer>
  ) : (
    <Loading />
  )
}
