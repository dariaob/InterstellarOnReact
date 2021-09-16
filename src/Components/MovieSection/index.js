import React, {useState} from "react";
import {MovieContainer, MovieBg, VideoBg, MovieBtnWrapper, ArrowRight, ArrowForward, MovieContent, MovieH3, MovieP, MoveH1} from './MovieSection'
import Video from '../../Videos/video4.mp4'
import {Button} from "../ButtonElements";

const MovieSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
      setHover(!hover);
    }
    
  return (
      <MovieContainer>
          <MovieBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </MovieBg>
          <MovieContent>
              <MoveH1>Интерстеллар</MoveH1>
              <MovieH3>Interstellar</MovieH3>
              <MovieP>
                  Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису,
                  коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет
                  области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения
                  для космических путешествий человека и найти планету с подходящими для человечества условиями.
              </MovieP>
              <MovieBtnWrapper>
                  <Button to='trailer' onMouseEnter = {onHover} onMouseLeave = {onHover} primary='true' >Посмотреть трейлер {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
              </MovieBtnWrapper>
          </MovieContent>
      </MovieContainer>
  )
}

export default MovieSection;