const React = require('react')
const Def = require('/Users/jhers/FS-Extended/rest-rant/views/default')

function Index(data){
    let placesFormatted = data.places.map((place)=>{
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = Index