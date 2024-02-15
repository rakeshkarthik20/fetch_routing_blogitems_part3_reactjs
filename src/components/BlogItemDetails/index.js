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
    /* in <Route/> component only we have some methods like match , history , location etc which are passed as props
    Therefore we can get match method directly from props */ 
    const {match} = this.props // got  match method from props
    const {params} = match // im match method we again have params so we have to destructure that also . 
    const {id} = params // in params we have id , so we are destructuring id to get that particular id.
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
