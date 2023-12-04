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

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/diego3g.png" alt="" />
        <ProfileInfos>
          <header>
            <h2>Cameron Williamson</h2>
            <a href="">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ProfileFooter>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </ProfileFooterItem>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </ProfileFooterItem>
            <ProfileFooterItem>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </ProfileFooterItem>
          </ProfileFooter>
        </ProfileInfos>
      </ProfileContainer>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <SearchFormHeader>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SearchFormHeader>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>

      <PostListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListContainer>
    </HomeContainer>
  )
}
