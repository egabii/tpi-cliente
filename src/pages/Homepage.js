import { Row, Container, Col, Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CardPropiedad from '../components/CardPropiedad';
import propiedades from '../models/propiedades';
import './homepage.css';
import {Link} from 'react-router-dom'
export default function Homepage(){
  const history = useHistory();
  const buscar = (e) => {
    if (e) {
      e.preventDefault();
    }
    history.push('/catalogo');
  }
  return (
    <>
    <div className="bg-home-image">
      <section className="jumbotron text-center">
        <h1>Todos tenemos un sitio</h1>
        <p>Encuentra tu casa de alquiler o compra</p>
        <Form onSubmit={buscar}>
          <Form.Row className="align-items-center">
            <Col sm={12} className="my-1 justify-content-center">
              <div className="form-group-start">
                <Form.Check
                  type="radio"
                  className="mb-2 mr-sm-2 label-checked"
                  name="contrato"
                  checked
                  id="alquiler"
                  label="Alquilar"
                  value="alquiler"
                />
                <Form.Check
                  type="radio"
                  className="mb-2 mr-sm-2 label-checked"
                  name="contrato"
                  id="comprar"
                  label="Compra"
                  value="comprar"
                />
              </div>
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center">
            <Col sm={12} className="my-1  justify-content-center">
              <div className="form-group-center">
              <Form.Control className="form-group-item" as="select" custom aria-label="Tipo de inmueble" id="inmueble">
                <option>Departamento</option>
                <option>Casa</option>
                <option>Chalet</option>
                <option>Local</option>
                <option>Casa con Local</option>
                <option>Cabaña</option>
                <option>Cochera</option>
              </Form.Control>
              <Form.Control 
                className="form-group-item"
                id="ubicacion"
                as="input" 
                type="text"  
                aria-label="Ubicacion" 
                placeholder="Localidad, Provincia, ..." 
              />
              <Button variant="primary" type="submit" className="domus-btn">
                Buscar
              </Button>
              </div>
            </Col>
          </Form.Row>
        </Form>
      </section>
    </div>
    <Container>
      <Row>
        <Col sm={12}>
          <h2>Los mas destacados</h2>
          <div className="card-box">
          { propiedades.map(propiedad => <CardPropiedad key={propiedad.id} propiedad={propiedad} />) }
          </div>
        </Col>
      </Row>
    </Container>
    </>

  )
}