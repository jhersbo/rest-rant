const React = require('react')
const Def = require('./default')

function Error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry, these aren't the droids you're looking for...</p>
            </main>
        </Def>
    )
}

module.exports = Error404