const React = require('react')
const Def = require('../default.jsx')

function edit_form(data){
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form action={`/places/${data.id}?_method=PUT`} method='POST'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="name">Place Name</label>
                            <input id='name' name='name' required className='form-control' value={data.place.name} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="pic">Place Picture</label>
                            <input  id='pic' name='pic' className='form-control'/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="city">Enter City</label>
                            <input type="text" id='city' name='city' className='form-control' value={data.place.city}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="state">Enter State</label>
                            <input type="text" id='state' name='state' className='form-control' value={data.place.state}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input type="text" name='cuisines' id='cuisines' required className='form-control' value={data.place.cuisines}/>
                        </div>
                    </div>
                    <input type="submit" value='Edit Place!' className='btn btn-primary'/>
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form