import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.facebook.com/'
        rel='noreferrer'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-facebook-f'></i>
      </a>
      <a
        href='https://twitter.com/'
        rel='noreferrer'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-twitter-alt'></i>
      </a>
      <a
        href='https://github.com/'
        rel='noreferrer'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  )
}

export default Social
