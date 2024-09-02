const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  const sumReducer = (sum, item) => {
    return sum + (item.likes ?? 0)
  }
  return blogs.reduce(sumReducer, 0)
}

module.exports = {
  dummy,
  totalLikes
}