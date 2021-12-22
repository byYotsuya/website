import { Fragment } from "react";
import { Box } from '@chakra-ui/layout'

import { Heading } from '@chakra-ui/react'

export const Card = ({
  children,
  type = "aside",
  bgColor = "white",
  headerColor = "secondary.900",
  headerTitle,
}) => {
  const CardContent = () => (
    <Fragment>
      <Heading as="h4" color={headerColor}>
        {headerTitle}
      </Heading>
      <section>{children}</section>
    </Fragment>
  );

  const AsideCard = ({ children }) => (
    <Box 
      bg={bgColor}
      
      mt={[4, 4, 4, 0]}
      width={[
        '100%', // 48em-62em
        '100%', // 30em-48em
        '100%', 
        '30%', // 62em+
      ]}
      height="100%"
      color="#fbd065"
      borderRadius={["none", "lg"]}
      p={[4, 4, 8, 16]}>
      {children}
      <CardContent />
    </Box>
  );

  const HomeCard = ({ children }) => (
    <Box
      bg={bgColor}
      borderRadius={["none", "lg"]}
      p={[4, 4, 8, 16]}
      my={4}
      mx={[0, 0, 0, 6, 8]}
      width="100%"
    >
      {children}
      <CardContent />
    </Box>
  );

  const LandingCard = ({ children }) => (
    <Box
      bg={bgColor}
      borderRadius={["none", "lg"]}
      p={[4, 4, 8, 16]}
      my={4}
      mx={[0, 0, "auto"]}
      mb={16}
      width={["100%", "100%", "600px"]}
    >
      {children}
      <CardContent />
    </Box>
  );

  if (type === "aside") return <AsideCard />;
  if (type === "home") return <HomeCard />;
  if (type === "landing") return <LandingCard />;
};