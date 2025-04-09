import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'
import { View } from 'react-native';

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

const {brand, darkLight, primary} = Colors;

const Welcome = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return ( 
        <>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Enanpege</PageTitle>
                <SubTitle>Login</SubTitle>

                <WelcomeContainer>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/logo1.png')}/>
                        <Line/>
                        <StyledButton onPress={()=>{}}>
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


// minuto 25:06 do video
const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Welcome;