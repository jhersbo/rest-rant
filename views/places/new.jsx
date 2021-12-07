const React = require('react')
const Def = require('../default')

function new_form(){
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method='POST' action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input id='name' name='name' required className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id='pic' name='pic' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">Enter City</label>
                        <input type="text" id='city' name='city' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">Enter State</label>
                        <input type="text" id='state' name='state' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" name='cuisines' id='cuisines' required className='form-control'/>
                    </div>
                    <input type="submit" value='Add Place!' className='btn btn-primary'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form