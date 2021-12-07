const React = require('react')
const Def = require('/Users/jhers/FS-Extended/rest-rant/views/default')

function Index(data){
    let placesFormatted = data.places.map((place)=>{
        return (
            <div className='col-sm-6'>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                   {placesFormatted} 
                </div>
            </main>
        </Def>
    )
}

module.exports = Index