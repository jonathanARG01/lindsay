const Banner = ({ img, title, description, button }) => {
  
    return (
    
        <>
            
            <div className='banner-item' style={{ backgroundImage: `url(${ img })` }}>
                <div className="container d-flex flex-column justify-content-center h-100">
                    <h4> { title } </h4>
                    <p> { description } </p>
                    <a href="#contactanos">
                        { button }
                        <img src="flecha1.svg" alt="flecha" />
                    </a>
                </div>
            </div>
            
        </>
    
    )

}


export default Banner
