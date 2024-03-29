import React from 'react'
import styled from 'styled-components'

export default function Page() {
  return (
    <Wrapper>
      <h1>User</h1>
    </Wrapper>
  )
}

Page.getInitialProps = function() {
  return {}
}

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`
