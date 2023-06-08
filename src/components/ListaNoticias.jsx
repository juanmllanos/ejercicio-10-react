import React from 'react';
import { Container} from 'react-bootstrap';
import { Noticia } from './Noticia';

const ListaNoticias = ({ noticias }) => {
	return (
		<Container className="border d-flex">
			{/* {noticias.length === 0
					? (<p>No hay noticias</p>)
					: (noticias.map((noticia) => (
						<Noticia>
							key={noticia.title}
							imagen={noticia.image_url}
							titulo={noticia.title}
							descripcion={noticia.description}
							link={noticia.link}
						</Noticia>))
					)
				} */}
			<Noticia></Noticia>
			<Noticia></Noticia>
			<Noticia></Noticia>
		</Container>
	);
};

export { ListaNoticias }