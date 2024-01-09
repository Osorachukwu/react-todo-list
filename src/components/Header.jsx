import React from 'react'

const Header = ({title }) => {
  return (
    <header className='bg-blue-600 text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

//☝Default props allow us to set VALUES FOR THE PROPS EXPECTED in the component so that if those are not provided then the default values will take precdedence. In the example above, if the value for title prop is not set that default prop there will be rendered

export default Header

