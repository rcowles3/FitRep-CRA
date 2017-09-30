import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import React from 'react'

import createModal from './createModal'

let QAndAModal = ({hideModal}) => <div>
  <Modal.Header closeButton onHide={hideModal}>
    <Modal.Title>Frequently asked questions</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p className="question">How does the personal trainer profile work?</p>
    <p>You fill out some basic information about yourself as a trainer and we will save this information into our database. One can easily use this website to look up the personal trainer they are looking for! You might be a great fit for someone!</p>
    <p className="question">Can I use this website to build my own workout?</p>
    <p>Absolutely! Check out our large database on some of the most popular pre-set workout routines and ass it to your schedule today!</p>
    <p className="question">How do I look for a personal trainer?</p>
    <p>You can use the web to browse a number of trainers that are registered on our website and check out their specialities and personality to see if he/she is a great fit for you!</p>
  </Modal.Body>
  <Modal.Footer>
    <Button bsStyle="primary" onClick={hideModal}>Close</Button>
  </Modal.Footer>
</div>

QAndAModal.displayName = 'QAndAModal'

export default createModal(QAndAModal)
