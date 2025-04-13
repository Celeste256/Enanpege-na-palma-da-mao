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

const Agenda = ({navigation}) => {

    return (
        <StyledContainer>
            <PageTitle>Agenda</PageTitle>
        </StyledContainer>
        
    );
}

export default Agenda;