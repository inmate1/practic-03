import { Container, CountryList, Heading, Loader, Section } from 'components';
import useFetchCounries from 'hooks/useFetchCounries';

const Home = () => {
  const { countries, isLoading, error } = useFetchCounries();
  return (
    <Section>
      <Container>
        {isLoading && <Loader/>}
        {error && <Heading title="Something went wrong..." bottom />}

        {countries.length > 0 && <CountryList countries={countries}/>}
        
      </Container>
    </Section>
  );
};
export default Home;