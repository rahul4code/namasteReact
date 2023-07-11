import React from 'react'

const noOfCard=Array(12).fill(null)

const ContainerShimmer = () => {
  return (
    <div className="grid md:grid-cols-4 gap-10 mx-5">
        {noOfCard.map(item=> <CardShimmer />)}
    </div>
  )
}

export default ContainerShimmer