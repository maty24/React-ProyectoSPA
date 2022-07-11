import React from 'react'
import { HeroList } from '../components'

export const DcPage = () => {
  return (
    <div>
      <h1>DC Comic</h1>
      <hr />
      <HeroList publisher='DC Comics'/>
    </div>
  )
}
