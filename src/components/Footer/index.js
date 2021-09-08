import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>This Is</FooterLinkTitle>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>A Footer</FooterLinkTitle>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>With Nothing</FooterLinkTitle>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>To See</FooterLinkTitle>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                <FooterLink to='/email'>Email me</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
