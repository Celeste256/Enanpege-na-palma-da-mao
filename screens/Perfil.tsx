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
    PerfilContainer,
    WelcomeImage,
    Avatar
} from '../components/styles'

const Perfil = ({navigation}) => {

    return ( 
        <>
            <StatusBar style="light"/>
            <InnerContainer style={{backgroundColor: '#fff'}}>
                <PerfilContainer>
                    <PageTitle perfil={true}>Perfil</PageTitle>
                    <SubTitle>Nome da conta</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('../assets/img/logo1.png')}/>
                        <Line/>
                        <StyledButton onPress={()=>{navigation.navigate('Login')}}>
                            <ButtonText>
                                Desconectar conta
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </PerfilContainer>
            </InnerContainer>
        </>
    );
}

export default Perfil;