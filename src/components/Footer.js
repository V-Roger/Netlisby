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
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <AniLink cover bg="white" duration={0.5} to="/" className="navbar-item">
                        Accueil
                      </AniLink>
                    </li>
                    <li>
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/menu">
                        Menu
                      </AniLink>
                    </li>
                    <li>
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/photos">
                        Photos
                      </AniLink>
                    </li>
                    <li>
                      <AniLink cover bg="white" duration={0.5} className="navbar-item" to="/contact">
                        Contact
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              </div>
              <div className="column is-4">
                <div className="social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
                <div className="section">
                  <a href="https://hopeful-yonath-0869ae.netlify.app/img/neo40-le-grattalu-2017.pdf" alt="le menu du Grattalu"><img src={qrCode} alt="menu" style={{ maxWidth: '192px' }}/></a>
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
