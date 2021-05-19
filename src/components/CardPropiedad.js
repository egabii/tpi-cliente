import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import imagen from  '../assets/edificio.avif';
import Image from 'react-bootstrap/Image';


const HorizontalCard = ({ propiedad }) => {
  const history = useHistory();
  const verDetalle = () => {
    history.push('/catalogo/'+propiedad.id);
  };
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4 card-image-box">
          <Image src={imagen} fluid />
        </div>
        <div className="col-md-8">
          <div className="card-body card-body-horizontal">
            <h2 className="card-title">{propiedad.precio}</h2>
            <p className="card-text card-features-box">
              <span className="card-features first">{propiedad.habitaciones}hab</span>
              <span className="card-features">{propiedad.banios} {propiedad.banios === 1 ? 'baño' : 'baños'}</span>
              <span className="card-features">{propiedad.espacio} m2</span>
            </p>
            <p className="card-text card-features-box">
              <span><strong>{propiedad.tipo}</strong></span>
              <span className="card-features">{`${propiedad.ubicacion.direccion}, ${propiedad.ubicacion.localidad}`} </span>
            </p>
            <p className="card-text">{propiedad.descripcion}</p>
            <Button className="domus-btn" size="sm" onClick={verDetalle}>Ver Detalle</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const VerticalCard = ({ propiedad }) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <Image src={imagen} fluid />
      <div className="card-body">
        <h3 className="card-title">{propiedad.precio}</h3>
        <p className="card-text">{`${propiedad.ubicacion.direccion}, ${propiedad.ubicacion.localidad}`}</p>
        <p className="card-text card-text-small">{propiedad.descripcion_corta}</p>
      </div>
    </div>
  )
}

export default function CardPropiedad ({propiedad, horizontal}) {
  return (
    <>
    { horizontal 
    ? <HorizontalCard propiedad={propiedad} /> 
    : <VerticalCard propiedad={propiedad} /> }
    </>
  )
}