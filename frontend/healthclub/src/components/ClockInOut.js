import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'
import { handleLogError } from '../misc/Helpers'
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ClockInOut extends Component {
  static contextType = AuthContext

  state = {
    userId: '',
    isLoggedIn: false,
    isError: false,
    errorMessage: ''
  }

  componentDidMount() {
    const Auth = this.context
    const isLoggedIn = Auth.userIsAuthenticated()
    this.setState({ isLoggedIn })
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  handleGetClockInData = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isGetClockInDataLoading: true })
    bookApi.getTodaysClockInOutData(user)
        .then(response => {
          this.setState({ clockInData: response.data })
        })
        .catch(error => {
          handleLogError(error)
        })
        .finally(() => {
          this.setState({ isGetClockInDataLoading: false })
        })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const { userId } = this.state;
    if (!userId) {
      this.setState({
        isError: true,
        errorMessage: 'Please enter User Id!'
      });
      return;
    }

    const Auth = this.context;
    const user = Auth.getUser();
    const adminId = user.id;
    const clockData = { userId, adminId };
    const { updateMeetState } = this.props;

    bookApi.getUserById(user,userId)
        .then(response => {
          if (response.data.id) {
            // show a confirmation popup before clocking in/out
            const confirmMessage = `Are you sure you want to check in/out with user ${response.data.name} ?`;
            if (window.confirm(confirmMessage)) {
              // continue with clock in/out
              bookApi.clockInOut(user, clockData)
                  .then(response => {
                    if (response.data.msg === 'User Not Found') {
                      toast.error(`${response.data.msg} With UserId: ${response.data.userId}`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                        className: 'toast-error'
                      });
                    } else {
                      toast.success(response.data.msg, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                      });
                    }
                    this.setState({
                      userId: '',
                      isError: false,
                      errorMessage: ''
                    });
                    updateMeetState();
                  })
                  .catch(error => {
                    handleLogError(error);
                    if (error.response && error.response.data) {
                      const errorData = error.response.data;
                      let errorMessage = 'Invalid fields';
                      if (errorData.status === 409) {
                        errorMessage = errorData.message;
                      } else if (errorData.status === 400) {
                        errorMessage = errorData.errors[0].defaultMessage;
                      }
                      this.setState({
                        isError: true,
                        errorMessage
                      });
                    }
                  });
            }
          } else {
            // if user doesn't exist, show error message
            toast.error(`User not found with UserId: ${userId}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
              className: 'toast-error'
            });
          }
          this.setState({
            userId: '',
            isError: false,
            errorMessage: ''
          });
          updateMeetState();
        })
        .catch(error => {
          handleLogError(error);
        });
  }


  render() {
    const { isLoggedIn, isError, errorMessage } = this.state

      return (
        <Grid textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  fluid
                  autoFocus
                  name='userId'
                  icon='user'
                  iconPosition='left'
                  placeholder='Enter User Id'
                  value={this.state.userId}
                  onChange={this.handleInputChange}
                  error={!/^\d+$/.test(this.state.userId)}
                />

                <Button color='blue' fluid size='large'>Clock In/Out</Button>
              </Segment>
            </Form>
            
            {isError && <Message negative>{errorMessage}</Message>}
          </Grid.Column>
        </Grid>
      )
    }
  }
// }

export default ClockInOut