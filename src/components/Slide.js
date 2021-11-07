import React from 'react'

const CarouselSlide = class CarouselSlide extends React.Component {
  render() {
    const { imageSrc, title, subheading } = this.props;

    return (
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: `bottom`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="calligraphed has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                '#8C0303 0.5rem 0.5rem 0px, #F23322 -0.5rem -0.5rem 0px',
              backgroundColor: '#400101',
              color: 'white',
              lineHeight: '1',
              padding: '0.8em',
              borderRadius: '2px'
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                '#8C0303 0.5rem 0px 0px, #F23322 -0.5rem 0px 0px',
              backgroundColor: '#400101',
              color: 'white',
              lineHeight: '1',
              padding: '0.5em',
              marginTop: '1.6em',
              borderRadius: '2px'
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
    )
  }
}

export default CarouselSlide
