import React from 'react';
import { 
    Button,
    Modal,
    Form
    } from 'react-bootstrap';

class PlaylistForm extends React.Component{
   constructor(props) {
       super(props)

       this.state = {
            show: false,
            priorLink: '',
            Link: '',
       }

       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleLinkChange = this.handleLinkChange.bind(this);
       this.handleDelete = this.handleDelete.bind(this);
    }

   componentDidMount() {
    fetch(`/api/playlist/${this.props.date}`).then(res => res.json()).then(data => this.setState({
        priorLink: data[0].Link,
        Link: data[0].Link,
    }));

   }

   handleShow() {
       this.setState({show: true})
   }

   handleClose() {
       this.setState({
            show: false,
            Link: this.state.priorLink,
        })
   }

   handleSubmit(event) {
       this.setState({show: false});
        event.preventDefault();
        let fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                link: this.state.Link,
            }),
        }
        fetch(`/api/playlist/${this.props.date}`, fetchOptions).then((res) => (window.location.reload())).catch((err) => (alert('Error')))
   }

   handleDelete() {
        this.setState({
            show: false,
        });
        let fetchOptions = {
            method: 'DELETE',
        }
        fetch(`/api/playlist/${this.props.date}`, fetchOptions).then((res) => (window.location.reload())).catch((err) => (alert('Error')))

   }

   handleLinkChange(event) {
       this.setState({Link: event.target.value});
       
    }

    render() {
        return <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.date}</Modal.Title>
            </Modal.Header>

            <Form onSubmit={this.handleSubmit}>
                
                <Modal.Body>
                    <Form.Group controlId='textEntry'>
                        <Form.Label>Link:</Form.Label>
                        <Form.Control type='text' value={this.state.Link} onChange={this.handleLinkChange} />
                    </Form.Group>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                    </Button>

                    <Button variant="warning" onClick={this.handleDelete}>
                    Delete
                    </Button>

                    <Button variant="primary" type='submit'>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
      </>
        
    }
}

export default PlaylistForm;