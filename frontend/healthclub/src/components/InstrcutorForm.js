import React from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'

function InstructorForm({ instructorName, instructorAge, instructorDescription,instructorEmail, handleAddInstructor,handleInputChange }) {
  const createBtnDisabled = instructorName.trim() === '' || instructorDescription.trim() === '' || instructorEmail.trim() === '' || instructorAge.trim() === '' || instructorAge === '' || !/^\d+$/.test(instructorAge)

  return (
    <Form onSubmit={handleAddInstructor}>
      <Form.Group >
        <Form.Input
            label='Instructor Name'
          name='instructorName'
          placeholder='Alex Fox'
          value={instructorName}
          onChange={handleInputChange}
            required
        />
        <Form.Input
            label='Age'
            name='instructorAge'
            placeholder='25'
            value={instructorAge}
            onChange={handleInputChange}
            required
        />
        <Form.Input
            label='Email'
            name='instructorEmail'
            placeholder='alexfox@gmail.com'
            value={instructorEmail}
            onChange={handleInputChange}
            required
        />
        <Form.Input
            label='Instructor Description'
          name='instructorDescription'
          placeholder='Can Do Zumba classes and aerobic classes'
          value={instructorDescription}
          onChange={handleInputChange}
            required
        />
        <div style={{ marginTop: '25px' }}>
          <Button icon labelPosition='right' disabled={createBtnDisabled}>
            Create<Icon name='add' />
          </Button>
        </div>
      </Form.Group>
    </Form>
  )
}

export default InstructorForm