import React from 'react'

const Footer = ({ lenght }) => {
    
  return (
    <footer className='bg-blue-600 text-white text-center'>
        <p className='text-2xl '>{lenght} List {lenght > 1 ? 'items' : 'item'}</p>  

    </footer>
  )
}

export default Footer 