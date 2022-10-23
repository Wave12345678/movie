import React from 'react'
import Header from './Header.jsx'

export default function Mainheader(props) {
    const { searchMovies } = props
    return (
        <div className='header'><Header searchMovies={searchMovies} /></div>
    )
}
