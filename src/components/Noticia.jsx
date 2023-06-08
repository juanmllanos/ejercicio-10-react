import React from 'react';
import { Card } from 'react-bootstrap';

function Noticia() {
	return (
		<Card className='p-3 m-3'>
			<Card.Img variant="top" /* src={} */ className='m-3' />
			<Card.Title className='m-3'>Titulo Noticia</Card.Title>
			<Card.Text className="text-truncate m-3">Descripcion Noticia askdjhflkajsdhflkjashdflajshdlfkjhasd Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et tempora magnam, aliquam, commodi eaque labore error voluptatum ratione sequi cum pariatur corrupti ab repellendus perspiciatis ea velit, enim earum.</Card.Text>
			<a className="btn btn-primary w-lg-25 w-md-50text-center m-auto" /* href={} */ target="_blank">
				Ver noticia completa
			</a>
		</Card>
	);
}

export { Noticia }