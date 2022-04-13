import NextLink from 'next/link';
import { Card } from './_Cards';
import Link from 'next/link';


export default function AboutCard() {
  return (
    <Card type="aside" headerTitle="About" bgColor="#202225" >
      <p className='py-2 text-gray-300'>
        ¡Hola! Soy Miguel Martínez. Llevo desarrollando web desde hace{" "}
        {new Date().getFullYear() - 2019} años.
      </p>
      <p className='py-2 text-gray-300'>
        He trabajado en varias proyectos como API&apos;s Market, Gestion de Inventarios y E-commerce.
      </p>
      <Link href="/p/about-me">
        <a py={4} >
          <p className='font-bold text-gray-300'>
            Más sobre mi →
          </p>
        </a>
      </Link>
    </Card>
  );
};