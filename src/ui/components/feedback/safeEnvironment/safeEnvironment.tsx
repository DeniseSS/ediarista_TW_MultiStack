import React from 'react';
import { SafeEnvironmentContainer } from './safeEnvironment.style';
import { Container } from '@material-ui/core';

const SafeEnvironment = () => {
  return (
    <Container>
      <SafeEnvironmentContainer>
        Safe Environment
      </SafeEnvironmentContainer>
    </Container>
  )
}
  

export default SafeEnvironment;