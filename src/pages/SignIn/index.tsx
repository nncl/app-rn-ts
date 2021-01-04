import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';

import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Faça seu login</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log('Pressed')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
