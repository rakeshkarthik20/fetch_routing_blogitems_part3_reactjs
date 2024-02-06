import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {BlogItems} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = BlogItems

  return (
    <Link to={`/blogs/${id}`} className="router-link">
      <div className="blogItem-container">
        <img src={`${imageUrl}`} alt="image_url" className="imageUrl" />
        <div className="blogItem-subContainer">
          <p className="topic">{topic}</p>
          <h1 className="blogTitle">{title}</h1>
          <div className="userDetails">
            <img src={`${avatarUrl}`} alt="avatar_url" className="avatarUrl" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
