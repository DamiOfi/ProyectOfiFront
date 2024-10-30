import { ContainerHome } from './home.styled';
import Messages from '../Messages/Messages';

const Home = () => {

  return (
    <ContainerHome className='w-full'>
      <Messages></Messages>
    </ContainerHome>
  );
}

export default Home;
