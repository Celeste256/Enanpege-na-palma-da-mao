import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';
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
    RightIcon
} from './../components/styles'

const Login = () => {
    return ( 
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.jpeg')}/>
                <PageTitle>Enanpege</PageTitle>
                <SubTitle>Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}   
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea></StyledFormArea>
                )}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}


// minuto 25:06 do video
const MyTextInput = ({label, icon, ...props}) => {
    return(
        <View>

        </View>
    )
}

export default Login 