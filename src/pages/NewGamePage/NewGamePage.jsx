import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import './NewGamePage.css'


const status = [
    {key: 'c', text: 'Completed', value: 'Completed'},
    {key: 'p', text: 'Currently Playing', value: 'Currently Playing'},
    {key: 'n', text: 'Not Yet Played', value: 'Not Yet Played'}
]

const rating = [
    {key: '0', text: 'N/A', value: 'N/A'},
    {key: '1', text: '1', value: '1'},
    {key: '2', text: '2', value: '2'},
    {key: '3', text: '3', value: '3'},
    {key: '4', text: '4', value: '4'},
    {key: '5', text: '5', value: '5'}
]

class NewGamePage extends Component {
    state = { 
        formData: {
            name: '',
            type: '',
            status: 'Not Yet Played',
            rating: 'N/A'
        }
     };

     handleChange = e => {
         const formData = {...this.state.formData, [e.target.name]: e.target.value};
         this.setState({
             formData,
         });
     }

     handleSelectionChange = (e, {value}, name) => {
        this.setState({
            formData: {...this.state.formData, [name]: value}
        });
     }

     handleSubmit = e => {
         e.preventDefault();
         this.props.handleAddGame(this.state.formData);
     }

    render() { 
        return ( 
            <>
            <h1>Add &nbsp; a &nbsp; game</h1>
            <div className="NewGamePage-label">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name </label>
                        <input
                            name='name'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Type </label>
                            <input 
                                name='type'
                                value={this.state.formData.type}
                                onChange={this.handleChange}
                                required
                            />
                    </Form.Field>
                    <Form.Select 
                        fluid
                        label='Status'
                        options={status}
                        name='status'
                        value={this.state.formData.status}
                        onChange= {(e, value) => {this.handleSelectionChange(e, value, 'status')}}
                    />
                     <Form.Select 
                        fluid
                        label='Rating'
                        options={rating}
                        name='rating'
                        value={this.state.formData.rating}
                        onChange= {(e, value) => {this.handleSelectionChange(e, value, 'rating')}}
                    />
                    <Button type="submit">Add Game</Button>
                </Form>
                </div>
            </>
         );
    }
}

 
export default NewGamePage;