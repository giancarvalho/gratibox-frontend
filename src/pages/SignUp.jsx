import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import Title from '../components/others/Texts';
import TransparentButton from '../components/buttons/TransparentButton';
import SignButton from '../components/buttons/SignButton';
import Input from '../components/others/Input';
import SignContainer from '../components/containers/SignContainer';

function SignUp() {
  const [newUserData, setNewUserData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const history = useHistory();

  return (
    <PageContainer>
      <SignContainer>
        <TextContainer>
          <Title>
            <span className="semibold">Bem vindo ao</span> GratiBox
          </Title>
        </TextContainer>
        <form>
          <fieldset>
            <Input
              placeholder="Nome"
              value={newUserData.name}
              onChange={(e) =>
                setNewUserData({ ...newUserData, name: e.target.value })
              }
              required
            />
            <Input
              placeholder="Email"
              type="email"
              value={newUserData.email}
              onChange={(e) =>
                setNewUserData({ ...newUserData, email: e.target.value })
              }
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={newUserData.password}
              onChange={(e) =>
                setNewUserData({ ...newUserData, password: e.target.value })
              }
              required
            />
            <Input
              placeholder="Confirmar senha"
              value={newUserData.confirmPassword}
              onChange={(e) =>
                setNewUserData({
                  ...newUserData,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
            <SignButton margin="25px 0 10px 0 ">Login</SignButton>
          </fieldset>
        </form>

        <TransparentButton onClick={() => history.push('/sign-in')}>
          Ainda não sou grato
        </TransparentButton>
      </SignContainer>
    </PageContainer>
  );
}

export default SignUp;
