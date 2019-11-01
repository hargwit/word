import React from 'react'

import { AboutButton } from './about/about-button'
import { Letters } from './letters/letters'
import { Player } from './player/player'
import { MyWord } from './my-word/my-word'
import { MyWordProvider } from './my-word/my-word-context'
import { FlexBox } from './layout/flex-box'
import { Header } from './layout/header'

const App = () => (
  <FlexBox flexDirection='column'>
    <Header>
      <h1>Word</h1>
      <AboutButton />
    </Header>
    <FlexBox justifyContent='space-around'>
      <Letters />
      <MyWordProvider>
        <Player number={1} />
        <Player number={2} />
        <MyWord />
      </MyWordProvider>
    </FlexBox>
  </FlexBox>
)

export { App }
