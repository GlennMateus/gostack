import React from 'react'


// function Header(props) => getting properties by 'props'
// function Header({title}) => destructuring assignment
// children: the content we've sent to the component
export default function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}