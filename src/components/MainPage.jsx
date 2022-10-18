import React from 'react'
import Featured from './mainPage/Featured.jsx'
import New from './mainPage/New.jsx'
import Exclusive from './mainPage/Exclusive.jsx'
import Cast from './mainPage/Cast.jsx'


export default function MainPage() {
    return (
        <div>
            <Featured />
            <New />
            <Exclusive />
            <Cast />
        </div>
    )
}
