import React from 'react';
import { 
    Button,
    Modal,
    Form
    } from 'react-bootstrap';

class CreatePlaylistForm extends React.Component{
   constructor(props) {
       super(props)

       this.state = {
            show: false,
            Date: '',
            Link: '',
       }

       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleLinkChange = this.handleLinkChange.bind(this);
       this.handleDateChange = this.handleDateChange.bind(this);
    }

   handleShow() {
       this.setState({
           show: true,
        })
   }

   handleClose() {
       this.setState({
            show: false,
            Link: '',
            Date: '',
        })
   }

   handleSubmit(event) {
       this.setState({show: false});
        event.preventDefault();
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                date: this.state.Date,
                link: this.state.Link,
            }),
        }
        fetch(`/api/playlist/${this.state.Date}`, fetchOptions).then((res) => (window.location.reload())).catch((err) => (alert('Error')))
   }

   handleLinkChange(event) {
       this.setState({Link: event.target.value});
    }

    handleDateChange(event) {
        this.setState({Date: event.target.value});
     }

    render() {
        return <>
        <Button variant="info" onClick={this.handleShow}>
          Create New
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

            <Form onSubmit={this.handleSubmit}>
                
                <Modal.Body>
                    <Form.Group controlId='textEntry'>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type='text' value={this.state.Date} onChange={this.handleDateChange} />
                    </Form.Group>
                    <Form.Group controlId='textEntry'>
                        <Form.Label>Link:</Form.Label>
                        <Form.Control type='text' as='textarea' value={this.state.Link} onChange={this.handleLinkChange} />
                    </Form.Group>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                    </Button>

                    <Button variant="primary" type='submit'>
                    Add New Playlist
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
      </>
        
    }
}

export default CreatePlaylistForm;