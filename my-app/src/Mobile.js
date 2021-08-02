import React from 'react'
import Project from './Project'

const Mobile = () => {
  return (
    <div className='cards-cont'  style={{overflow: 'scroll'}}>
      <h2 className='MAIN-HEADING'>MOBILE</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'WRAP'
      }}>
      <Project imageUrl='https://camo.githubusercontent.com/28d6a6c5fac5a5369eb5ac2a4dcccd17a39e831865cd151fc058f4b19a939b36/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3832313034363435323135393338313534352f3837303438303432323035383939353830322f53637265656e5f53686f745f323032312d30372d32395f61745f392e33382e32315f504d2e706e67' cardHeading ='favorite burgers'cardBody='hey guys 👋🏼 ... simple mobile app with react native that displays all my favorite burgers with pictures, prices, etc!' cardColor='FF0000' cardDesc='reactNative' href='https://github.com/yefim94/myFavBurgers_ReactNative' />
      <Project imageUrl='https://cdn.discordapp.com/attachments/856195708688007179/871408485252870155/Screen_Shot_2021-08-01_at_11.06.08_AM.png' cardHeading ='todo-app'cardBody='todo list with react.js....design inspired by Microsoft!      ' cardColor='0094FF' cardDesc='react(webApp)' href='https://github.com/yefim94/todo_REACT' />
      </div>
    </div>
  )
}

export default Mobile
