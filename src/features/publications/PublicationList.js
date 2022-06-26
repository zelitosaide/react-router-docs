import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { fetchPublications } from './publicationsSlice'

const PublicationList = () => {
  const publications = useSelector(state => state.publications.publications)
  const status = useSelector(state => state.publications.status)

  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPublications())
  }, [dispatch, status])

  return (
    <div>
      <h1>Publication List</h1>
      {!!publications.length && publications.map(pub => (
        <div key={pub._id}>
          <Link to={`/publications/${pub._id}`}>{pub.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default PublicationList