import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import qrCode from '../../static/img/grattalu-pdf-code--inverted.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h2 className="calligraphed is-size-1 has-text-white-ter">Le Grattalu</h2>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-8">
                <section className="menu">
                  <ul className="menu-list is-flex is-flex-direction-row is-flex-wrap-nowrap	is-justify-content-center	is-align-content-center	is-align-items-center	">
                    <li class="mt-0">
                      <AniLink cover bg="white" duration={0.5} to="/" className="navbar-item">
                        Accueil
                      </AniLink>
                    </li>
                    <li class="mt-0">
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/menu">
                        Menu
                      </AniLink>
                    </li>
                    <li class="mt-0">
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/photos">
                        Photos
                      </AniLink>
                    </li>
                    <li class="mt-0">
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/contact">
                        Contact
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <div className="social">
                  <a title="Retrouvez le Grattalu sur Facebook" target="_blank" href="https://www.facebook.com/legrattalu/">
                    <img
                      src={facebook}
                      alt="Retrouvez le Grattalu sur Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="Retrouvez le Grattalu sur Instagram" target="_blank" href="https://www.instagram.com/le.grattalu/">
                    <img
                      src={instagram}
                      alt="Retrouvez le Grattalu sur Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
