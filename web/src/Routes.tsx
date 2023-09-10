// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/sign-in" page={SignInPage} name="signIn" />
      <Route path="/sign-up" page={SignUpPage} name="signUp" />
      <Private unauthenticated="signIn">
        <Route path="/" page={HomePage} name="home" />
        <Route path="/organization/{slug:String}" page={OrganizationPage} name="organization" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
