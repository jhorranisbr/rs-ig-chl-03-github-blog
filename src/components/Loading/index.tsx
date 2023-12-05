import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faCircleNotch} />
    </LoadingContainer>
  )
}
