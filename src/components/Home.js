import React from 'react'
// styled components allow you to use css in the current file w/o importing a css file
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title='Model S' description='Order Online for Touchless Delivery' backgroundImg='model-s.jpg' leftBtnText='Custom order' rightBtnText='Existing Inventory'
             />
            <Section title='Model Y' description='Order Online for Touchless Delivery' backgroundImg='model-y.jpg' leftBtnText='Custom order' rightBtnText='Existing Inventory'
             />
            <Section title='Model 3' description='Order Online for Touchless Delivery' backgroundImg='model-3.jpg' leftBtnText='Custom order' rightBtnText='Existing Inventory'
             />
            <Section title='Model X' description='Order Online for Touchless Delivery' backgroundImg='model-x.jpg' leftBtnText='Custom order' rightBtnText='Existing Inventory'
             />
            <Section title='Solar Panels' description='Lowest Cost Solar Panels in America' backgroundImg='solar-panel.jpg' leftBtnText='Order Now' rightBtnText='Learn More'
             />
            <Section title='Solar Roof' description='Produce Clean Energy From Your Roof' backgroundImg='solar-roof.jpg' leftBtnText='Order Now' rightBtnText='Learn More'
             />
            <Section title='Accessories' description='' backgroundImg='accessories.jpg' leftBtnText='Shop Now' rightBtnText=''
             />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
