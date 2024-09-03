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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}