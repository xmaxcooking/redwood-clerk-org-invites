import {
  EmailField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
} from '@redwoodjs/forms'
import { useParams } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const CREATE_INVITE_MUTATION = gql`
  mutation CreateInviteMutation($email: String!, $slug: String!) {
    createInvite(email: $email, slug: $slug) {
      id
    }
  }
`
const OrganizationInviteForm = () => {
  const { slug } = useParams()
  const [createInvite, { loading, error }] = useMutation(
    CREATE_INVITE_MUTATION,
    {
      onCompleted: () => {
        alert('Invite sent')
      },
    }
  )

  const onSubmit = (data) => {
    createInvite({
      variables: {
        email: data.email,
        slug: slug,
      },
    })
  }

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label name="email">Email</Label>
        <EmailField name="email" validation={{ required: true }} />
        <FieldError name="email" />
      </div>

      <Submit disabled={loading}>Send invite</Submit>
      <FormError error={error} />
    </Form>
  )
}

export default OrganizationInviteForm
