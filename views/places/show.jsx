const React = require('react')
const comment = require('../../models/comment')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main className='container'>
            <div className='flex'>
              <div id='left'>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <p>Not Rated</p>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}!</p>
                <h3>
                  {data.place.showEstablished()}
                </h3>
              </div>
              <div id='right'>
                <img src={data.place.pic} alt={data.place.name}/>
              </div>
            </div>
            <div className='flex'>
              <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
              </a>
              <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                  Delete
                </button>
              </form>
            </div>
            <footer>
              <h2>Comments</h2>
              <div>
                <form action="POST" method='/:id/comment'>
                    <div className='form-group'>
                        <label htmlFor="author">Author</label>
                        <input type='text' id='author' name='author' required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="content">Content</label>
                        <input type="textarea" id='content' name='content' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="star-rating">Star Rating</label>
                        <input type="number" step={0.5} id='star-rating' name='star-rating' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="rant">Rant</label>
                        <input type="checkbox" id='rant' name='rant' className='form-control'/>
                    
                    </div>
                    <input type="submit" value='Add Rant!' className='btn btn-primary'/>
                </form>
              </div>
              {comments}
            </footer>
          </main>
        </Def>
    )
}

module.exports = show