import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        invalidForm: true,
        formData: {
            name: '',
            type: '',
            status: 'Not Yet Played',
            rating: 'N/A'
        }
     };

     handleChange = e => {
         this.setState({
             formData: {...this.state.formData, [e.target.name]: e.target.value}
         });
     }

     handleSubmit = e => {
         e.preventDefault();
         this.props.handleAddGame(this.state.formData);
     }

    render() { 
        return ( 
            <>
            <h1>Add a game</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name: </label>
                        <input
                            name='name'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Type: </label>
                            <input 
                                name='type'
                                value={this.state.formData.type}
                                onChange={this.handleChange}
                            />
                    </Form.Field>
                    <Form.Select 
                        fluid
                        label='Status'
                        options={status}
                        placeholder='Status'
                    />
                     <Form.Select 
                        fluid
                        label='Rating'
                        options={rating}
                        placeholder='Rating'
                    />
                    <Button type="submit">Add Game</Button>

                </Form>
            </>
         );
    }
}
 
export default NewGamePage;