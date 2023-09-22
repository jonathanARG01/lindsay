const Funcion = ({ number, name, description, color }) => {
  
    return (
    
        <>
            
            <div className='funcion' style={{ backgroundColor: color }}>
                <h4> { number } </h4>
                <h6> { name } </h6>
                <p> { description } </p>
                <img src="simbol.svg" />
            </div>
            
        </>
    
    )

}


export default Funcion
