import React from 'react'
import { CardShimmer } from './CardShimmer'

const noOfCard=Array(12).fill(null)

const ContainerShimmer = () => {
  return (
    <div className="grid md:grid-cols-4 gap-10 mx-5">
        {noOfCard.map((item, index)=> <CardShimmer key={index}/>)}
    </div>
  )
}

export default ContainerShimmer