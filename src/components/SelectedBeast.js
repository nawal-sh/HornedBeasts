import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>{this.props.selectedProps.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img
              variant='top'
              src={this.props.selectedProps.image_url}
              alt={this.props.selectedProps.title}
              style={{ height: '17rem' }}
            />
            <Card.Body>
              <Card.Title>{this.props.selectedProps.title}</Card.Title>
              <Card.Text>{this.props.selectedProps.description}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
