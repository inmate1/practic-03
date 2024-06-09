import { Container, CountryInfo, GoBackBtn, Heading, Loader, Section } from 'components';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { countryId } = useParams()
  const location = useLocation()
  
  const goBack = useRef(location?.state ?? '/')

  useEffect(() => {
     const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);
 
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>
          Back to countries
        </GoBackBtn>
         {isLoading && <Loader/>}
        {error && <Heading title="Something went wrong..." bottom />}
        {country && <CountryInfo {...country} />}
        
      </Container>
    </Section>
  );
};
export default Country;