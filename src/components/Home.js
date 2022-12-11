import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import model_3 from '../images/model-s.jpg'
import model_x from '../images/model-x.jpg'
import model_y from '../images/model-y.jpg'
import model_s from '../images/model-s.jpg'
import solarpanel from '../images/solar-panel.jpg'
import sunroof from '../images/solar-roof.jpg'
import accessories from '../images/accessories.jpg'

function Home() {
  return (
    <Container>
      <Section title="Model 3" desc="Schedule a Test Drive" leftButtonText="Custom Order" rightButtonText="Existing Inventory" bg_img={model_3} arrowButton={true} />
      <Section title="Model-X" desc="Schedule a Test Drive" leftButtonText="Custom Order" rightButtonText="Existing Inventory" bg_img={model_x} arrowButton={false} />
      <Section title="Model-Y" desc="Schedule a Test drive" leftButtonText="Custom Order" rightButtonText="Existing Inventory" bg_img={model_y} arrowButton={false}/>
      <Section title="Model-s" desc="Schedule a Test drive" leftButtonText="Custom Order" rightButtonText="Existing Inventory" bg_img={model_s} arrowButton={false}/>
      <Section title="Solar Panels" desc="Lower Cost Solar Panels in America" leftButtonText="Order Now" rightButtonText="Learn More" bg_img={solarpanel} arrowButton={false}/>
      <Section title="Solar Roof" desc="Produce Clean Energy From Your Roof" leftButtonText="Order Now" rightButtonText="Learn More" bg_img={sunroof} arrowButton={false}/>
      <Section title="Accessories" desc="" leftButtonText="Shop Now" rightButtonText= {null} bg_img={accessories} />
    </Container>
  )
}

export default Home

const Container = styled.div`
    
`
