import { useMutation } from '@redwoodjs/web'

import { QUERY as ORGANIZATIONS_QUERY } from 'src/components/OrganizationsCell/OrganizationsCell'

const CREATE_ORGANIZATION_MUTATION = gql`
  mutation CreateOrganizationMutation {
    createOrganization {
      id
    }
  }
`

const CreateOrganizationForm = () => {
  const [createOrganization, { loading }] = useMutation(
    CREATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        alert('Organization created')
      },
      refetchQueries: [ORGANIZATIONS_QUERY],
    }
  )
  return (
    <div>
      <button onClick={() => createOrganization()} disabled={loading}>
        Create a new organization
      </button>
    </div>
  )
}

export default CreateOrganizationForm
