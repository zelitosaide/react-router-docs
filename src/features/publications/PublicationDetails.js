import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PublicationDetails = () => {
  const { pubId } = useParams()

  const publication = useSelector(
    state => state.publications.publications.find(pub => pub._id === pubId)
  )

  return (
    <div>
      <h1>Publication Details</h1>
      <p>{publication.title}</p>
    </div>
  )
}

export default PublicationDetails