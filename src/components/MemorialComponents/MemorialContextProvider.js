import React, { useState } from 'react'
import MemorialContext from './MemorialContext';

import { getMemorialData } from '../../utils/getMemorialData'

export default function AppContextProvider(props) {

  const [memorialData] = useState(() => getMemorialData());

  //Used to as index for displaying memorial data @ memorialCard
  const [memorialTarget, setMemorialTarget] = useState(0); 

  //starsArr is an array that is used to display stars in the sky, each representing a person who has passed; an element is added to the array for each card that the user views
  const [starsArr, setStarsArr] = useState([]);

  return (
    <MemorialContext.Provider value={{
      data : {value: memorialData},
      nav : {target : memorialTarget, controller: setMemorialTarget},
      stars : {starsArr: starsArr, setStarsArr: setStarsArr}
    }
    }>
      
      {props.children}
    </MemorialContext.Provider>
  )
}
