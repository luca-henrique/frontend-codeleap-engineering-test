import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const SignUp = lazy(() =>
  import('src/pages/SignUp/index').then(module => ({
    default: module.SignUp,
  })),
)

const Main = lazy(() =>
  import('src/pages/Main/index').then(module => ({
    default: module.Main,
  })),
)

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/main" component={Main} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
