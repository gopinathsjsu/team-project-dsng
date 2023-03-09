import React, { Component } from 'react'
import { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Segment, Message ,Dropdown,Radio  } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'
import { handleLogError } from '../misc/Helpers'
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {config} from "../../Constants";
class Loghours extends Component {
    static contextType = AuthContext

    state = {
        username: '',
        password: '',
        name: '',
        email: '',
        isLoggedIn: false,
        selectedOption: 'user',
        isError: false,
        errorMessage: '',
        memberships: [], // to store the list of memberships fetched from the API
        selectedMembership: '', // to store the selected membership by the user,
        selectedRole: 'user',
        selectedLocation:'',
        setSelectedLocation:'',
        locations:[],
        selectedMachine:'',
        time:0
    }

    componentDidMount() {
        function basicAuth(user) {
            if (user) {
                return `Basic ${user.authdata}`;
            }
            return null;
        }


        const Auth = this.context
        const isLoggedIn = Auth.userIsAuthenticated()
        this.setState({ isLoggedIn })
        const user = Auth.getUser()
        const instance = axios.create({
            baseURL: config.url.API_BASE_URL
        })
        instance.get('/api/membership',{
            headers: { 'Authorization': basicAuth(user) }
        })
            .then(response => {
                // update the state with the fetched memberships
                this.setState({ memberships: response.data });
            })
            .catch(error => {
                console.log(error);
            });

        bookApi.getLocations(user)
            .then(response => {
                this.setState({ locations: response.data })
            })
            .catch(error => {
                handleLogError(error)
            })
    }

    handleInputChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }


    handleMachineSelect = (event, { value }) => {
        this.setState({ selectedMachine: value });
    }
    handleLocationSelect = (event, { value }) => {
        this.setState({ selectedLocation: value });
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { time,selectedLocation,selectedMachine} = this.state
        if (!(time && selectedMachine && selectedLocation )) {
            this.setState({
                isError: true,
                errorMessage: 'Please, inform all fields!'
            })
            return
        }
        const Auth = this.context
        const admin = Auth.getUser()
        console.log("aaa",selectedMachine)
        const data = { time,userId:admin.id,locationId:selectedLocation,machine:selectedMachine }
        bookApi.logHours(admin,data)
            .then(response => {
                this.setState({
                    time:0,
                    selectedMachine:'',
                    selectedLocation:''

                });
                toast.success('Logged successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000 // 10 seconds
                });


            })
            .catch(error => {
                handleLogError(error)
                if (error.response && error.response.data) {
                    const errorData = error.response.data
                    let errorMessage = 'Invalid fields'
                    if (errorData.status === 409) {
                        errorMessage = errorData.message
                    } else if (errorData.status === 400) {
                        errorMessage = errorData.errors[0].defaultMessage
                    }
                    this.setState({
                        isError: true,
                        errorMessage
                    })
                }
            })
    }

    render() {
        const { isLoggedIn, isError, errorMessage ,memberships,selectedMembership,locations,time} = this.state
        const {selectedRole,selectedLocation,selectedMachine} = this.state

        const membershipOptions = memberships.map(membership => {
            return { key: membership.id, value: membership.id, text: membership.title + " " + membership.description};
        });
        const locationsForSelect = locations.map((instructor) => ({
            key: instructor.id,
            text: instructor.name,
            value: instructor.id,
        }))
        const machinesForSelect = [
            { key: '1', value: 'Treadmill', text: 'Treadmill' },
            { key: '2', value: 'Cycling', text: 'Cycling' },
            { key: '3', value: 'Stair', text: 'Stair machines' },
        ];
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large' onSubmit={this.handleSubmit}  >
                        <Segment>



                            <Dropdown
                                placeholder='Select Location'
                                fluid
                                search
                                selection
                                options={locationsForSelect}
                                value={selectedLocation}
                                onChange={this.handleLocationSelect}
                            />
                            <br/>
                            <Dropdown
                                placeholder='Select Machine'
                                fluid
                                search
                                selection
                                options={machinesForSelect}
                                value={selectedMachine}
                                onChange={this.handleMachineSelect}
                            />
                            <br/>
                            <Form.Input
                                fluid
                                name='time'
                                icon='at'
                                label='Total Minutes'
                                iconPosition='left'
                                placeholder='Total Minutes'
                                value={time}
                                onChange={this.handleInputChange}
                                error={!/^\d+$/.test(time)}
                            />
                            <Button color='blue' fluid size='large'>Save Data</Button>
                        </Segment>
                    </Form>

                    {isError && <Message negative>{errorMessage}</Message>}
                </Grid.Column>
            </Grid>
        )
    }
}
// }

export default Loghours