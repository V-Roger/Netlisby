import React from 'react'

const CarouselSlide = class CarouselSlide extends React.Component {
  render() {
    const { imageSrc, title } = this.props;

    return (
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `URL(${imageSrc})`,
          backgroundPosition: `bottom`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h1
            className="calligraphed has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                '#630611 0.5rem 0.5rem 0px, #8C0303 -0.5rem -0.5rem 0px',
              backgroundColor: '#400101',
              color: 'white',
              lineHeight: '1',
              padding: '0.8em',
              borderRadius: '2px'
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    )
  }
}

export default CarouselSlide
