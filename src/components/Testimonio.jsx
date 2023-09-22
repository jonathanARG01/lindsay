const Testimonio = ({ img, name, cargo, description, video }) => {
  
    return (
    
        <>

            <div className='testimonio mt-5' style={{ backgroundImage: `url(${ img })` }}>
                <h6>
                    <span>PLAY VIDEO</span>
                    <img src="play.svg" alt="play" data-bs-toggle="modal" data-bs-target="#modalVideo" />
                </h6>
            </div>
            
        </>
    
    )

}



export default Testimonio
