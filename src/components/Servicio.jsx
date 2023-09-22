const Servicio = ({ img, name, description }) => {
  
    return (
    
        <>
            
            <div className='servicio'>
                <img src={img} alt={name} />
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
            
        </>
    
    )

}


export default Servicio
