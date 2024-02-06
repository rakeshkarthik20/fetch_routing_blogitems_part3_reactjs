import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isloading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDetails: updatedData, isloading: false})
  }

  render() {
    const {blogDetails, isloading} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogDetails
    return (
      <div className="blogItemDetails-container">
        {isloading ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="detailTitle">{title}</h1>
            <div className="detailUserDetails">
              <img src={avatarUrl} alt="avatar_url" className="avatarImage" />
              <p className="author2">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image" />
            <p className="content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
