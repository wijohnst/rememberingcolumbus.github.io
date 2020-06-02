import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const MemorialCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`
const MemorialCardDisplay = styled.div`
  border: solid thin black;
  width: 75%;
  padding: 10px;
`

export default function MemorialCard(props) {
  
  const {nav : {target,controller}} = props;
  
  const {stars : {starsArr, setStarsArr}} = props;
  function handleClick(){

    controller(target + 1);
    setStarsArr([...starsArr,target])
    
    
  }


  const {
          data :
                { 
                  firstName, 
                  lastName, 
                  dateOfBirth, 
                  dateOfDeath, 
                  placeOfBirth, 
                  placeOfDeath,
                  message
                }
              } = props; 

  return (
    <MemorialCardWrapper>
      <MemorialCardDisplay className="card">
        <h3>In memory of {firstName} {lastName} </h3>
        <h4><i>{message}</i></h4>
        <h5>Born {moment(dateOfBirth).format('MM/DD/YYYY')} in {placeOfBirth}</h5>
        <h5>Died {moment(dateOfDeath).format('MM/DD/YYYY')} in {placeOfDeath}</h5>
      </MemorialCardDisplay>
    <button onClick={handleClick}>Continue</button>
    </MemorialCardWrapper>
  )
}
