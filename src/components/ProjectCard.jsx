import React,{ useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card onClick={handleShow} className='shadow btn' style={{ width: '28rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" />
      <Card.Body>
        <Card.Title>Project title</Card.Title>   
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
         <div className="col-lg-6">
        <img  style={{width:'100%',height:'250px'}}   src="https://www.officetimer.com/wp-content/uploads/2017/06/project.jpg" alt="" />
        </div>
         <div className="col-lg-6">
          <h3>Project Title</h3>
          <h5><span>Language Used:</span>Html.css.js</h5>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:Lorem ipsum dolorvelit repripsam dolorum provident eveniet hic nihil porro maxime minima deleniti, vel voluptatibus? Eos!</span></p>
        </div>
         </div>
         <hr />
         <div className='float-start mt-2'>
         <a href={"https://github.com/"} target='_blank' className='btn btn-secondary' onClick={handleClose}><i className='fa-brands fa-github'></i></a>
         <a href={"https://orginal-media-player.vercel.app/"} target='_blank' className='btn btn-secondary ms-2' onClick={handleClose}><i className='fa-solid fa-link'></i></a>

      
       </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard