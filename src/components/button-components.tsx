
import { Component } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./modal-components";

interface Props {

    handleOpenCloseModal: any;
    setOperation: any;
    calculate: any;
    showModal: boolean;
 

}

interface State {



}



export default class ButtonComponent extends Component<Props, State>{
    render() {
        return (
            <div>
                <Button
                    variant="primary"
                    onClick={this.props.handleOpenCloseModal}

                > Click here for Math
                    <ModalComponent
                        showModal={this.props.showModal}
                        handleOpenCloseModal={this.props.handleOpenCloseModal}
                        setOperation={this.props.setOperation}
                        calculate={this.props.calculate}
                       
                    />
                </Button>
            </div>
        )
    }
}