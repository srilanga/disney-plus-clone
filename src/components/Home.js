import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px); // 100 vertical height = full 
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0; // 0px from the top
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; // under the other home contents
    }

`