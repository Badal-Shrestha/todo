import React, { Component } from "react";
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap"

export default class CustomModal extends Component{
    constructor (props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };

    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox"){
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });

    };

    render(){
        const { toggle, onSave } = this.props;
        
        return (
            <Modal isOpen={true} toggle={toogle}>
                <ModalHeader toggle={toogle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <label for="todo-title">Title</label>
                            <Input type="text" id="todo-title" name='title' 
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter todo title" />
                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Description</Label>
                            <Input 
                                type="text"
                                id ="todo-description"
                                name = "descritpion"
                                value = {this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter todo description" 
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input  
                                    type= "checkbox"
                                    name= "completed"
                                    checked= {this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>

                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='sucess'
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}