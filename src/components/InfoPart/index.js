import React from 'react';
import {Button} from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoPartElements';

const InfoPart = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, 
    buttonLabel, img, alt, primary, dark, dark2, buttonLink, logoList2}) => {

    
    /*const contactMap = new Map();
    for(let i = 0; i < logoList.length; i++){
        contactMap.set(logoList[i], description[i]);
    };*/
            
    return (
        <>
            <InfoContainer lightBg={lightBg} id ={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                {logoList2.map(e => <div div style = {{display: 'inline-block'}}><img style= {{width: '3.5vh', float: 'left'}} src = {e[0]} /><p style={{fontFamily: 'trialFont2', color: '#010606', fontSize: '18px', float: 'left', marginLeft: '1vh'}}>{e[1]}</p></div>)}
                                <Subtitle darkText={darkText}>{description.map(e => (<li>{e}</li>))}</Subtitle>
                                
                                <BtnWrap>
                                    
                                    <Button as="a" href={buttonLink}  style={{fontFamily: 'trialFont3'}}
                                    smooth = {true}
                                    duration={10000}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}
                                    </Button>
                                    
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src= {img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>       
        </>
    )
};

export default InfoPart;
;