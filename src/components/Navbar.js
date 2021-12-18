import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <AniLink cover bg="white" duration={0.5} to="/" className="navbar-item calligraphed is-size-3" title="Logo">
              Le Grattalu
            </AniLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered m-l-5-desktop">
              <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/menu">
                MENU
              </AniLink>
              <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/photos">
                PHOTOS
              </AniLink>
              <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/contact">
                CONTACT
              </AniLink>
            </div>
            <div className="navbar-end has-text-centered align-center">
              <a target="_blank" className="navbar-item" title="Retrouvez le Grattalu sur Facebook" href="https://www.facebook.com/legrattalu/">
                <img
                  className="icon"
                  src={facebook}
                  alt="Retrouvez le Grattalu sur Facebook"
                  style={{ width: '1.5em', height: '1.5em' }}
                />
              </a>
              <a target="_blank" className="navbar-item" title="Retrouvez le Grattalu sur Instagram" href="https://www.instagram.com/le.grattalu/">
                <img
                  className="icon"
                  src={instagram}
                  alt="Retrouvez le Grattalu sur Instagram"
                  style={{ width: '1.5em', height: '1.5em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
