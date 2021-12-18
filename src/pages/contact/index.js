import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section container" style={{ minHeight: '60vh', marginTop: '80px' }}>
          <div className="columns">
            <div className="column is-half has-background-black">
              <figure className="image is-square">
                <iframe
                  className="has-ratio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.669678339058!2d6.898338815973391!3d45.456312141990175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478974b161379577%3A0x3f967e7601843513!2sRestaurant%20Le%20Grattalu!5e0!3m2!1sen!2sfr!4v1636562248583!5m2!1sen!2sfr"
                  width="580"
                  height="580"
                  allowFullScreen
                  loading="lazy"
                  style={{
                    borderRadius: '2px',
                  }}
                />
              </figure>
            </div>
            <div className="column has-text-centered p-4">
              <p className="calligraphed is-size-3">Le Grattalu</p> 
              <p>Place des curlings</p>
              <p>73320 TIGNES</p>
              <p><b>04 79 06 30 78</b></p>
              </div>
            </div>
        </section>
      </Layout>
    )
  }
}
