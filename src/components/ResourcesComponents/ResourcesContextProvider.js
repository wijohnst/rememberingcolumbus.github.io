import React, { useState } from 'react'
import ResourcesContext from './ResourcesContext'

export default function AppContextProvider(props) {
  
  const [funeralHomes] = useState([
    {
      name: 'Caliman', 
      phone: '(614) 338-1965', 
      link: 'https://www.calimanfuneralservices.com/'
    },
    {
      name: 'Cook & Son-Pallay', 
      phone: '(614) 444-7861', 
      link: 'https://www.cookandsonpallay.com/' 
    },
    {
      name: 'Cotner', 
      phone: '(614) 866-6381', 
      link: 'http://www.cotnerfuneralhome.com/' 
    },
    {
      name: 'Day', 
      phone: '(614) 532-5012', 
      link: 'http://www.dayfuneralservice.com/' 
    },
    {
      name: 'Deyo Davis', 
      phone: '(614) 486-2445', 
      link: 'http://www.deyodavis.com/' 
    },
    {
      name: 'Diehl-Whittaker', 
      phone: '(614) 258-9549', 
      link: 'https://www.diehl-whittaker.com/' 
    },
    {
      name: 'Dwayne R. Spence', 
      phone: '(614) 837-7126', 
      link: 'https://www.spencefuneralhome.com/' 
    },
    {
      name: 'Edwards', 
      phone: '(614) 444-3200', 
      link: 'http://www.edwardsfuneralservice.com/' 
    },
    {
      name: 'Egan-Ryan', 
      phone: '(614) 221-6665', 
      link: 'https://www.egan-ryan.com/' 
    },
    {
      name: 'Epstein', 
      phone: '(614) 235-3232', 
      link: 'http://www.epsteinmemorial.com/' 
    },
    {
      name: 'Evans', 
      phone: '(614) 237-2553', 
      link: 'http://www.evansfuneralhome.net/' 
    },
    {
      name: 'Furguson', 
      phone: '(614) 873-8013', 
      link: 'http://www.evansfuneralhome.net/' 
    },
    {
      name: 'Jerry Spears', 
      phone: '(614) 274-5092', 
      link: 'https://www.jerryspearsfuneralhome.com/' 
    },
    {
      name: 'John Quint Treboni', 
      phone: '(614) 294-4416', 
      link: 'https://www.johnquint.com/' 
    },
    {
      name: 'Maeder-Quint-Tiberi', 
      phone: '(614) 444-1185', 
      link: 'http://www.maederquinttiberi.com/' 
    },
    {
      name: 'Marlan J. Gary', 
      phone: '(614) 267-8310', 
      link: 'http://www.thechapelofpeace.com/' 
    },
    {
      name: 'Moreland', 
      phone: '(614) 882-2197', 
      link: 'http://www.morelandfuneralhome.com//index.php?P=13' 
    },
    {
      name: 'Myers-Woodyard', 
      phone: '(614) 836-5643', 
      link: 'https://www.orwoodyard.com' 
    },
    {
      name: 'Newcomer', 
      phone: '(614) 818-1188', 
      link: 'http://www.newcomercolumbus.com/' 
    },
    {
      name: 'Ohio Cremation & Memorial Society', 
      phone: '(614) 818-1188', 
      link: 'http://www.ohiocremation.org/' 
    },
    {
      name: 'O.R. Woodyard', 
      phone: '(614) 221-7746', 
      link: 'https://www.orwoodyard.com/' 
    },
    {
      name: `O'Shaughnessy`, 
      phone: '(614) 221-2311', 
      link: 'https://www.oshaughnessycompany.com/' 
    },
    {
      name: `Pfeifer`, 
      phone: '(614) 755-9500', 
      link: 'http://www.pfeiferfuneral.com/' 
    },
    {
      name: `Rutherford`, 
      phone: '(614) 885-4006', 
      link: 'https://www.rutherfordfuneralhomes.com/' 
    },
    {
      name: `Schoediner`, 
      phone: '(614) 224-6105', 
      link: 'https://www.schoedinger.com/' 
    },
    {
      name: `Shaw-Davis`, 
      phone: '(614) 299-4155', 
      link: 'https://www.shaw-davis.com/' 
    },
    {
      name: `Smoot`, 
      phone: '(614) 444-1463', 
      link: 'http://www.smootfuneral.com/' 
    },
    {
      name: `Spence Miller`, 
      phone: '(614) 875-4878', 
      link: 'http://www.spencemillerfuneralhome.com/' 
    },
    {
      name: 'Tidd', 
      phone: '(614) 876-1722', 
      link: 'http://www.tiddfuneralservice.com/'
    },
    {
      name: 'Wyane T Lee', 
      phone: '(614) 253-7944', 
      link: 'https://www.waynetleefuneralservice.com'
    },
    {
      name: `White's`, 
      phone: '(614) 947-1123', 
      link: 'http://www.whitesfh867.com/'
    }
  ]);

  return (
    <ResourcesContext.Provider value={ {homesList : funeralHomes}}>
      {props.children}
    </ResourcesContext.Provider>
  )
}

//{name: , phone: , link: }