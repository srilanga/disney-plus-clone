import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="/images/detail-soul.jpg" />
        </Background>
        <ImageTitle>
            <img src="/images/detail-soul-title.png" />
        </ImageTitle>
        <SubTitle>
            <p>2020 • 1시간 40분</p>
            <p>가족, 코미디, 판타지, 애니메이션, 음악</p>
        </SubTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GrouptWatchButton>
                <img src="/images/group-icon.png" />
            </GrouptWatchButton>
        </Controls>
        <Description>
            제이미 폭스와 올스타 출연진이 이끄는 웃음 가득하고 가슴 따뜻한 모험 영화. 픽사 ‘소울’의 주인공 조는 시내 최고의 재즈 클럽에서 일생일대의 연주를 하게 됐지만 예기치 못한 사고로 ‘태어나기 전 세상’이란 기상천외한 세계로 떨어진다. 그곳에서 그는 22(티나 페이)와 함께 인생에서 가장 중요한 질문들에 대한 해답을 찾아 나간다.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed; // relative parent
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    max-width: 341px;
    margin-top: 60px;

    img { 
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex; //default flex direction: row
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center; //verically
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: white;

    span {
        font-size: 30px;
    }
`
const GrouptWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: #f9f9f9;
    font-size: 13px;
    min-height: 20px;
    margin: 0px 0px 16px 0px;
    //box-sizing: border-box;

    p {
        text-decoration: none;
        margin: 0;
    }
`

const Description = styled.div`
    color: #f9f9f9;
    line-height: 1.6;
    font-size: 18px;
    margin-top: 16px; //padding-top: 1rem;
    max-width: 7600px;
`