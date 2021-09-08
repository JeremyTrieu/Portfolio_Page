import React from 'react';
import { Container, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButton, FormInputMessage } from './EmailMeElements';

import emailjs from 'emailjs-com';

const EmailMe = () => {

    const params = {
        Subject: 'test',
        email: 'abc@gmail.com',
        message: 'test',
    }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_zuey7uu', e.target, `user_K9iTgtPVBExiBwPxCCtlX`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

        alert(`Thank you for your message!`);
    }

    return (
        <>  
            <Container>
                {console.log('checkk')}
                <form onSubmit={sendEmail}>
                <FormWrap>
                    <FormContent>
                    <Icon to='/'>JEREMY THE FRONTFREAK</Icon>
                    <FormLabel htmlFor='for'>Your Email</FormLabel>
                    <FormInput type='email' required name='email'/>
                    <FormLabel htmlFor='for'>Subject</FormLabel>
                    <FormInput type='text' required name='subject'/>
                    <FormLabel htmlFor='for'>Content</FormLabel>
                    <FormInputMessage type='text' required name='message'/>
                    </FormContent>
                    
                    <FormButton>Send</FormButton>

                </FormWrap>
                </form>
            </Container>
        </>
    )
}

export default EmailMe;
;