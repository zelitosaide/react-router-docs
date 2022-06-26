import { Routes, Route, Outlet, Link } from 'react-router-dom'

import PublicationList from './features/publications/PublicationList'
import PublicationDetails from './features/publications/PublicationDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='publications'>
            <Route index element={<PublicationList />} />
            <Route path=':pubId' element={<PublicationDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App


const Layout = () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='about'>About</Link></li>
      <li><Link to='publications'>Publications</Link></li>
    </ul>
    <Outlet />
  </div>
)