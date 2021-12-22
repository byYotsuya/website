import NextLink from 'next/link';
import { Text } from '@chakra-ui/react'
import { Card } from './_Cards';
import Link from 'next/link';


export default function AboutCard() {
  return (
    <Card type="aside" headerTitle="About" bgColor="#202225" >
      <Text py="2" color="#eee">
        ¡Hola! Soy Miguel Martínez. Llevo desarrollando web desde hace{" "}
        {new Date().getFullYear() - 2019} años.
      </Text>
      <Text py="2" color="#eee">
        He trabajado en varias proyectos como API&apos;s Market, Gestion de Inventarios y E-commerce.
      </Text>
      <Link href="/p/about-me">
        <a py={4} >
          <Text fontWeight="bold" color="#eee">
            Más sobre mi →
          </Text>
        </a>
      </Link>
    </Card>
  );
};