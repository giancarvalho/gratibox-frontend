import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import PageContainer from '../components/containers/PageContainer';
import TextContainer from '../components/containers/TextContainer';
import Title from '../components/others/Texts';
import TransparentButton from '../components/buttons/TransparentButton';
import SignButton from '../components/buttons/SignButton';
import Input from '../components/others/Input';
import SignContainer from '../components/containers/SignContainer';
import UserContext from '../contexts/UserContext';
import { storeUser, getStoredUser } from '../utils/storedUser';
import { postUser } from '../services/services';

function SignIn({ sendAlert }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const isRegistered = useQuery().get('registered');
  const storedUser = getStoredUser();

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
      history.push('/planos');
      return;
    }
    if (isRegistered) {
      sendAlert({
        message: 'Tudo certo! Agora é só logar na sua conta.',
        position: '5%',
      });
    }
  }, [sendAlert, isRegistered]);

  function signIn(e) {
    e.preventDefault();
    setDisabled(true);

    postUser({ email, password })
      .then((response) => {
        storeUser(response.data);
        setUser(response.data);
        history.push('/planos');
      })
      .catch((error) => {
        sendAlert({
          message: error.response
            ? error.response?.data
            : 'Nosso server está fora do ar.',
          error: true,
        });

        setDisabled(false);
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
        <form onSubmit={(e) => signIn(e)}>
          <fieldset disabled={disabled}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <SignButton>Login</SignButton>
          </fieldset>
        </form>

        <TransparentButton onClick={() => history.push('/cadastro')}>
          Ainda não sou grato
        </TransparentButton>
      </SignContainer>
    </PageContainer>
  );
}

export default SignIn;
