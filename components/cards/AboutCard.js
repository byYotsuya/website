import NextLink from 'next/link';
import { Text } from '@chakra-ui/react'
import { Card } from './_Cards';
import Link from 'next/link';


export default function AboutCard() {
  return (
    <Card type="aside" headerTitle="About" bgColor="#fbd065">
      <Text py="2">
        ¡Hola! Soy Miguel Martínez. Llevo desarrollando web desde hace{" "}
        {new Date().getFullYear() - 2019} años.
      </Text>
      <Text py="2">
        He trabajado en varias proyectos como API's Market, Gestion de Inventarios y E-commerce.
      </Text>
      <NextLink href="/p/sobre-mi">
        <Link href="/" py={4} >
          <Text fontWeight="bold" color="#202225">
            Más sobre mi →
          </Text>
        </Link>
      </NextLink>
    </Card>
  );
};