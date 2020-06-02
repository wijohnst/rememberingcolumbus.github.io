import React, { useContext } from 'react'
import styled from 'styled-components'

import MemorialContext from './MemorialContext'
import MemorialCard from './MemorialCard';

const CardAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function CardArea() {

  const {data, nav, stars} = useContext(MemorialContext);
  
  const { target } = nav;

  return(
  <CardAreaWrapper>
    <MemorialCard data={data.value[target]} nav={nav} stars={stars}/>
  </CardAreaWrapper>
  )
  
  
}
