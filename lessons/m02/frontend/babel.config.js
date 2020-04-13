module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}

/*
* preset-env :: environment
*   - Lets the application know about what environment
*     is in use & lets us to use functionalities that
*     environment don't know yet.
*
* preset-react ::
*   - Lets the application to import HTML, CSS inside the JS.
*/