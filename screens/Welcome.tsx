import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles'

const Welcome = ({navigation}) => {

    return ( 
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Bem vindo!</PageTitle>
                    <SubTitle>Login</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('../assets/img/img1.jpeg')}/>
                        <Line/>
                        <StyledButton onPress={()=>{navigation.navigate('Login')}}>
                            <ButtonText>
                                Desconectar conta
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;