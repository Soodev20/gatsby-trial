import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import ProfileImage from 'components/ProfileImage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyle />
      <ProfileImage />
    </Container>
  )
}

export default IndexPage