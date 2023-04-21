import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
    handleOpenCloseModal: any;
    setOperation: any;
    calculate: any;
    showModal: boolean;
  



}

interface State {


}



export default class ModalComponent extends Component<Props, State>{

    doAction(operation: string){
        this.props.setOperation (operation) 
        this.props.calculate(operation) 
        this.props.handleOpenCloseModal() 
    }




    render() {
        

        return (
            <div>
                <Modal show={this.props.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=> this.props.handleOpenCloseModal('soma')}>
                            
                            Soma
                        </Button>
                        <Button variant="primary" onClick={()=>this.props.handleOpenCloseModal('subtraçao')}>
                            Subtração
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}