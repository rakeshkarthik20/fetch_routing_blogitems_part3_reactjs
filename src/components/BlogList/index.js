import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {BlogsData: [], loader: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({BlogsData: updatedData, loader: false})
  }

  render() {
    const {BlogsData, loader} = this.state
    return (
      <ul className="blogListContainer">
        {loader ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          BlogsData.map(each => <BlogItem BlogItems={each} key={each.id} />)
        )}
      </ul>
    )
  }
}

export default BlogList
