import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { ListaNoticias } from './ListaNoticias'

const Formulario = () => {
	return (
		<Container>
			<Form className='my-3'>
				<Form.Group className="d-flex justify-content-center">
					<Form.Label className=''>Buscar por categoria:</Form.Label>
					<Form.Select className=''>
						<option value="science">Ciencia</option>
						<option value="food">Comida</option>
						<option value="sports">Deportes</option>
						<option value="entertainment">Entretenimiento</option>
						<option value="environment">Medio Ambiente</option>
						<option value="world">Mundo</option>
						<option value="business">Negocios</option>
						<option value="health">Salud</option>
						<option value="politics">Política</option>
						<option value="technology">Tecnología</option>
						<option value="top">Top noticias</option>
						<option value="tourism">Turismo</option>
					</Form.Select>
				</Form.Group>
			</Form>
			<ListaNoticias></ListaNoticias>
		</Container>
	)
}

export { Formulario }