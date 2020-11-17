import React from 'react'
import { Provider, connect } from 'react-redux'
import { create } from 'dva-core'

export const dva = (options)=> {
    const app = create(options)
    if (!global.registered) options.models.forEach(model => { app.model(model) });
    global.registered = true

    app.start()
    const store = app._store
    app.start = container => () => {return <Provider store={store}>{container}</Provider>}
    app.getStore = () => store
    return app
}
export { connect }
