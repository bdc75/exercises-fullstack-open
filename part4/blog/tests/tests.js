const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('totalLikes', () => {
  const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

  test('multiple elements, all likes defined', () => {
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(36, result)
  })

  const blogs1 = [
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    }
  ]

  test('single element, 0 likes', () => {
    const result = listHelper.totalLikes(blogs1)
    assert.strictEqual(0, result)
  })

  const blogs2 = [
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

  test('single element, 2 likes', () => {
    const result = listHelper.totalLikes(blogs2)
    assert.strictEqual(2, result)
  })

  
  
})

describe('favoriteBlog', () => {
  const fav = (likes) => ({
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: likes
  })

  const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

  test('multiple elements, all likes defined', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(fav(12), result)
  })

  const blogs1 = [
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 0,
      __v: 0
    }
  ]

  test('single element, 0 likes', () => {
    const result = listHelper.favoriteBlog(blogs1)
    assert.deepStrictEqual(fav(0), result)
  })

  const blogs2 = [
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    }
  ]

  test('single element, 12 likes', () => {
    const result = listHelper.favoriteBlog(blogs2)
    assert.deepStrictEqual(fav(12), result)
  })

  const blogs3 = [
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      __v: 0,
      likes: 12
    },
    {
      _id: "5a422b3a1b54a676234d17f0",
      title: "string reduction",
      author: "W. Dijkstra",
      url: "http://www.cs.udel.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      __v: 0
    }
  ]

  test('multiple blogs, one missing likes property', () => {
    const result = listHelper.favoriteBlog(blogs3)
    return assert.deepStrictEqual(fav(12), result)
  })

  const blogs4 = [
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f0",
      title: "string reduction",
      author: "W. Dijkstra",
      url: "http://www.cs.udel.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f7",
      title: "Canonical reduction",
      author: "Dijkstra",
      url: "http://www.cs.ucal.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      __v: 0
    }
  ]

  test('mult blogs, all missing likes property', () => {
    const result = listHelper.favoriteBlog(blogs4)
    assert.strictEqual(
      null,
      result
    )
  })
})

describe('mostBlogs', () => {
  const blogs0 = []
  test('empty list', () => {
    assert.deepStrictEqual(
      { author: undefined, blogs: undefined }, 
      listHelper.mostBlogs(blogs0)
    )
  })

  const blogs1 = [
    {author: 'Jon', r: 0, a: 1}
  ]
  test('singleton list', () => {
    assert.deepStrictEqual(
      { author: 'Jon', blogs: 1 },
      listHelper.mostBlogs(blogs1)
    )
  })

  const blogs2 = [
    {author: 'Jon', r: 2, a: 6},
    {author: 'Barb', r: 6, a: 2},
    {author: 'Jon', r: 0, a: 2},
    {author: 'Jon', r: 2, a: 6},
    {author: 'Barb', r: 2, a: 1},
    {author: 'Barb', r: 0, a: 1},
    {author: 'Barb', r: 6, a: 1},
    {author: 'Jon', r: 0, a: 2},
    {author: 'Barb', r: 7, a: 1},
  ]
  test('two different names', () => {
    assert.deepStrictEqual(
      { author: 'Barb', blogs: 5 },
      listHelper.mostBlogs(blogs2)
    )
  })

  const blogs3 = [
    {author: 'Suz', random: "random", doesntmatter: "hello"},
    {author: 'Jon', r: 2, a: 6},
    {author: 'Suz', random: "random", doesntmatter: "hello"},
    {author: 'Barb', r: 6, a: 2},
    {author: 'Jon', r: 0, a: 2},
    {author: 'Jon', r: 2, a: 6},
    {author: 'Barb', r: 2, a: 1},
    {author: 'Suz', random: "random", doesntmatter: "hello"},
    {author: 'Barb', r: 0, a: 1},
    {author: 'Barb', r: 6, a: 1},
    {author: 'Jon', r: 0, a: 2},
    {author: 'Suz', random: "random", doesntmatter: "hello"},
    {author: 'Barb', r: 7, a: 1},
  ]
  test('three different names', () => {
    assert.deepStrictEqual(
      { author: 'Barb', blogs: 5 },
      listHelper.mostBlogs(blogs3)
    )
  })

})

describe('mostLikes', () => {
  const blogs0 = []
  test('empty list', () => {
    assert.deepStrictEqual(
      { author: undefined, likes: undefined }, 
      listHelper.mostLikes(blogs0)
    )
  })

  const blogs1 = [
    {author: 'Jon', likes:10, random:"ran"}
  ]
  test('singleton list', () => {
    assert.deepStrictEqual(
      { author: 'Jon', likes:10 },
      listHelper.mostLikes(blogs1)
    )
  })

  const blogs15 = [
    {author: 'Jon', likes:10, abc:''},
    {author: 'Jon', likes:5, def:''}
  ]
  test('one author two blogs', () => {
    assert.deepStrictEqual(
      { author: 'Jon', likes: 15 },
      listHelper.mostLikes(blogs15)
    )
  })

  const blogs2 = [
    {author: 'Jon', r: 2, a: 6, likes: 1},
    {author: 'Barb', r: 6, a: 2, likes: 2},
    {author: 'Jon', r: 0, a: 2, likes: 3},
    {author: 'Jon', r: 2, a: 6, likes: 4},
    {author: 'Barb', r: 2, a: 1, likes: 5},
    {author: 'Barb', r: 0, a: 1, likes: 6},
    {author: 'Barb', r: 6, a: 1, likes: 7},
    {author: 'Jon', r: 0, a: 2, likes: 8},
    {author: 'Barb', r: 7, a: 1, likes: 9},
  ]
  test('two different names', () => {
    assert.deepStrictEqual(
      { author: 'Barb', likes: 29 },
      listHelper.mostLikes(blogs2)
    )
  })

  const blogs3 = [
    {author: 'Suz', random: "random", doesntmatter: "hello", likes: 0},
    {author: 'Jon', r: 2, a: 6, likes: 0},
    {author: 'Suz', random: "random", doesntmatter: "hello", likes: 0},
    {author: 'Barb', r: 6, a: 2, likes: 10},
    {author: 'Jon', r: 0, a: 2, likes: 0},
    {author: 'Jon', r: 2, a: 6, likes: 0},
    {author: 'Barb', r: 2, a: 1, likes: 0},
    {author: 'Suz', random: "random", doesntmatter: "hello", likes: 0},
    {author: 'Barb', r: 0, a: 1, likes: 5},
    {author: 'Barb', r: 6, a: 1, likes: 5},
    {author: 'Jon', r: 0, a: 2, likes: 0},
    {author: 'Suz', random: "random", doesntmatter: "hello", likes: 22},
    {author: 'Barb', r: 7, a: 1, likes: 1},
  ]
  test('three different names', () => {
    assert.deepStrictEqual(
      { author: 'Suz', likes: 22 },
      listHelper.mostLikes(blogs3)
    )
  })
})