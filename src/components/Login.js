import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                월 9,900원 멤버십이 필요합니다.
                <br/>*월간 멤버십 12개월 구독료 대비 할인된 가격입니다.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);

    // align contents
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

// Call to Action Box
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column; // top to bottom
    //padding: 17px 0;
    //margin-top: 10px;
    //align-items: center;
`

const CTALogoOne = styled.img`

`

const CTALogoTwo = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;

    }
`

const Description = styled.p`
    color: white;
    letter-spacing: 1.5px;
    font-size: 11px;
    text-align: center;
    line-height: 1.5;
`