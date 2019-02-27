import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Modules from './pages/modules'
import TableMaker from './pages/tableMaker'

const router = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/module" component={Modules} />
                    <Route path="/maker" component={TableMaker} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default router