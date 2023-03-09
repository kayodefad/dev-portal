import React from 'react'

type MainHeadingProps = {
    children: React.ReactNode
}

const MainHeading = ({children}: MainHeadingProps) => {
  return (
    <h1 className="font-exo font-bold text-3xl mb-20">{children}</h1>
  )
}

export default MainHeading