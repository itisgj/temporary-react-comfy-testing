import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const ErrorPage = () => {

  let history = useHistory()
  return <Wrapper className='page-100'>
    <section>
      <h1>400</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <button className='btn' onClick={()=>history.goBack()}>
      Back
      </button>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
