const css = require('./App.sass')

    import React, {Component} from 'react'
    import {render} from 'react-dom'
    import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
    import {createStore} from 'redux'
    import {Provider} from 'react-redux'

    import manageStore from '../../reducer.js'

    let store = createStore(manageStore)
    export default store

    class App extends Component {
        render() {
            return (
                <Provider store={store}>
                    <Router>
                        <Switch>
                            //Remove h1 tag and place Route tags
                            <h1>React Webpack2 boilerplate</h1>
                        </Switch>
                    </Router>
                </Provider>
            )
        }
    }

    render(<App/>, document.getElementById('root'))
