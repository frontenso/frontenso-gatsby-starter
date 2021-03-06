import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from './container';

function SectionExample() {
  return (
    <Container>
      <h1>section</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="Astronaut"
        width={150}
        formats={['avif', 'webp', 'auto']}
      />
    </Container>
  );
}

export default SectionExample;
