import React from 'react';
import { Container, FormButton } from './EmailMeElements';

const SuccessfullySent = () => {
    return (
        <>
            <Container>
                <h1 style = {{marginTop: '10%', textAlign: 'center', fontFamily:'trialFont3', marginBottom:'3%'}}>Your message was successfully sent to my email!</h1>
                <FormButton as='a' href='/' style={{padding: '2vh'}}>Go back to Home Page</FormButton>
            </Container>
        </>
    )
}

export default SuccessfullySent;
