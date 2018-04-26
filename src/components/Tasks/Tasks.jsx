import React, { Component } from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

export class Tasks extends Component{
    handleCheckbox = event => {
        const target = event.target;
        console.log(event.target);
        this.setState({
            [target.name]: target.checked
        });
    };
    render(){
        const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
        const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);
        const tasks_title = [
            'Submit 2018-19 Verification Worksheet to the solution center.',
            'Submit Parents 2016 W-2 Form(s) to the solution center.',
            'Submit Students 2016 W-2 Form(s) to the solution center.',
            'Remove Advising Hold by contracting my Adviser.',
            'Remove Financial Hold by submitting the required work forms above.'
                ];
        var tasks = [];
        var number;
        for (var i = 0; i < tasks_title.length; i++) {
            number = "checkbox"+i;
            tasks.push(
                <tr key={i}>
                    <td>
                        <Checkbox
                            number={number}
                            isChecked={i === 1 || i === 2 ? true:false}
                        />
                    </td>
                    <td>{tasks_title[i]}</td>
                    <td className="td-actions text-right">
                        <OverlayTrigger placement="top" overlay={edit}>
                            <Button
                                bsStyle="info"
                                simple
                                type="button"
                                bsSize="xs"
                            >
                                <i className="fa fa-edit"></i>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={remove}>
                            <Button
                                bsStyle="danger"
                                simple
                                type="button"
                                bsSize="xs"
                            >
                                <i className="fa fa-times"></i>
                            </Button>
                        </OverlayTrigger>

                    </td>
                </tr>
            );
        }
        return (
            <tbody>
                {tasks}
            </tbody>
        );
    }
}

export default Tasks;
