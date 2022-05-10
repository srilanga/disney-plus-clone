import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="/images/content-jungle.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-moon.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-22.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-jungle.jpg" />
            </Wrap>

            <Wrap>
                <img src="/images/content-jungle.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-moon.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-22.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/content-jungle.jpg" />
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    padding: 0 0 10px;

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repenpm install at(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    border: 4px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    //transition-duration: 300ms;
    //transition-property: transform, box-shadow;
    //transition-timing-function: ease-out;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`