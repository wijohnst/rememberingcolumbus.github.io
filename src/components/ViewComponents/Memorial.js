import React from 'react'
import styled from 'styled-components'

import SkyArea from '../MemorialComponents/SkyArea';

import SkylineOutline from '../MemorialComponents/skyline.png'
import CardArea from '../MemorialComponents/CardArea';

const Container = styled.div`
  max-height: 85vh;
`
const MemorialWrapper = styled.div`
  background-color: black;
  background-image: url(${SkylineOutline});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: 75vh;
  max-height: 90vh;
`
export default function Memorial() {
  
  return (
    <Container>
      <MemorialWrapper>
        <SkyArea />
      </MemorialWrapper>
      <CardArea />
    </Container>
  )
}


/* MEMORIAL COMPONENT SHOULD

    [ √ ] Import memorialData from MemorialDataContextProvider
    [ √ ] Display cards with memorialized person's data (MemorialCards component)
    [ √ ] Display Columbus Skyline (Skyline Component)
    [ √ ] Allow user to scroll through the cards
    [   ] Animate transition between cards
    [   ] Animate stars being added to night sky between each card
*/