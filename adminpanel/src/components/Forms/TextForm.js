import React from 'react';
import { 
    Button,
    Modal,
    Form
    } from 'react-bootstrap';

class TextForm extends React.Component{
   constructor(props) {
       super(props)

       this.state = {
           show: false,
           priorText: '',
           text: '',
       }

       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
    fetch(`/api/text/${this.props.name}`).then(res => res.json()).then(data => this.setState({
        priorText: data.Text,
        text: data.Text,
    }));
   }

   handleShow() {
       this.setState({show: true})
   }

   handleClose() {
       this.setState({
            show: false,
            text: this.state.priorText,
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
            body: JSON.stringify({text: this.state.text}),
        }
        fetch(`/api/text/${this.props.name}`, fetchOptions).then((res) => (window.location.reload())).catch((err) => (alert('Error')))
   }

   handleChange(event) {
       this.setState({text: event.target.value});
    }

    render() {
        return <>
        <Button variant="primary" onClick={this.handleShow}>
          Edit
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

            <Form onSubmit={this.handleSubmit}>
                
                <Modal.Body>
                    <Form.Group controlId='textEntry'>
                        <Form.Label>{this.props.title}</Form.Label>
                        <Form.Control type='text' as='textarea' value={this.state.text} onChange={this.handleChange} />
                    </Form.Group>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
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

export default TextForm;