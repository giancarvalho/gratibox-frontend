import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import TransparentButton from '../components/buttons/TransparentButton';
import SignButton from '../components/buttons/SignButton';
import Input from '../components/others/Input';
import SignContainer from '../components/containers/SignContainer';
import { Title } from '../components/others/texts';
import areInputsValid from '../validations/signUp';
import { postNewUser } from '../services/services';

function SignUp({ sendAlert }) {
  const [newUserData, setNewUserData] = useState({
    name: '',
    password: '',
    email: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function signUp(e) {
    e.preventDefault();
    setDisabled(true);

    if (areInputsValid({ newUserData, confirmPassword, sendAlert })) {
      setDisabled(false);

      return;
    }

    postNewUser(newUserData)
      .then(() => history.push('/login?registered=true'))
      .catch(() => {
        setDisabled(false);
        sendAlert({
          message:
            'Não foi possível criar sua conta. Tente novamente mais tarde.',
          error: true,
          position: '5%',
        });
      });
  }

  return (
    <PageContainer>
      <SignContainer>
        <TextContainer>
          <Title>
            <span className="semibold">Bem vindo ao</span> GratiBox
          </Title>
        </TextContainer>
        <form onSubmit={signUp}>
          <fieldset disabled={disabled}>
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
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <SignButton margin="25px 0 10px 0 ">Cadastrar</SignButton>
          </fieldset>
        </form>

        <TransparentButton onClick={() => history.push('/login')}>
          Já sou grato
        </TransparentButton>
      </SignContainer>
    </PageContainer>
  );
}

export default SignUp;
