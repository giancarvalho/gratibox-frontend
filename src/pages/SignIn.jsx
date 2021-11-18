import React, { useState } from 'react';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import Title from '../components/others/Texts';
import TransparentButton from '../components/buttons/TransparentButton';
import SignButton from '../components/buttons/SignButton';
import Input from '../components/others/Input';
import SignContainer from '../components/containers/SignContainer';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageContainer>
      <SignContainer>
        <TextContainer>
          <Title>
            <span className="semibold">Bem vindo ao</span> GratiBox
          </Title>
        </TextContainer>
        <form>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SignButton>Login</SignButton>
        </form>

        <TransparentButton>Ainda não sou grato</TransparentButton>
      </SignContainer>
    </PageContainer>
  );
}

export default SignIn;
