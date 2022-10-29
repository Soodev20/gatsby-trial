import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 300px;
  margin-left: 10%;
`

const SubTitle = styled.div`
  font-size: 20px;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
`

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
          <ProfileImage />
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm a junior frontend developer.</Title>
      </Wrapper>
    </Background>
  )
}

export default Introduction