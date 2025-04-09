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
    TextLinkContent
} from './../components/styles'

const {brand, darkLight, primary} = Colors;

const SignUp = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return ( 
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Enanpege</PageTitle>
                <SubTitle>Fazer login</SubTitle>

                <Formik
                    initialValues={{fullName: '', email: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}   
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Nome completo"
                            icon ="person"
                            placeholder="Fulano Beltrano Ciclano"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value = {values.fullName}
                        />
                        <MyTextInput
                            label="E-mail"
                            icon ="mail"
                            placeholder="exemplo@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value = {values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput
                            label="Senha"
                            icon ="lock"
                            placeholder="********"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value = {values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput
                            label="Confirmar senha"
                            icon ="lock"
                            placeholder="********"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value = {values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line/>
                        <ExtraView>
                            <ExtraText>Já tem uma conta?</ExtraText>
                            <TextLink>
                                <TextLinkContent> Realizar login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                )}  

                 </Formik>
            </InnerContainer>
        </StyledContainer>
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

export default SignUp;