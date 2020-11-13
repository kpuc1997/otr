import React from 'react';
import { 
    Button,
    Modal,
    Form
    } from 'react-bootstrap';

class StaffForm extends React.Component{
   constructor(props) {
       super(props)

       this.state = {
            show: false,
            priorName: '',
            priorDescription: '',
            Name: '',
            Description: '',
       }

       this.handleShow = this.handleShow.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

   componentDidMount() {
    fetch(`/api/staff/${this.props.staffnumber}`).then(res => res.json()).then(data => this.setState({
        priorName: data[0].Name,
        priorDescription: data[0].Description,
        Name: data[0].Name,
        Description: data[0].Description,
        
    }));
   }

   handleShow() {
       this.setState({show: true})
   }

   handleClose() {
       this.setState({
            show: false,
            Name: this.state.priorName,
            Description: this.state.priorDescription,
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
                Name: this.state.Name,
                Description: this.state.Description,
            }),
        }
        fetch(`/api/staff/${this.props.staffnumber}`, fetchOptions).then((res) => (window.location.reload())).catch((err) => (alert('Error')))
   }

   handleNameChange(event) {
       this.setState({Name: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({Description: event.target.value});
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
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' value={this.state.Name} onChange={this.handleNameChange} />
                    </Form.Group>
                    <Form.Group controlId='textEntry'>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type='text' as='textarea' value={this.state.Description} onChange={this.handleDescriptionChange} />
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

export default StaffForm;