//
// Copyright (c) 2020 Teplovs
// Licensed under the Apache License, version 2.0
//

import { Protocol } from "../Values/Protocol.js"

const VNodeProtocol = Protocol.createClass({
    requiredMethods: [ "toString", "toDomNode", "updateDomNode" ]
})

/**
 * Virtual DOM node protocol (interface)
 * @interface
 */
export class VNode extends VNodeProtocol {
    constructor () {
        super()
        /**
         * @type {Node|Text}
         */
        this.dom = null
        /**
         * @type {View?}
         */
        this.parentView = null
        /**
         * @type {VNode?}
         */
        this.parentNode = null
        this.vNodeHandlers = {
            mount: [],
            update: [],
            unmount: [],
            willUnmount: [],
            willMount: [],
            willUpdate: []
        }
    }

    onMount (handler) {
        this.vNodeHandlers.mount.push(handler)
        return this
    }

    onUpdate (handler) {
        this.vNodeHandlers.update.push(handler)
        return this
    }

    onUnmount (handler) {
        this.vNodeHandlers.unmount.push(handler)
        return this
    }

    onBeforeMount (handler) {
        this.vNodeHandlers.willMount.push(handler)
        return this
    }

    onBeforeUpdate (handler) {
        this.vNodeHandlers.willUpdate.push(handler)
        return this
    }

    onBeforeUnmount (handler) {
        this.vNodeHandlers.willUnmount.push(handler)
        return this
    }

    handleMount () {
        for (let handler of this.vNodeHandlers.mount) {
            handler()
        }
    }

    handleUpdate () {
        for (let handler of this.vNodeHandlers.update) {
            handler()
        }
    }

    handleUnmount () {
        for (let handler of this.vNodeHandlers.unmount) {
            handler()
        }
    }

    handleBeforeMount () {
        for (let handler of this.vNodeHandlers.willMount) {
            handler()
        }
    }

    handleBeforeUpdate () {
        for (let handler of this.vNodeHandlers.willUpdate) {
            handler()
        }
    }

    handleBeforeUnmount () {
        for (let handler of this.vNodeHandlers.willUnmount) {
            handler()
        }
    }
}
