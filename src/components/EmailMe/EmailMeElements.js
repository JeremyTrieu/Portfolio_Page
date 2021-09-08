import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 700px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(161, 88, 3, 100) 0%,
        rgba(250, 192, 65, 100) 100%
    );
`;

export const FormWrap = styled.div`
        position: absolute;
        margin-top: 2%;
        margin-left: 10%;
        height: 90%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #010606;
        border-radius: 20px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        @media screen and (max-width: 400px) {
            height: 80%;
        }
`;

export const Icon = styled(Link)`
        font-family: 'trialFont';
        margin-left: 10%;
        marign-top: 1%;
        text-decoration: none;
        color: #fac041;
        font-weight: 700;
        font-size: 40px;

        @media screen and (max-width: 480px) {
            margin-left: 16px;
            margin-top: 20px;
        }
`;

export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            padding: 10px;
        }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    
    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    font-family: 'trialFont3';
    margin-bottom: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-left: 10%;
    margin-bottom: 8px;
    font-size: 17px;
    color: #fff;
    font-family: 'trialFont3';
`;

export const FormInput = styled.input`
    margin-left: 10%;
    width: 80%;
    padding: 1vh 1vh;
    margin-bottom: 3vh;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    font-family: 'trialFont2';
`;

export const FormInputMessage = styled.textarea`
    margin-left: 10%;
    width: 80%;
    height: 35vh;
    margin-bottom: 1%;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    font-family: 'trialFont2';
    overflow-y: scroll;
`;

export const FormButton = styled.button`
    background: #fac041;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #010606;
    font-size: 20px;
    cursor: pointer;
    width: 20%;
    margin-bottom: 3%;
    margin-left: 40%;
    font-family: 'trialFont3';
    text-decoration: none;
    text-align: center;

    &:hover {
        background: #fff;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;