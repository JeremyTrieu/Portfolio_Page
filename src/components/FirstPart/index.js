import React, {useState} from 'react';
import { FirstPartContainer, FirstPartBackground,
VideoBackground, FirstPartContent,
FirstPartH1, FirstPartP, FirstPartBtwnWrapper,
ArrowForward, ArrowRight } from './FirstPartElements';
import { Button } from '../ButtonElement';

import Video from '../../videos/Video.mp4';

const FirstPart = () => {

    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <FirstPartContainer>
            <FirstPartBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />

            </FirstPartBackground>
            <FirstPartContent>
                <FirstPartH1>
                    Welcome to Jeremy's Portfolio
                </FirstPartH1>
                <FirstPartP>
                    Hope you can enjoy your time here
                    knowing more about me and checking out
                    my projects...                
                    <br/>
                    FYI I wrote all the code for this page from scratch...
                </FirstPartP>
                <FirstPartBtwnWrapper>
                    <Button to='/email' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Email me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </FirstPartBtwnWrapper>
            </FirstPartContent>
        </FirstPartContainer>
    )
};

export default FirstPart;