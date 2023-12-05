import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  HomeContainer,
  SearchFormContainer,
  SearchFormHeader,
  ProfileContainer,
  ProfileInfos,
  ProfileFooter,
  ProfileFooterItem,
  PostListContainer,
} from './styles'
import { PostCard } from '../../components/PostCard'
import { api } from '../../lib/api'
import { Loading } from '../../components/Loading'

export interface IUser {
  id: number
  name: string
  bio: string
  login: string
  avatar_url: string
  followers: number
  company: string
  html_url: string
}

export interface IPost {
  number: number
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
  user: IUser
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [user, setUser] = useState<IUser | null>(null)
  const [posts, setPosts] = useState<IPost[] | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchBlogData(data.query)
  }

  async function fetchUserData() {
    const username = import.meta.env.VITE_USERNAME
    try {
      const response = await api.get<IUser>(`users/${username}`)
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBlogData = useCallback(
    async (q: string = '') => {
      if (!isSubmitting) {
        const username = import.meta.env.VITE_USERNAME
        const reponame = import.meta.env.VITE_REPONAME
        const url = encodeURI(
          `search/issues?q=${q} repo:${username}/${reponame}`,
        )

        try {
          const response = await api.get(url)

          if (response.data.items) {
            setPosts(response.data.items)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    [isSubmitting],
  )

  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    fetchBlogData()
  }, [fetchBlogData])

  return user ? (
    <HomeContainer>
      <ProfileContainer>
        <img src={user.avatar_url} alt="" />
        <ProfileInfos>
          <header>
            <h2>{user.name}</h2>
            <a href={user.html_url}>
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <p>{user.bio}</p>

          <ProfileFooter>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user.login}</span>
            </ProfileFooterItem>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </ProfileFooterItem>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </ProfileFooterItem>
          </ProfileFooter>
        </ProfileInfos>
      </ProfileContainer>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <SearchFormHeader>
          <h2>Publicações</h2>
          <span>
            {posts
              ? `${posts.length} publicaç${posts!.length > 1 ? 'ões' : 'ão'}`
              : 'Nenhum post'}
          </span>
        </SearchFormHeader>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          disabled={isSubmitting}
        />
      </SearchFormContainer>

      {!!posts && (
        <PostListContainer>
          {posts.map((post) => {
            return <PostCard key={post.number} data={post} />
          })}
        </PostListContainer>
      )}
    </HomeContainer>
  ) : (
    <Loading />
  )
}
