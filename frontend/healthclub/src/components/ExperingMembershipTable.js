import React from 'react'
import { Button, Form, Grid, Image, Input, Table } from 'semantic-ui-react'

function ExpireMembershipTable({ users }) {
  let membershipList
  if (users.length === 0) {
      membershipList = (
      <Table.Row key='no-book'>
        <Table.Cell collapsing textAlign='center' colSpan='4'>No Memberships</Table.Cell>
      </Table.Row>
    )
  } else {
      membershipList = users.map(membership => {
      return (
        <Table.Row key={membership.id}>
          <Table.Cell collapsing>
            {/*<Button*/}
            {/*  circular*/}
            {/*  color='red'*/}
            {/*  size='small'*/}
            {/*  icon='trash'*/}
            {/*  onClick={() => handleDeleteBook(membership.id)}*/}
            {/*/>*/}
          </Table.Cell>
            <Table.Cell>{membership.id}</Table.Cell>
            <Table.Cell>{membership.username}</Table.Cell>
            <Table.Cell>{membership.name}</Table.Cell>
            <Table.Cell>{membership.email}</Table.Cell>
            <Table.Cell>{membership.role === "USER" ? "Member" : "NonMember"}</Table.Cell>
            <Table.Cell>{new Date(membership.expiry).toLocaleDateString()}</Table.Cell>
            {/*<Table.Cell>{membership.isMember ? "Yes" : "No"}</Table.Cell>*/}
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Table compact striped selectable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={7} textAlign='center'>
                    <h3>Membership Expires In Next Week</h3>
                </Table.HeaderCell>
            </Table.Row>
          <Table.Row>
            <Table.HeaderCell width={1}/>
            <Table.HeaderCell width={1}>Id</Table.HeaderCell>
            <Table.HeaderCell width={4}>userName</Table.HeaderCell>
              <Table.HeaderCell width={7}>Name</Table.HeaderCell>
              <Table.HeaderCell width={1}>Email</Table.HeaderCell>
              <Table.HeaderCell width={4}>Role</Table.HeaderCell>
              <Table.HeaderCell width={4}>Ends</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {membershipList}
        </Table.Body>
      </Table>
    </>
  )
}

export default ExpireMembershipTable