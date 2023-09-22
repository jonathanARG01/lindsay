import React from 'react'



const Video = () => {

    return (

        <>

            <div className="modal fade" id="modalVideo" tabIndex="-1" aria-labelledby="modalVideoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            
                        <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?si=crGEB7Wv1_SrcL2u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </div>

        </>
    
    )

}



export default Video
