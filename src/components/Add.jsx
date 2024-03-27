import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import upload from '../assets/upload.png'

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-plus'></i>Add New</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg' centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label >
                <input type="file" style={{ display: 'none' }} name="" id="" />
                <img height={'50px'} className='img-fluid' src={upload} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-2"><input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-2"><input type="text" className='form-control' placeholder=' Language Used in Project ' />
              </div>
              <div className="mb-2"><input type="text" className='form-control' placeholder='Project Githun Link' />
              </div>
              <div className="mb-2"><input type="text" className='form-control' placeholder='Project Website Link' />
              </div>


            </div>
            <div className="mb-2"><input type="text" className='form-control' placeholder='Project Overview' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add