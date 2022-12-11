import React, { useEffect } from 'react'
import styled from 'styled-components'
import arrow from '../images/down-arrow.svg'
import Fade from 'react-reveal/Fade';
function Section({title, desc,leftButtonText, rightButtonText, bg_img, arrowButton}) {
    
  return (
    <Wrap bgImage={bg_img}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ItemText>
            </Fade>
        <Buttons>
            <Fade bottom>
             <ButtonGroup>
                <LeftButton>
                    {leftButtonText}
                </LeftButton>
                {
                     rightButtonText != null ? (
                        <RightButton>
                             {rightButtonText}
                        </RightButton>
                    ) : null
                }
                    
            </ButtonGroup>
            </Fade>
           
            {
                arrowButton && 
                <DownArrow src={arrow} />
            }
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    height :100vh;
    width : 100vw;
    
    background-size : cover;
    background-position : center;
    background-repeat :no-repeat;
    display : flex;
    flex-direction  : column;
    align-items : center;
    justify-content : space-between;
    background-image : ${props => `url("${props.bgImage}")`};

`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
    display : flex;
    gap : 1rem;
    padding-bottom : 10vh;
    @media (max-width : 768px) {
        flex-direction : column;
    }
`

const LeftButton = styled.div`
    background-color : rgba(23, 26, 32, 0.8);
    height : 40px;
    width : 256px;
    border-radius : 10px;
    color : white;
    
    display : felx;
    justify-content : center;
    align-items : center;
    text-transform : uppercase;
    font-size : 12px;
    cursor : pointer

`

const RightButton = styled(LeftButton)`
    color : black;
    background-color : white;
`

const DownArrow = styled.img`
    height : 40px;
    overflow-x : hidden;
    animation : animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;

`