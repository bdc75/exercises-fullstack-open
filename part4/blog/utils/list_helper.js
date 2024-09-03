const _ = require('lodash')


const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  const sumReducer = (sum, item) => {
    return sum + (item.likes ?? 0)
  }
  return blogs.reduce(sumReducer, 0)
}

const favoriteBlog = (blogs) => {
  // if (blogs.find === undefined) {
  //   throw TypeError(`blogs ${blogs} does not have instance function "find"`)
  // }
  const transform = (blog) => {
    return {
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    }
  }
  const reducer = (max, item) => {
    if (item.likes === undefined) {
      return max
    } 
    if (max === null) {
      return transform(item)
    }
    const maxSeen = max.likes < item.likes
    return maxSeen ? transform(item) : max
  }
  return blogs.reduce(reducer, null)
  // {
  //   title: "Canonical string reduction",
  //   author: "Edsger W. Dijkstra",
  //   likes: 12
  // }
}

const mostBlogs = (blogs) => {
  const blogsByAuthor = _.groupBy(blogs, 'author')
  const numBlogsPerAuthor = _.mapValues(blogsByAuthor, (value, key) => (value.length))
  const authorMostBlogs = _.maxBy(_.keys(numBlogsPerAuthor), (author) => numBlogsPerAuthor[author])
  return {
    author: authorMostBlogs,
    blogs: numBlogsPerAuthor[authorMostBlogs]
  }
}

const mostLikes = (blogs) => {
  const blogsByAuthor = _.groupBy(blogs, 'author')
  const totalLikesByAuthor = _.mapValues(blogsByAuthor, (value, key) => {
    return _.sumBy(value, (blog) => (blog.likes))
  })
  const authorMostLikes = _.maxBy(_.keys(totalLikesByAuthor), (author) => totalLikesByAuthor[author])
  return {
    author: authorMostLikes,
    likes: totalLikesByAuthor[authorMostLikes]
  }
}

mostLikes([{author:'a',likes:10},{author:'a',likes:5},{author:'b',likes:10} ])

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}