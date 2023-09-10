import { SignedOut, SignIn, SignedIn } from '@clerk/clerk-react'

import { Redirect, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignInPage = () => {
  const { __clerk_ticket } = useParams()
  return (
    <>
      <MetaTags title="SignIn" description="SignIn page" />

      <SignedOut>
        <SignIn
          routing="virtual"
          signUpUrl={routes.signUp({ __clerk_ticket })}
          redirectUrl={routes.home()}
        />
      </SignedOut>

      <SignedIn>
        <Redirect to={routes.home()} />
      </SignedIn>
    </>
  )
}

export default SignInPage
