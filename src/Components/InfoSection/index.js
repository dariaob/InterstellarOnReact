import React from 'react';
import {Button} from "../ButtonElements";
import {
    BtnWrap,
    Comlumn1,
    Comlumn2,
    Heading, Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper, Subtitle,
    TextWrapper,
    TopLine
} from "./InfoElements";

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2  }) => {
    return(
        <>
            <InfoContainer lighBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Comlumn1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth = {true}
                                    duration={500}
                                    spy={true}
                                    exat='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}

                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Comlumn1>
                        <Comlumn2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Comlumn2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
export default InfoSection;