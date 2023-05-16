import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Container from '../components/Container/Container';

const Root = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
