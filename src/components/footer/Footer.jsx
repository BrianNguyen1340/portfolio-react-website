import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Sweet Candy</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#porfolio' className='footer__link'>
              Projects
            </a>
          </li>

          <li>
            <a href='#testimonial' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.facebook.com/giabao.nguyenha.1340/'
            rel='noreferrer'
            className='home__socia-link'
            target='_blank'
          >
            <i className='uil uil-facebook-f color-black'></i>
          </a>
          <a
            href='https://x.com/BNguyen22770'
            rel='noreferrer'
            className='home__social-link'
            target='_blank'
          >
            <i className='uil uil-twitter-alt color-black'></i>
          </a>
          <a
            href='https://github.com/BrianNguyen1340'
            rel='noreferrer'
            className='home__social-link'
            target='_blank'
          >
            <i className='uil uil-github-alt color-black'></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; Crypticalcoder. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
