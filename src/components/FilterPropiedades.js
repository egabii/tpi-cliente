import { Form, Button } from 'react-bootstrap';
export default function FilterPropiedades() {
  
  const filtrar = (e) => {
    if (e){
      e.preventDefault();
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={filtrar}>
        <div className="filter-control-box">
          <Form.Label controlId="ubicacion">Localidad</Form.Label><br />
          <Form.Control
            className="form-group-item"
            id="ubicacion"
            as="input"
            type="text"
            placeholder="Localidad, Provincia, ..."
          />
        </div>
        <div className="filter-control-box">
          <Form.Label controlId="vivienda">Tipo de vivienda</Form.Label><br />
          <Form.Control className="form-group-item" as="select" custom id="vivienda">
            <option>Departamento</option>
            <option>Casa</option>
            <option>Chalet</option>
            <option>Local</option>
            <option>Casa con Local</option>
            <option>Cabaña</option>
            <option>Cochera</option>
          </Form.Control>
        </div>
        <div className="filter-control-box">
          <Form.Label controlId="precio">Precio</Form.Label><br />
          <Form.Control className="form-group-item" as="select" custom id="precio" placeholder="Precio">
            <option>$15.000 - $20.000</option>
            <option>$21.000 - $30.000</option>
            <option>$31.000 - $40.000</option>
            <option>$41.000 - $50.000</option>
            <option>$51.000 - $60.000</option>
            <option>mas de $100.000</option>
          </Form.Control>
        </div>
        <div className="filter-control-box">
          <Form.Label controlId="habicationes">Habitaciones</Form.Label><br />
          <Form.Control className="form-group-item" as="select" custom id="habicationes" placeholder="Habitaciones">
            <option>Todo</option>
            <option>+1</option>
            <option>+2</option>
            <option>+3</option>
          </Form.Control>
        </div>
        <div className="filter-control-box">
          <Form.Label controlId="habicationes">Baños</Form.Label><br />
          <Form.Control className="form-group-item" as="select" custom aria-label="Baño" id="banio" placeholder="Baños">
            <option>Todo</option>
            <option>+1</option>
            <option>+2</option>
            <option>+3</option>
          </Form.Control>
        </div>
        <Button variant="primary" type="submit" block className="domus-btn">Buscar</Button>
      </Form>
    </div>
  );
}