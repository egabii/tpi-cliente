import { Container, Row, Col } from 'react-bootstrap';
import gerente from '../assets/gerente.jpg';
import comercio from '../assets/jefa_comercio.jpg';
import admin from '../assets/jefe_admin.jpg';
export default function Acerca() {

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <section className="about-page">
            <article className="history">
              <h1>Historia</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ornare neque, consequat consectetur massa. Nam imperdiet bibendum nisi, eu placerat orci blandit eu. Morbi rutrum quam in sodales vestibulum. Maecenas non orci nisl. Praesent eget pharetra ligula. Proin blandit ultricies diam. Ut non condimentum arcu, id pharetra est. Proin id mauris ac ipsum egestas consectetur quis vel neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lacinia libero ac commodo pulvinar. Nam dapibus hendrerit dictum. Nam neque mi, vestibulum vitae libero non, cursus mattis augue. Donec porttitor dapibus tristique. Quisque ut quam sodales, commodo turpis vitae, placerat nibh.
              </p>
            </article>
            <article className="what-we-do">
              <h1>Que hacemos</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ornare neque, consequat consectetur massa. Nam imperdiet bibendum nisi, eu placerat orci blandit eu. Morbi rutrum quam in sodales vestibulum. Maecenas non orci nisl. Praesent eget pharetra ligula. Proin blandit ultricies diam. Ut non condimentum arcu, id pharetra est. Proin id mauris ac ipsum egestas consectetur quis vel neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lacinia libero ac commodo pulvinar. Nam dapibus hendrerit dictum. Nam neque mi, vestibulum vitae libero non, cursus mattis augue. Donec porttitor dapibus tristique. Quisque ut quam sodales, commodo turpis vitae, placerat nibh.
              </p>
            </article>
            <section className="the-team">
              <h1>Conozca al equipo</h1>
              <div className="row">
                <div className="col-sm-4 who">
                  <img className="rounded-circle rounded-block" src={gerente} alt="Gerente" width="140" height="140" />
                  <h5>Gerente General</h5>
                </div>
                <div className="col-sm-4 who">
                  <img className="rounded-circle rounded-block" src={comercio} alt="Gerente" width="140" height="140" />
                  <h5>Jefa de Comercializacion</h5>
                </div>
                <div className="col-sm-4 who">
                  <img className="rounded-circle rounded-block" src={admin} alt="Gerente" width="140" height="140" />
                  <h5>Jefe de Administracion</h5>
                </div>
              </div>
            </section>
          </section>
        </Col>
      </Row>
    </Container>
  )
}