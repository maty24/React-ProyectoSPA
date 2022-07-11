import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const {id} = useParams();//obtines el id de la ruta osea el nombre de la ruta
  const navigate = useNavigate();
  //le puse use memo cuando el id cambia se vulve a dispararar el hero
  const hero = useMemo(() => getHeroById(id),[id]) //le envio el id y si existe me trae todas las propiedades 

  const onNavigateBack = () =>{
    navigate(-1);//esto navega al historial anterior
  }

  if(!hero){
    return <Navigate to="/Marvel"/> //si no existe me envia a la pagin que puse 
  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`/assets/heroes/${id}.jpg`}
         alt={hero.superhero}
         className="img-thumbnail animate__animated animate__fadeInLeft"
         />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b>{hero.alter_ego}</li>
          <li className='list-group-item'> <b>Publisher:</b>{hero.publisher}</li>
          <li className='list-group-item'> <b>First appe:</b>{hero.first_appearance}</li>
        </ul>
        <h5 className='mt-5'>Characters</h5>
        <p>{hero.characters}</p>
        <button
         className='btn btn-outline-primary'
         onClick={onNavigateBack}
         >
          Regresar
        </button>
      </div>
    </div>
  )
}
