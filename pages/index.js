import Head from 'next/head';
import Image from 'next/image';
import { styled } from '@stitches/react';
import NavBar from '../components/NavBar';
import DefaultPage from '../components/DefaultPage';

const StyledDiv = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: 20,
  borderRadius: '50%',
});

const StyledImage = styled(Image, {
  borderRadius: '50%',
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cindy Mo</title>
      </Head>

      <main>
        <NavBar/>
        <StyledDiv>
          <div>
            <StyledImage 
              src='/profile.jpg'
              alt='Cindy Mo'
              width={190}
              height={200}
            />
            <DefaultPage/>
          </div>
        </StyledDiv>
      </main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}
