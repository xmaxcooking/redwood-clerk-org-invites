import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import CreateOrganizationForm from 'src/components/CreateOrganizationForm/CreateOrganizationForm'
import OrganizationsCell from 'src/components/OrganizationsCell'

const HomePage = () => {
  const { logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div>List of organizations (Click one to enter)</div>
      <OrganizationsCell />
      <CreateOrganizationForm />
      <button onClick={() => logOut()}>Sign out</button>
    </>
  )
}

export default HomePage
