if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/node-base/node-base.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/node-base/node-base.js",
    code: []
};
_yuitest_coverage["build/node-base/node-base.js"].code=["YUI.add('node-base', function (Y, NAME) {","","/**"," * @module node"," * @submodule node-base"," */","","var methods = [","/**"," * Determines whether each node has the given className."," * @method hasClass"," * @for Node"," * @param {String} className the class name to search for"," * @return {Boolean} Whether or not the element has the specified class"," */"," 'hasClass',","","/**"," * Adds a class name to each node."," * @method addClass"," * @param {String} className the class name to add to the node's class attribute"," * @chainable"," */"," 'addClass',","","/**"," * Removes a class name from each node."," * @method removeClass"," * @param {String} className the class name to remove from the node's class attribute"," * @chainable"," */"," 'removeClass',","","/**"," * Replace a class with another class for each node."," * If no oldClassName is present, the newClassName is simply added."," * @method replaceClass"," * @param {String} oldClassName the class name to be replaced"," * @param {String} newClassName the class name that will be replacing the old class name"," * @chainable"," */"," 'replaceClass',","","/**"," * If the className exists on the node it is removed, if it doesn't exist it is added."," * @method toggleClass"," * @param {String} className the class name to be toggled"," * @param {Boolean} force Option to force adding or removing the class."," * @chainable"," */"," 'toggleClass'","];","","Y.Node.importMethod(Y.DOM, methods);","/**"," * Determines whether each node has the given className."," * @method hasClass"," * @see Node.hasClass"," * @for NodeList"," * @param {String} className the class name to search for"," * @return {Array} An array of booleans for each node bound to the NodeList."," */","","/**"," * Adds a class name to each node."," * @method addClass"," * @see Node.addClass"," * @param {String} className the class name to add to the node's class attribute"," * @chainable"," */","","/**"," * Removes a class name from each node."," * @method removeClass"," * @see Node.removeClass"," * @param {String} className the class name to remove from the node's class attribute"," * @chainable"," */","","/**"," * Replace a class with another class for each node."," * If no oldClassName is present, the newClassName is simply added."," * @method replaceClass"," * @see Node.replaceClass"," * @param {String} oldClassName the class name to be replaced"," * @param {String} newClassName the class name that will be replacing the old class name"," * @chainable"," */","","/**"," * If the className exists on the node it is removed, if it doesn't exist it is added."," * @method toggleClass"," * @see Node.toggleClass"," * @param {String} className the class name to be toggled"," * @chainable"," */","Y.NodeList.importMethod(Y.Node.prototype, methods);","/**"," * @module node"," * @submodule node-base"," */","","var Y_Node = Y.Node,","    Y_DOM = Y.DOM;","","/**"," * Returns a new dom node using the provided markup string."," * @method create"," * @static"," * @param {String} html The markup used to create the element"," * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>"," * to escape html content."," * @param {HTMLDocument} doc An optional document context"," * @return {Node} A Node instance bound to a DOM node or fragment"," * @for Node"," */","Y_Node.create = function(html, doc) {","    if (doc && doc._node) {","        doc = doc._node;","    }","    return Y.one(Y_DOM.create(html, doc));","};","","Y.mix(Y_Node.prototype, {","    /**","     * Creates a new Node using the provided markup string.","     * @method create","     * @param {String} html The markup used to create the element.","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @param {HTMLDocument} doc An optional document context","     * @return {Node} A Node instance bound to a DOM node or fragment","     */","    create: Y_Node.create,","","    /**","     * Inserts the content before the reference node.","     * @method insert","     * @param {String | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @param {Int | Node | HTMLElement | String} where The position to insert at.","     * Possible \"where\" arguments","     * <dl>","     * <dt>Y.Node</dt>","     * <dd>The Node to insert before</dd>","     * <dt>HTMLElement</dt>","     * <dd>The element to insert before</dd>","     * <dt>Int</dt>","     * <dd>The index of the child element to insert before</dd>","     * <dt>\"replace\"</dt>","     * <dd>Replaces the existing HTML</dd>","     * <dt>\"before\"</dt>","     * <dd>Inserts before the existing HTML</dd>","     * <dt>\"before\"</dt>","     * <dd>Inserts content before the node</dd>","     * <dt>\"after\"</dt>","     * <dd>Inserts content after the node</dd>","     * </dl>","     * @chainable","     */","    insert: function(content, where) {","        this._insert(content, where);","        return this;","    },","","    _insert: function(content, where) {","        var node = this._node,","            ret = null;","","        if (typeof where == 'number') { // allow index","            where = this._node.childNodes[where];","        } else if (where && where._node) { // Node","            where = where._node;","        }","","        if (content && typeof content != 'string') { // allow Node or NodeList/Array instances","            content = content._node || content._nodes || content;","        }","        ret = Y_DOM.addHTML(node, content, where);","","        return ret;","    },","","    /**","     * Inserts the content as the firstChild of the node.","     * @method prepend","     * @param {String | Node | HTMLElement} content The content to insert","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @chainable","     */","    prepend: function(content) {","        return this.insert(content, 0);","    },","","    /**","     * Inserts the content as the lastChild of the node.","     * @method append","     * @param {String | Node | HTMLElement} content The content to insert","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @chainable","     */","    append: function(content) {","        return this.insert(content, null);","    },","","    /**","     * @method appendChild","     * @param {String | HTMLElement | Node} node Node to be appended","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @return {Node} The appended node","     */","    appendChild: function(node) {","        return Y_Node.scrubVal(this._insert(node));","    },","","    /**","     * @method insertBefore","     * @param {String | HTMLElement | Node} newNode Node to be appended","     * @param {HTMLElement | Node} refNode Node to be inserted before","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content.","     * @return {Node} The inserted node","     */","    insertBefore: function(newNode, refNode) {","        return Y.Node.scrubVal(this._insert(newNode, refNode));","    },","","    /**","     * Appends the node to the given node.","     * @method appendTo","     * @param {Node | HTMLElement} node The node to append to","     * @chainable","     */","    appendTo: function(node) {","        Y.one(node).append(this);","        return this;","    },","","    /**","     * Replaces the node's current content with the content.","     * Note that this passes to innerHTML and is not escaped.","     * Use <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>","     * to escape html content or `set('text')` to add as text.","     * @method setContent","     * @deprecated Use setHTML","     * @param {String | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert","     * @chainable","     */","    setContent: function(content) {","        this._insert(content, 'replace');","        return this;","    },","","    /**","     * Returns the node's current content (e.g. innerHTML)","     * @method getContent","     * @deprecated Use getHTML","     * @return {String} The current content","     */","    getContent: function() {","        var node = this;","","        if (node._node.nodeType === 11) { // 11 === Node.DOCUMENT_FRAGMENT_NODE","            // \"this\", when it is a document fragment, must be cloned because","            // the nodes contained in the fragment actually disappear once","            // the fragment is appended anywhere","            node = node.create(\"<div/>\").append(node.cloneNode(true));","        }","","        return node.get(\"innerHTML\");","    }","});","","/**"," * Replaces the node's current html content with the content provided."," * Note that this passes to innerHTML and is not escaped."," * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text."," * @method setHTML"," * @param {String | HTML | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert"," * @chainable"," */","Y.Node.prototype.setHTML = Y.Node.prototype.setContent;","","/**"," * Returns the node's current html content (e.g. innerHTML)"," * @method getHTML"," * @return {String} The html content"," */","Y.Node.prototype.getHTML = Y.Node.prototype.getContent;","","Y.NodeList.importMethod(Y.Node.prototype, [","    /**","     * Called on each Node instance","     * @for NodeList","     * @method append","     * @see Node.append","     */","    'append',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method insert","     * @see Node.insert","     */","    'insert',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method appendChild","     * @see Node.appendChild","     */","    'appendChild',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method insertBefore","     * @see Node.insertBefore","     */","    'insertBefore',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method prepend","     * @see Node.prepend","     */","    'prepend',","","    /**","     * Called on each Node instance","     * Note that this passes to innerHTML and is not escaped.","     * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text.","     * @for NodeList","     * @method setContent","     * @deprecated Use setHTML","     */","    'setContent',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method getContent","     * @deprecated Use getHTML","     */","    'getContent',","","    /**","     * Called on each Node instance","     * Note that this passes to innerHTML and is not escaped.","     * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text.","     * @for NodeList","     * @method setHTML","     * @see Node.setHTML","     */","    'setHTML',","","    /**","     * Called on each Node instance","     * @for NodeList","     * @method getHTML","     * @see Node.getHTML","     */","    'getHTML'","]);","/**"," * @module node"," * @submodule node-base"," */","","var Y_Node = Y.Node,","    Y_DOM = Y.DOM;","","/**"," * Static collection of configuration attributes for special handling"," * @property ATTRS"," * @static"," * @type object"," */","Y_Node.ATTRS = {","    /**","     * Allows for getting and setting the text of an element.","     * Formatting is preserved and special characters are treated literally.","     * @config text","     * @type String","     */","    text: {","        getter: function() {","            return Y_DOM.getText(this._node);","        },","","        setter: function(content) {","            Y_DOM.setText(this._node, content);","            return content;","        }","    },","","    /**","     * Allows for getting and setting the text of an element.","     * Formatting is preserved and special characters are treated literally.","     * @config for","     * @type String","     */","    'for': {","        getter: function() {","            return Y_DOM.getAttribute(this._node, 'for');","        },","","        setter: function(val) {","            Y_DOM.setAttribute(this._node, 'for', val);","            return val;","        }","    },","","    'options': {","        getter: function() {","            return this._node.getElementsByTagName('option');","        }","    },","","    /**","     * Returns a NodeList instance of all HTMLElement children.","     * @readOnly","     * @config children","     * @type NodeList","     */","    'children': {","        getter: function() {","            var node = this._node,","                children = node.children,","                childNodes, i, len;","","            if (!children) {","                childNodes = node.childNodes;","                children = [];","","                for (i = 0, len = childNodes.length; i < len; ++i) {","                    if (childNodes[i].tagName) {","                        children[children.length] = childNodes[i];","                    }","                }","            }","            return Y.all(children);","        }","    },","","    value: {","        getter: function() {","            return Y_DOM.getValue(this._node);","        },","","        setter: function(val) {","            Y_DOM.setValue(this._node, val);","            return val;","        }","    }","};","","Y.Node.importMethod(Y.DOM, [","    /**","     * Allows setting attributes on DOM nodes, normalizing in some cases.","     * This passes through to the DOM node, allowing for custom attributes.","     * @method setAttribute","     * @for Node","     * @for NodeList","     * @chainable","     * @param {string} name The attribute name","     * @param {string} value The value to set","     */","    'setAttribute',","    /**","     * Allows getting attributes on DOM nodes, normalizing in some cases.","     * This passes through to the DOM node, allowing for custom attributes.","     * @method getAttribute","     * @for Node","     * @for NodeList","     * @param {string} name The attribute name","     * @return {string} The attribute value","     */","    'getAttribute'","","]);","/**"," * @module node"," * @submodule node-base"," */","","var Y_Node = Y.Node;","var Y_NodeList = Y.NodeList;","/**"," * List of events that route to DOM events"," * @static"," * @property DOM_EVENTS"," * @for Node"," */","","Y_Node.DOM_EVENTS = {","    abort: 1,","    beforeunload: 1,","    blur: 1,","    change: 1,","    click: 1,","    close: 1,","    command: 1,","    contextmenu: 1,","    dblclick: 1,","    DOMMouseScroll: 1,","    drag: 1,","    dragstart: 1,","    dragenter: 1,","    dragover: 1,","    dragleave: 1,","    dragend: 1,","    drop: 1,","    error: 1,","    focus: 1,","    key: 1,","    keydown: 1,","    keypress: 1,","    keyup: 1,","    load: 1,","    message: 1,","    mousedown: 1,","    mouseenter: 1,","    mouseleave: 1,","    mousemove: 1,","    mousemultiwheel: 1,","    mouseout: 1,","    mouseover: 1,","    mouseup: 1,","    mousewheel: 1,","    orientationchange: 1,","    reset: 1,","    resize: 1,","    select: 1,","    selectstart: 1,","    submit: 1,","    scroll: 1,","    textInput: 1,","    unload: 1","};","","// Add custom event adaptors to this list.  This will make it so","// that delegate, key, available, contentready, etc all will","// be available through Node.on","Y.mix(Y_Node.DOM_EVENTS, Y.Env.evt.plugins);","","Y.augment(Y_Node, Y.EventTarget);","","Y.mix(Y_Node.prototype, {","    /**","     * Removes event listeners from the node and (optionally) its subtree","     * @method purge","     * @param {Boolean} recurse (optional) Whether or not to remove listeners from the","     * node's subtree","     * @param {String} type (optional) Only remove listeners of the specified type","     * @chainable","     *","     */","    purge: function(recurse, type) {","        Y.Event.purgeElement(this._node, recurse, type);","        return this;","    }","","});","","Y.mix(Y.NodeList.prototype, {","    _prepEvtArgs: function(type, fn, context) {","        // map to Y.on/after signature (type, fn, nodes, context, arg1, arg2, etc)","        var args = Y.Array(arguments, 0, true);","","        if (args.length < 2) { // type only (event hash) just add nodes","            args[2] = this._nodes;","        } else {","            args.splice(2, 0, this._nodes);","        }","","        args[3] = context || this; // default to NodeList instance as context","","        return args;","    },","","    /**","    Subscribe a callback function for each `Node` in the collection to execute","    in response to a DOM event.","","    NOTE: Generally, the `on()` method should be avoided on `NodeLists`, in","    favor of using event delegation from a parent Node.  See the Event user","    guide for details.","","    Most DOM events are associated with a preventable default behavior, such as","    link clicks navigating to a new page.  Callbacks are passed a","    `DOMEventFacade` object as their first argument (usually called `e`) that","    can be used to prevent this default behavior with `e.preventDefault()`. See","    the `DOMEventFacade` API for all available properties and methods on the","    object.","","    By default, the `this` object will be the `NodeList` that the subscription","    came from, <em>not the `Node` that received the event</em>.  Use","    `e.currentTarget` to refer to the `Node`.","","    Returning `false` from a callback is supported as an alternative to calling","    `e.preventDefault(); e.stopPropagation();`.  However, it is recommended to","    use the event methods.","","    @example","","        Y.all(\".sku\").on(\"keydown\", function (e) {","            if (e.keyCode === 13) {","                e.preventDefault();","","                // Use e.currentTarget to refer to the individual Node","                var item = Y.MyApp.searchInventory( e.currentTarget.get('value') );","                // etc ...","            }","        });","","    @method on","    @param {String} type The name of the event","    @param {Function} fn The callback to execute in response to the event","    @param {Object} [context] Override `this` object in callback","    @param {Any} [arg*] 0..n additional arguments to supply to the subscriber","    @return {EventHandle} A subscription handle capable of detaching that","                          subscription","    @for NodeList","    **/","    on: function(type, fn, context) {","        return Y.on.apply(Y, this._prepEvtArgs.apply(this, arguments));","    },","","    /**","     * Applies an one-time event listener to each Node bound to the NodeList.","     * @method once","     * @param {String} type The event being listened for","     * @param {Function} fn The handler to call when the event fires","     * @param {Object} context The context to call the handler with.","     * Default is the NodeList instance.","     * @return {EventHandle} A subscription handle capable of detaching that","     *                    subscription","     * @for NodeList","     */","    once: function(type, fn, context) {","        return Y.once.apply(Y, this._prepEvtArgs.apply(this, arguments));","    },","","    /**","     * Applies an event listener to each Node bound to the NodeList.","     * The handler is called only after all on() handlers are called","     * and the event is not prevented.","     * @method after","     * @param {String} type The event being listened for","     * @param {Function} fn The handler to call when the event fires","     * @param {Object} context The context to call the handler with.","     * Default is the NodeList instance.","     * @return {EventHandle} A subscription handle capable of detaching that","     *                    subscription","     * @for NodeList","     */","    after: function(type, fn, context) {","        return Y.after.apply(Y, this._prepEvtArgs.apply(this, arguments));","    },","","    /**","     * Applies an one-time event listener to each Node bound to the NodeList","     * that will be called only after all on() handlers are called and the","     * event is not prevented.","     *","     * @method onceAfter","     * @param {String} type The event being listened for","     * @param {Function} fn The handler to call when the event fires","     * @param {Object} context The context to call the handler with.","     * Default is the NodeList instance.","     * @return {EventHandle} A subscription handle capable of detaching that","     *                    subscription","     * @for NodeList","     */","    onceAfter: function(type, fn, context) {","        return Y.onceAfter.apply(Y, this._prepEvtArgs.apply(this, arguments));","    }","});","","Y_NodeList.importMethod(Y.Node.prototype, [","    /**","      * Called on each Node instance","      * @method detach","      * @see Node.detach","      * @for NodeList","      */","    'detach',","","    /** Called on each Node instance","      * @method detachAll","      * @see Node.detachAll","      * @for NodeList","      */","    'detachAll'","]);","","/**","Subscribe a callback function to execute in response to a DOM event or custom","event.","","Most DOM events are associated with a preventable default behavior such as","link clicks navigating to a new page.  Callbacks are passed a `DOMEventFacade`","object as their first argument (usually called `e`) that can be used to","prevent this default behavior with `e.preventDefault()`. See the","`DOMEventFacade` API for all available properties and methods on the object.","","If the event name passed as the first parameter is not a whitelisted DOM event,","it will be treated as a custom event subscriptions, allowing","`node.fire('customEventName')` later in the code.  Refer to the Event user guide","for the full DOM event whitelist.","","By default, the `this` object in the callback will refer to the subscribed","`Node`.","","Returning `false` from a callback is supported as an alternative to calling","`e.preventDefault(); e.stopPropagation();`.  However, it is recommended to use","the event methods.","","@example","","    Y.one(\"#my-form\").on(\"submit\", function (e) {","        e.preventDefault();","","        // proceed with ajax form submission instead...","    });","","@method on","@param {String} type The name of the event","@param {Function} fn The callback to execute in response to the event","@param {Object} [context] Override `this` object in callback","@param {Any} [arg*] 0..n additional arguments to supply to the subscriber","@return {EventHandle} A subscription handle capable of detaching that","                      subscription","@for Node","**/","","Y.mix(Y.Node.ATTRS, {","    offsetHeight: {","        setter: function(h) {","            Y.DOM.setHeight(this._node, h);","            return h;","        },","","        getter: function() {","            return this._node.offsetHeight;","        }","    },","","    offsetWidth: {","        setter: function(w) {","            Y.DOM.setWidth(this._node, w);","            return w;","        },","","        getter: function() {","            return this._node.offsetWidth;","        }","    }","});","","Y.mix(Y.Node.prototype, {","    sizeTo: function(w, h) {","        var node;","        if (arguments.length < 2) {","            node = Y.one(w);","            w = node.get('offsetWidth');","            h = node.get('offsetHeight');","        }","","        this.setAttrs({","            offsetWidth: w,","            offsetHeight: h","        });","    }","});","/**"," * @module node"," * @submodule node-base"," */","","var Y_Node = Y.Node;","","Y.mix(Y_Node.prototype, {","    /**","     * Makes the node visible.","     * If the \"transition\" module is loaded, show optionally","     * animates the showing of the node using either the default","     * transition effect ('fadeIn'), or the given named effect.","     * @method show","     * @for Node","     * @param {String} name A named Transition effect to use as the show effect.","     * @param {Object} config Options to use with the transition.","     * @param {Function} callback An optional function to run after the transition completes.","     * @chainable","     */","    show: function(callback) {","        callback = arguments[arguments.length - 1];","        this.toggleView(true, callback);","        return this;","    },","","    /**","     * The implementation for showing nodes.","     * Default is to remove the hidden attribute and reset the CSS style.display property.","     * @method _show","     * @protected","     * @chainable","     */","    _show: function() {","        this.removeAttribute('hidden');","","        // For back-compat we need to leave this in for browsers that","        // do not visually hide a node via the hidden attribute","        // and for users that check visibility based on style display.","        this.setStyle('display', '');","","    },","","    _isHidden: function() {","        return Y.DOM.getAttribute(this._node, 'hidden') === 'true';","    },","","    /**","     * Displays or hides the node.","     * If the \"transition\" module is loaded, toggleView optionally","     * animates the toggling of the node using given named effect.","     * @method toggleView","     * @for Node","     * @param {String} [name] An optional string value to use as transition effect.","     * @param {Boolean} [on] An optional boolean value to force the node to be shown or hidden","     * @param {Function} [callback] An optional function to run after the transition completes.","     * @chainable","     */","    toggleView: function(on, callback) {","        this._toggleView.apply(this, arguments);","        return this;","    },","","    _toggleView: function(on, callback) {","        callback = arguments[arguments.length - 1];","","        // base on current state if not forcing","        if (typeof on != 'boolean') {","            on = (this._isHidden()) ? 1 : 0;","        }","","        if (on) {","            this._show();","        }  else {","            this._hide();","        }","","        if (typeof callback == 'function') {","            callback.call(this);","        }","","        return this;","    },","","    /**","     * Hides the node.","     * If the \"transition\" module is loaded, hide optionally","     * animates the hiding of the node using either the default","     * transition effect ('fadeOut'), or the given named effect.","     * @method hide","     * @param {String} name A named Transition effect to use as the show effect.","     * @param {Object} config Options to use with the transition.","     * @param {Function} callback An optional function to run after the transition completes.","     * @chainable","     */","    hide: function(callback) {","        callback = arguments[arguments.length - 1];","        this.toggleView(false, callback);","        return this;","    },","","    /**","     * The implementation for hiding nodes.","     * Default is to set the hidden attribute to true and set the CSS style.display to 'none'.","     * @method _hide","     * @protected","     * @chainable","     */","    _hide: function() {","        this.setAttribute('hidden', true);","","        // For back-compat we need to leave this in for browsers that","        // do not visually hide a node via the hidden attribute","        // and for users that check visibility based on style display.","        this.setStyle('display', 'none');","    }","});","","Y.NodeList.importMethod(Y.Node.prototype, [","    /**","     * Makes each node visible.","     * If the \"transition\" module is loaded, show optionally","     * animates the showing of the node using either the default","     * transition effect ('fadeIn'), or the given named effect.","     * @method show","     * @param {String} name A named Transition effect to use as the show effect.","     * @param {Object} config Options to use with the transition.","     * @param {Function} callback An optional function to run after the transition completes.","     * @for NodeList","     * @chainable","     */","    'show',","","    /**","     * Hides each node.","     * If the \"transition\" module is loaded, hide optionally","     * animates the hiding of the node using either the default","     * transition effect ('fadeOut'), or the given named effect.","     * @method hide","     * @param {String} name A named Transition effect to use as the show effect.","     * @param {Object} config Options to use with the transition.","     * @param {Function} callback An optional function to run after the transition completes.","     * @chainable","     */","    'hide',","","    /**","     * Displays or hides each node.","     * If the \"transition\" module is loaded, toggleView optionally","     * animates the toggling of the nodes using given named effect.","     * @method toggleView","     * @param {String} [name] An optional string value to use as transition effect.","     * @param {Boolean} [on] An optional boolean value to force the nodes to be shown or hidden","     * @param {Function} [callback] An optional function to run after the transition completes.","     * @chainable","     */","    'toggleView'","]);","","if (!Y.config.doc.documentElement.hasAttribute) { // IE < 8","    Y.Node.prototype.hasAttribute = function(attr) {","        if (attr === 'value') {","            if (this.get('value') !== \"\") { // IE < 8 fails to populate specified when set in HTML","                return true;","            }","        }","        return !!(this._node.attributes[attr] &&","                this._node.attributes[attr].specified);","    };","}","","// IE throws an error when calling focus() on an element that's invisible, not","// displayed, or disabled.","Y.Node.prototype.focus = function () {","    try {","        this._node.focus();","    } catch (e) {","    }","","    return this;","};","","// IE throws error when setting input.type = 'hidden',","// input.setAttribute('type', 'hidden') and input.attributes.type.value = 'hidden'","Y.Node.ATTRS.type = {","    setter: function(val) {","        if (val === 'hidden') {","            try {","                this._node.type = 'hidden';","            } catch(e) {","                this.setStyle('display', 'none');","                this._inputType = 'hidden';","            }","        } else {","            try { // IE errors when changing the type from \"hidden'","                this._node.type = val;","            } catch (e) {","            }","        }","        return val;","    },","","    getter: function() {","        return this._inputType || this._node.type;","    },","","    _bypassProxy: true // don't update DOM when using with Attribute","};","","if (Y.config.doc.createElement('form').elements.nodeType) {","    // IE: elements collection is also FORM node which trips up scrubVal.","    Y.Node.ATTRS.elements = {","            getter: function() {","                return this.all('input, textarea, button, select');","            }","    };","}","","/**"," * Provides methods for managing custom Node data."," * "," * @module node"," * @main node"," * @submodule node-data"," */","","Y.mix(Y.Node.prototype, {","    _initData: function() {","        if (! ('_data' in this)) {","            this._data = {};","        }","    },","","    /**","    * @method getData","    * @for Node","    * @description Retrieves arbitrary data stored on a Node instance.","    * If no data is associated with the Node, it will attempt to retrieve","    * a value from the corresponding HTML data attribute. (e.g. node.getData('foo')","    * will check node.getAttribute('data-foo')).","    * @param {string} name Optional name of the data field to retrieve.","    * If no name is given, all data is returned.","    * @return {any | Object} Whatever is stored at the given field,","    * or an object hash of all fields.","    */","    getData: function(name) {","        this._initData();","        var data = this._data,","            ret = data;","","        if (arguments.length) { // single field","            if (name in data) {","                ret = data[name];","            } else { // initialize from HTML attribute","                ret = this._getDataAttribute(name);","            }","        } else if (typeof data == 'object' && data !== null) { // all fields","            ret = {};","            Y.Object.each(data, function(v, n) {","                ret[n] = v;","            });","","            ret = this._getDataAttributes(ret);","        }","","        return ret;","","    },","","    _getDataAttributes: function(ret) {","        ret = ret || {};","        var i = 0,","            attrs = this._node.attributes,","            len = attrs.length,","            prefix = this.DATA_PREFIX,","            prefixLength = prefix.length,","            name;","","        while (i < len) {","            name = attrs[i].name;","            if (name.indexOf(prefix) === 0) {","                name = name.substr(prefixLength);","                if (!(name in ret)) { // only merge if not already stored","                    ret[name] = this._getDataAttribute(name);","                }","            }","","            i += 1;","        }","","        return ret;","    },","","    _getDataAttribute: function(name) {","        name = this.DATA_PREFIX + name;","","        var node = this._node,","            attrs = node.attributes,","            data = attrs && attrs[name] && attrs[name].value;","","        return data;","    },","","    /**","    * @method setData","    * @for Node","    * @description Stores arbitrary data on a Node instance.","    * This is not stored with the DOM node.","    * @param {string} name The name of the field to set. If no val","    * is given, name is treated as the data and overrides any existing data.","    * @param {any} val The value to be assigned to the field.","    * @chainable","    */","    setData: function(name, val) {","        this._initData();","        if (arguments.length > 1) {","            this._data[name] = val;","        } else {","            this._data = name;","        }","","       return this;","    },","","    /**","    * @method clearData","    * @for Node","    * @description Clears internally stored data.","    * @param {string} name The name of the field to clear. If no name","    * is given, all data is cleared.","    * @chainable","    */","    clearData: function(name) {","        if ('_data' in this) {","            if (typeof name != 'undefined') {","                delete this._data[name];","            } else {","                delete this._data;","            }","        }","","        return this;","    }","});","","Y.mix(Y.NodeList.prototype, {","    /**","    * @method getData","    * @for NodeList","    * @description Retrieves arbitrary data stored on each Node instance","    * bound to the NodeList.","    * @see Node","    * @param {string} name Optional name of the data field to retrieve.","    * If no name is given, all data is returned.","    * @return {Array} An array containing all of the data for each Node instance. ","    * or an object hash of all fields.","    */","    getData: function(name) {","        var args = (arguments.length) ? [name] : [];","        return this._invoke('getData', args, true);","    },","","    /**","    * @method setData","    * @for NodeList","    * @description Stores arbitrary data on each Node instance bound to the","    *  NodeList. This is not stored with the DOM node.","    * @param {string} name The name of the field to set. If no name","    * is given, name is treated as the data and overrides any existing data.","    * @param {any} val The value to be assigned to the field.","    * @chainable","    */","    setData: function(name, val) {","        var args = (arguments.length > 1) ? [name, val] : [name];","        return this._invoke('setData', args);","    },","","    /**","    * @method clearData","    * @for NodeList","    * @description Clears data on all Node instances bound to the NodeList.","    * @param {string} name The name of the field to clear. If no name","    * is given, all data is cleared.","    * @chainable","    */","    clearData: function(name) {","        var args = (arguments.length) ? [name] : [];","        return this._invoke('clearData', [name]);","    }","});","","","}, '@VERSION@', {\"requires\": [\"event-base\", \"node-core\", \"dom-base\"]});"];
_yuitest_coverage["build/node-base/node-base.js"].lines = {"1":0,"8":0,"54":0,"97":0,"103":0,"117":0,"118":0,"119":0,"121":0,"124":0,"163":0,"164":0,"168":0,"171":0,"172":0,"173":0,"174":0,"177":0,"178":0,"180":0,"182":0,"194":0,"206":0,"217":0,"229":0,"239":0,"240":0,"254":0,"255":0,"265":0,"267":0,"271":0,"274":0,"286":0,"293":0,"295":0,"377":0,"386":0,"395":0,"399":0,"400":0,"412":0,"416":0,"417":0,"423":0,"435":0,"439":0,"440":0,"441":0,"443":0,"444":0,"445":0,"449":0,"455":0,"459":0,"460":0,"465":0,"494":0,"495":0,"503":0,"552":0,"554":0,"556":0,"567":0,"568":0,"573":0,"576":0,"578":0,"579":0,"581":0,"584":0,"586":0,"634":0,"649":0,"666":0,"684":0,"688":0,"745":0,"748":0,"749":0,"753":0,"759":0,"760":0,"764":0,"769":0,"771":0,"772":0,"773":0,"774":0,"775":0,"778":0,"789":0,"791":0,"805":0,"806":0,"807":0,"818":0,"823":0,"828":0,"843":0,"844":0,"848":0,"851":0,"852":0,"855":0,"856":0,"858":0,"861":0,"862":0,"865":0,"880":0,"881":0,"882":0,"893":0,"898":0,"902":0,"943":0,"944":0,"945":0,"946":0,"947":0,"950":0,"957":0,"958":0,"959":0,"963":0,"968":0,"970":0,"971":0,"972":0,"974":0,"975":0,"978":0,"979":0,"983":0,"987":0,"993":0,"995":0,"997":0,"1010":0,"1012":0,"1013":0,"1030":0,"1031":0,"1034":0,"1035":0,"1036":0,"1038":0,"1040":0,"1041":0,"1042":0,"1043":0,"1046":0,"1049":0,"1054":0,"1055":0,"1062":0,"1063":0,"1064":0,"1065":0,"1066":0,"1067":0,"1071":0,"1074":0,"1078":0,"1080":0,"1084":0,"1098":0,"1099":0,"1100":0,"1102":0,"1105":0,"1117":0,"1118":0,"1119":0,"1121":0,"1125":0,"1129":0,"1142":0,"1143":0,"1157":0,"1158":0,"1170":0,"1171":0};
_yuitest_coverage["build/node-base/node-base.js"].functions = {"create:117":0,"insert:162":0,"_insert:167":0,"prepend:193":0,"append:205":0,"appendChild:216":0,"insertBefore:228":0,"appendTo:238":0,"setContent:253":0,"getContent:264":0,"getter:394":0,"setter:398":0,"getter:411":0,"setter:415":0,"getter:422":0,"getter:434":0,"getter:454":0,"setter:458":0,"purge:566":0,"_prepEvtArgs:574":0,"on:633":0,"once:648":0,"after:665":0,"onceAfter:683":0,"setter:747":0,"getter:752":0,"setter:758":0,"getter:763":0,"sizeTo:770":0,"show:804":0,"_show:817":0,"_isHidden:827":0,"toggleView:842":0,"_toggleView:847":0,"hide:879":0,"_hide:892":0,"hasAttribute:944":0,"focus:957":0,"setter:969":0,"getter:986":0,"getter:996":0,"_initData:1011":0,"(anonymous 2):1042":0,"getData:1029":0,"_getDataAttributes:1053":0,"_getDataAttribute:1077":0,"setData:1097":0,"clearData:1116":0,"getData:1141":0,"setData:1156":0,"clearData:1169":0,"(anonymous 1):1":0};
_yuitest_coverage["build/node-base/node-base.js"].coveredLines = 184;
_yuitest_coverage["build/node-base/node-base.js"].coveredFunctions = 52;
_yuitest_coverline("build/node-base/node-base.js", 1);
YUI.add('node-base', function (Y, NAME) {

/**
 * @module node
 * @submodule node-base
 */

_yuitest_coverfunc("build/node-base/node-base.js", "(anonymous 1)", 1);
_yuitest_coverline("build/node-base/node-base.js", 8);
var methods = [
/**
 * Determines whether each node has the given className.
 * @method hasClass
 * @for Node
 * @param {String} className the class name to search for
 * @return {Boolean} Whether or not the element has the specified class
 */
 'hasClass',

/**
 * Adds a class name to each node.
 * @method addClass
 * @param {String} className the class name to add to the node's class attribute
 * @chainable
 */
 'addClass',

/**
 * Removes a class name from each node.
 * @method removeClass
 * @param {String} className the class name to remove from the node's class attribute
 * @chainable
 */
 'removeClass',

/**
 * Replace a class with another class for each node.
 * If no oldClassName is present, the newClassName is simply added.
 * @method replaceClass
 * @param {String} oldClassName the class name to be replaced
 * @param {String} newClassName the class name that will be replacing the old class name
 * @chainable
 */
 'replaceClass',

/**
 * If the className exists on the node it is removed, if it doesn't exist it is added.
 * @method toggleClass
 * @param {String} className the class name to be toggled
 * @param {Boolean} force Option to force adding or removing the class.
 * @chainable
 */
 'toggleClass'
];

_yuitest_coverline("build/node-base/node-base.js", 54);
Y.Node.importMethod(Y.DOM, methods);
/**
 * Determines whether each node has the given className.
 * @method hasClass
 * @see Node.hasClass
 * @for NodeList
 * @param {String} className the class name to search for
 * @return {Array} An array of booleans for each node bound to the NodeList.
 */

/**
 * Adds a class name to each node.
 * @method addClass
 * @see Node.addClass
 * @param {String} className the class name to add to the node's class attribute
 * @chainable
 */

/**
 * Removes a class name from each node.
 * @method removeClass
 * @see Node.removeClass
 * @param {String} className the class name to remove from the node's class attribute
 * @chainable
 */

/**
 * Replace a class with another class for each node.
 * If no oldClassName is present, the newClassName is simply added.
 * @method replaceClass
 * @see Node.replaceClass
 * @param {String} oldClassName the class name to be replaced
 * @param {String} newClassName the class name that will be replacing the old class name
 * @chainable
 */

/**
 * If the className exists on the node it is removed, if it doesn't exist it is added.
 * @method toggleClass
 * @see Node.toggleClass
 * @param {String} className the class name to be toggled
 * @chainable
 */
_yuitest_coverline("build/node-base/node-base.js", 97);
Y.NodeList.importMethod(Y.Node.prototype, methods);
/**
 * @module node
 * @submodule node-base
 */

_yuitest_coverline("build/node-base/node-base.js", 103);
var Y_Node = Y.Node,
    Y_DOM = Y.DOM;

/**
 * Returns a new dom node using the provided markup string.
 * @method create
 * @static
 * @param {String} html The markup used to create the element
 * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
 * to escape html content.
 * @param {HTMLDocument} doc An optional document context
 * @return {Node} A Node instance bound to a DOM node or fragment
 * @for Node
 */
_yuitest_coverline("build/node-base/node-base.js", 117);
Y_Node.create = function(html, doc) {
    _yuitest_coverfunc("build/node-base/node-base.js", "create", 117);
_yuitest_coverline("build/node-base/node-base.js", 118);
if (doc && doc._node) {
        _yuitest_coverline("build/node-base/node-base.js", 119);
doc = doc._node;
    }
    _yuitest_coverline("build/node-base/node-base.js", 121);
return Y.one(Y_DOM.create(html, doc));
};

_yuitest_coverline("build/node-base/node-base.js", 124);
Y.mix(Y_Node.prototype, {
    /**
     * Creates a new Node using the provided markup string.
     * @method create
     * @param {String} html The markup used to create the element.
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @param {HTMLDocument} doc An optional document context
     * @return {Node} A Node instance bound to a DOM node or fragment
     */
    create: Y_Node.create,

    /**
     * Inserts the content before the reference node.
     * @method insert
     * @param {String | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @param {Int | Node | HTMLElement | String} where The position to insert at.
     * Possible "where" arguments
     * <dl>
     * <dt>Y.Node</dt>
     * <dd>The Node to insert before</dd>
     * <dt>HTMLElement</dt>
     * <dd>The element to insert before</dd>
     * <dt>Int</dt>
     * <dd>The index of the child element to insert before</dd>
     * <dt>"replace"</dt>
     * <dd>Replaces the existing HTML</dd>
     * <dt>"before"</dt>
     * <dd>Inserts before the existing HTML</dd>
     * <dt>"before"</dt>
     * <dd>Inserts content before the node</dd>
     * <dt>"after"</dt>
     * <dd>Inserts content after the node</dd>
     * </dl>
     * @chainable
     */
    insert: function(content, where) {
        _yuitest_coverfunc("build/node-base/node-base.js", "insert", 162);
_yuitest_coverline("build/node-base/node-base.js", 163);
this._insert(content, where);
        _yuitest_coverline("build/node-base/node-base.js", 164);
return this;
    },

    _insert: function(content, where) {
        _yuitest_coverfunc("build/node-base/node-base.js", "_insert", 167);
_yuitest_coverline("build/node-base/node-base.js", 168);
var node = this._node,
            ret = null;

        _yuitest_coverline("build/node-base/node-base.js", 171);
if (typeof where == 'number') { // allow index
            _yuitest_coverline("build/node-base/node-base.js", 172);
where = this._node.childNodes[where];
        } else {_yuitest_coverline("build/node-base/node-base.js", 173);
if (where && where._node) { // Node
            _yuitest_coverline("build/node-base/node-base.js", 174);
where = where._node;
        }}

        _yuitest_coverline("build/node-base/node-base.js", 177);
if (content && typeof content != 'string') { // allow Node or NodeList/Array instances
            _yuitest_coverline("build/node-base/node-base.js", 178);
content = content._node || content._nodes || content;
        }
        _yuitest_coverline("build/node-base/node-base.js", 180);
ret = Y_DOM.addHTML(node, content, where);

        _yuitest_coverline("build/node-base/node-base.js", 182);
return ret;
    },

    /**
     * Inserts the content as the firstChild of the node.
     * @method prepend
     * @param {String | Node | HTMLElement} content The content to insert
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @chainable
     */
    prepend: function(content) {
        _yuitest_coverfunc("build/node-base/node-base.js", "prepend", 193);
_yuitest_coverline("build/node-base/node-base.js", 194);
return this.insert(content, 0);
    },

    /**
     * Inserts the content as the lastChild of the node.
     * @method append
     * @param {String | Node | HTMLElement} content The content to insert
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @chainable
     */
    append: function(content) {
        _yuitest_coverfunc("build/node-base/node-base.js", "append", 205);
_yuitest_coverline("build/node-base/node-base.js", 206);
return this.insert(content, null);
    },

    /**
     * @method appendChild
     * @param {String | HTMLElement | Node} node Node to be appended
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @return {Node} The appended node
     */
    appendChild: function(node) {
        _yuitest_coverfunc("build/node-base/node-base.js", "appendChild", 216);
_yuitest_coverline("build/node-base/node-base.js", 217);
return Y_Node.scrubVal(this._insert(node));
    },

    /**
     * @method insertBefore
     * @param {String | HTMLElement | Node} newNode Node to be appended
     * @param {HTMLElement | Node} refNode Node to be inserted before
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content.
     * @return {Node} The inserted node
     */
    insertBefore: function(newNode, refNode) {
        _yuitest_coverfunc("build/node-base/node-base.js", "insertBefore", 228);
_yuitest_coverline("build/node-base/node-base.js", 229);
return Y.Node.scrubVal(this._insert(newNode, refNode));
    },

    /**
     * Appends the node to the given node.
     * @method appendTo
     * @param {Node | HTMLElement} node The node to append to
     * @chainable
     */
    appendTo: function(node) {
        _yuitest_coverfunc("build/node-base/node-base.js", "appendTo", 238);
_yuitest_coverline("build/node-base/node-base.js", 239);
Y.one(node).append(this);
        _yuitest_coverline("build/node-base/node-base.js", 240);
return this;
    },

    /**
     * Replaces the node's current content with the content.
     * Note that this passes to innerHTML and is not escaped.
     * Use <a href="../classes/Escape.html#method_html">`Y.Escape.html()`</a>
     * to escape html content or `set('text')` to add as text.
     * @method setContent
     * @deprecated Use setHTML
     * @param {String | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert
     * @chainable
     */
    setContent: function(content) {
        _yuitest_coverfunc("build/node-base/node-base.js", "setContent", 253);
_yuitest_coverline("build/node-base/node-base.js", 254);
this._insert(content, 'replace');
        _yuitest_coverline("build/node-base/node-base.js", 255);
return this;
    },

    /**
     * Returns the node's current content (e.g. innerHTML)
     * @method getContent
     * @deprecated Use getHTML
     * @return {String} The current content
     */
    getContent: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "getContent", 264);
_yuitest_coverline("build/node-base/node-base.js", 265);
var node = this;

        _yuitest_coverline("build/node-base/node-base.js", 267);
if (node._node.nodeType === 11) { // 11 === Node.DOCUMENT_FRAGMENT_NODE
            // "this", when it is a document fragment, must be cloned because
            // the nodes contained in the fragment actually disappear once
            // the fragment is appended anywhere
            _yuitest_coverline("build/node-base/node-base.js", 271);
node = node.create("<div/>").append(node.cloneNode(true));
        }

        _yuitest_coverline("build/node-base/node-base.js", 274);
return node.get("innerHTML");
    }
});

/**
 * Replaces the node's current html content with the content provided.
 * Note that this passes to innerHTML and is not escaped.
 * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text.
 * @method setHTML
 * @param {String | HTML | Node | HTMLElement | NodeList | HTMLCollection} content The content to insert
 * @chainable
 */
_yuitest_coverline("build/node-base/node-base.js", 286);
Y.Node.prototype.setHTML = Y.Node.prototype.setContent;

/**
 * Returns the node's current html content (e.g. innerHTML)
 * @method getHTML
 * @return {String} The html content
 */
_yuitest_coverline("build/node-base/node-base.js", 293);
Y.Node.prototype.getHTML = Y.Node.prototype.getContent;

_yuitest_coverline("build/node-base/node-base.js", 295);
Y.NodeList.importMethod(Y.Node.prototype, [
    /**
     * Called on each Node instance
     * @for NodeList
     * @method append
     * @see Node.append
     */
    'append',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method insert
     * @see Node.insert
     */
    'insert',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method appendChild
     * @see Node.appendChild
     */
    'appendChild',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method insertBefore
     * @see Node.insertBefore
     */
    'insertBefore',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method prepend
     * @see Node.prepend
     */
    'prepend',

    /**
     * Called on each Node instance
     * Note that this passes to innerHTML and is not escaped.
     * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text.
     * @for NodeList
     * @method setContent
     * @deprecated Use setHTML
     */
    'setContent',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method getContent
     * @deprecated Use getHTML
     */
    'getContent',

    /**
     * Called on each Node instance
     * Note that this passes to innerHTML and is not escaped.
     * Use `Y.Escape.html()` to escape HTML, or `set('text')` to add as text.
     * @for NodeList
     * @method setHTML
     * @see Node.setHTML
     */
    'setHTML',

    /**
     * Called on each Node instance
     * @for NodeList
     * @method getHTML
     * @see Node.getHTML
     */
    'getHTML'
]);
/**
 * @module node
 * @submodule node-base
 */

_yuitest_coverline("build/node-base/node-base.js", 377);
var Y_Node = Y.Node,
    Y_DOM = Y.DOM;

/**
 * Static collection of configuration attributes for special handling
 * @property ATTRS
 * @static
 * @type object
 */
_yuitest_coverline("build/node-base/node-base.js", 386);
Y_Node.ATTRS = {
    /**
     * Allows for getting and setting the text of an element.
     * Formatting is preserved and special characters are treated literally.
     * @config text
     * @type String
     */
    text: {
        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 394);
_yuitest_coverline("build/node-base/node-base.js", 395);
return Y_DOM.getText(this._node);
        },

        setter: function(content) {
            _yuitest_coverfunc("build/node-base/node-base.js", "setter", 398);
_yuitest_coverline("build/node-base/node-base.js", 399);
Y_DOM.setText(this._node, content);
            _yuitest_coverline("build/node-base/node-base.js", 400);
return content;
        }
    },

    /**
     * Allows for getting and setting the text of an element.
     * Formatting is preserved and special characters are treated literally.
     * @config for
     * @type String
     */
    'for': {
        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 411);
_yuitest_coverline("build/node-base/node-base.js", 412);
return Y_DOM.getAttribute(this._node, 'for');
        },

        setter: function(val) {
            _yuitest_coverfunc("build/node-base/node-base.js", "setter", 415);
_yuitest_coverline("build/node-base/node-base.js", 416);
Y_DOM.setAttribute(this._node, 'for', val);
            _yuitest_coverline("build/node-base/node-base.js", 417);
return val;
        }
    },

    'options': {
        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 422);
_yuitest_coverline("build/node-base/node-base.js", 423);
return this._node.getElementsByTagName('option');
        }
    },

    /**
     * Returns a NodeList instance of all HTMLElement children.
     * @readOnly
     * @config children
     * @type NodeList
     */
    'children': {
        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 434);
_yuitest_coverline("build/node-base/node-base.js", 435);
var node = this._node,
                children = node.children,
                childNodes, i, len;

            _yuitest_coverline("build/node-base/node-base.js", 439);
if (!children) {
                _yuitest_coverline("build/node-base/node-base.js", 440);
childNodes = node.childNodes;
                _yuitest_coverline("build/node-base/node-base.js", 441);
children = [];

                _yuitest_coverline("build/node-base/node-base.js", 443);
for (i = 0, len = childNodes.length; i < len; ++i) {
                    _yuitest_coverline("build/node-base/node-base.js", 444);
if (childNodes[i].tagName) {
                        _yuitest_coverline("build/node-base/node-base.js", 445);
children[children.length] = childNodes[i];
                    }
                }
            }
            _yuitest_coverline("build/node-base/node-base.js", 449);
return Y.all(children);
        }
    },

    value: {
        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 454);
_yuitest_coverline("build/node-base/node-base.js", 455);
return Y_DOM.getValue(this._node);
        },

        setter: function(val) {
            _yuitest_coverfunc("build/node-base/node-base.js", "setter", 458);
_yuitest_coverline("build/node-base/node-base.js", 459);
Y_DOM.setValue(this._node, val);
            _yuitest_coverline("build/node-base/node-base.js", 460);
return val;
        }
    }
};

_yuitest_coverline("build/node-base/node-base.js", 465);
Y.Node.importMethod(Y.DOM, [
    /**
     * Allows setting attributes on DOM nodes, normalizing in some cases.
     * This passes through to the DOM node, allowing for custom attributes.
     * @method setAttribute
     * @for Node
     * @for NodeList
     * @chainable
     * @param {string} name The attribute name
     * @param {string} value The value to set
     */
    'setAttribute',
    /**
     * Allows getting attributes on DOM nodes, normalizing in some cases.
     * This passes through to the DOM node, allowing for custom attributes.
     * @method getAttribute
     * @for Node
     * @for NodeList
     * @param {string} name The attribute name
     * @return {string} The attribute value
     */
    'getAttribute'

]);
/**
 * @module node
 * @submodule node-base
 */

_yuitest_coverline("build/node-base/node-base.js", 494);
var Y_Node = Y.Node;
_yuitest_coverline("build/node-base/node-base.js", 495);
var Y_NodeList = Y.NodeList;
/**
 * List of events that route to DOM events
 * @static
 * @property DOM_EVENTS
 * @for Node
 */

_yuitest_coverline("build/node-base/node-base.js", 503);
Y_Node.DOM_EVENTS = {
    abort: 1,
    beforeunload: 1,
    blur: 1,
    change: 1,
    click: 1,
    close: 1,
    command: 1,
    contextmenu: 1,
    dblclick: 1,
    DOMMouseScroll: 1,
    drag: 1,
    dragstart: 1,
    dragenter: 1,
    dragover: 1,
    dragleave: 1,
    dragend: 1,
    drop: 1,
    error: 1,
    focus: 1,
    key: 1,
    keydown: 1,
    keypress: 1,
    keyup: 1,
    load: 1,
    message: 1,
    mousedown: 1,
    mouseenter: 1,
    mouseleave: 1,
    mousemove: 1,
    mousemultiwheel: 1,
    mouseout: 1,
    mouseover: 1,
    mouseup: 1,
    mousewheel: 1,
    orientationchange: 1,
    reset: 1,
    resize: 1,
    select: 1,
    selectstart: 1,
    submit: 1,
    scroll: 1,
    textInput: 1,
    unload: 1
};

// Add custom event adaptors to this list.  This will make it so
// that delegate, key, available, contentready, etc all will
// be available through Node.on
_yuitest_coverline("build/node-base/node-base.js", 552);
Y.mix(Y_Node.DOM_EVENTS, Y.Env.evt.plugins);

_yuitest_coverline("build/node-base/node-base.js", 554);
Y.augment(Y_Node, Y.EventTarget);

_yuitest_coverline("build/node-base/node-base.js", 556);
Y.mix(Y_Node.prototype, {
    /**
     * Removes event listeners from the node and (optionally) its subtree
     * @method purge
     * @param {Boolean} recurse (optional) Whether or not to remove listeners from the
     * node's subtree
     * @param {String} type (optional) Only remove listeners of the specified type
     * @chainable
     *
     */
    purge: function(recurse, type) {
        _yuitest_coverfunc("build/node-base/node-base.js", "purge", 566);
_yuitest_coverline("build/node-base/node-base.js", 567);
Y.Event.purgeElement(this._node, recurse, type);
        _yuitest_coverline("build/node-base/node-base.js", 568);
return this;
    }

});

_yuitest_coverline("build/node-base/node-base.js", 573);
Y.mix(Y.NodeList.prototype, {
    _prepEvtArgs: function(type, fn, context) {
        // map to Y.on/after signature (type, fn, nodes, context, arg1, arg2, etc)
        _yuitest_coverfunc("build/node-base/node-base.js", "_prepEvtArgs", 574);
_yuitest_coverline("build/node-base/node-base.js", 576);
var args = Y.Array(arguments, 0, true);

        _yuitest_coverline("build/node-base/node-base.js", 578);
if (args.length < 2) { // type only (event hash) just add nodes
            _yuitest_coverline("build/node-base/node-base.js", 579);
args[2] = this._nodes;
        } else {
            _yuitest_coverline("build/node-base/node-base.js", 581);
args.splice(2, 0, this._nodes);
        }

        _yuitest_coverline("build/node-base/node-base.js", 584);
args[3] = context || this; // default to NodeList instance as context

        _yuitest_coverline("build/node-base/node-base.js", 586);
return args;
    },

    /**
    Subscribe a callback function for each `Node` in the collection to execute
    in response to a DOM event.

    NOTE: Generally, the `on()` method should be avoided on `NodeLists`, in
    favor of using event delegation from a parent Node.  See the Event user
    guide for details.

    Most DOM events are associated with a preventable default behavior, such as
    link clicks navigating to a new page.  Callbacks are passed a
    `DOMEventFacade` object as their first argument (usually called `e`) that
    can be used to prevent this default behavior with `e.preventDefault()`. See
    the `DOMEventFacade` API for all available properties and methods on the
    object.

    By default, the `this` object will be the `NodeList` that the subscription
    came from, <em>not the `Node` that received the event</em>.  Use
    `e.currentTarget` to refer to the `Node`.

    Returning `false` from a callback is supported as an alternative to calling
    `e.preventDefault(); e.stopPropagation();`.  However, it is recommended to
    use the event methods.

    @example

        Y.all(".sku").on("keydown", function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();

                // Use e.currentTarget to refer to the individual Node
                var item = Y.MyApp.searchInventory( e.currentTarget.get('value') );
                // etc ...
            }
        });

    @method on
    @param {String} type The name of the event
    @param {Function} fn The callback to execute in response to the event
    @param {Object} [context] Override `this` object in callback
    @param {Any} [arg*] 0..n additional arguments to supply to the subscriber
    @return {EventHandle} A subscription handle capable of detaching that
                          subscription
    @for NodeList
    **/
    on: function(type, fn, context) {
        _yuitest_coverfunc("build/node-base/node-base.js", "on", 633);
_yuitest_coverline("build/node-base/node-base.js", 634);
return Y.on.apply(Y, this._prepEvtArgs.apply(this, arguments));
    },

    /**
     * Applies an one-time event listener to each Node bound to the NodeList.
     * @method once
     * @param {String} type The event being listened for
     * @param {Function} fn The handler to call when the event fires
     * @param {Object} context The context to call the handler with.
     * Default is the NodeList instance.
     * @return {EventHandle} A subscription handle capable of detaching that
     *                    subscription
     * @for NodeList
     */
    once: function(type, fn, context) {
        _yuitest_coverfunc("build/node-base/node-base.js", "once", 648);
_yuitest_coverline("build/node-base/node-base.js", 649);
return Y.once.apply(Y, this._prepEvtArgs.apply(this, arguments));
    },

    /**
     * Applies an event listener to each Node bound to the NodeList.
     * The handler is called only after all on() handlers are called
     * and the event is not prevented.
     * @method after
     * @param {String} type The event being listened for
     * @param {Function} fn The handler to call when the event fires
     * @param {Object} context The context to call the handler with.
     * Default is the NodeList instance.
     * @return {EventHandle} A subscription handle capable of detaching that
     *                    subscription
     * @for NodeList
     */
    after: function(type, fn, context) {
        _yuitest_coverfunc("build/node-base/node-base.js", "after", 665);
_yuitest_coverline("build/node-base/node-base.js", 666);
return Y.after.apply(Y, this._prepEvtArgs.apply(this, arguments));
    },

    /**
     * Applies an one-time event listener to each Node bound to the NodeList
     * that will be called only after all on() handlers are called and the
     * event is not prevented.
     *
     * @method onceAfter
     * @param {String} type The event being listened for
     * @param {Function} fn The handler to call when the event fires
     * @param {Object} context The context to call the handler with.
     * Default is the NodeList instance.
     * @return {EventHandle} A subscription handle capable of detaching that
     *                    subscription
     * @for NodeList
     */
    onceAfter: function(type, fn, context) {
        _yuitest_coverfunc("build/node-base/node-base.js", "onceAfter", 683);
_yuitest_coverline("build/node-base/node-base.js", 684);
return Y.onceAfter.apply(Y, this._prepEvtArgs.apply(this, arguments));
    }
});

_yuitest_coverline("build/node-base/node-base.js", 688);
Y_NodeList.importMethod(Y.Node.prototype, [
    /**
      * Called on each Node instance
      * @method detach
      * @see Node.detach
      * @for NodeList
      */
    'detach',

    /** Called on each Node instance
      * @method detachAll
      * @see Node.detachAll
      * @for NodeList
      */
    'detachAll'
]);

/**
Subscribe a callback function to execute in response to a DOM event or custom
event.

Most DOM events are associated with a preventable default behavior such as
link clicks navigating to a new page.  Callbacks are passed a `DOMEventFacade`
object as their first argument (usually called `e`) that can be used to
prevent this default behavior with `e.preventDefault()`. See the
`DOMEventFacade` API for all available properties and methods on the object.

If the event name passed as the first parameter is not a whitelisted DOM event,
it will be treated as a custom event subscriptions, allowing
`node.fire('customEventName')` later in the code.  Refer to the Event user guide
for the full DOM event whitelist.

By default, the `this` object in the callback will refer to the subscribed
`Node`.

Returning `false` from a callback is supported as an alternative to calling
`e.preventDefault(); e.stopPropagation();`.  However, it is recommended to use
the event methods.

@example

    Y.one("#my-form").on("submit", function (e) {
        e.preventDefault();

        // proceed with ajax form submission instead...
    });

@method on
@param {String} type The name of the event
@param {Function} fn The callback to execute in response to the event
@param {Object} [context] Override `this` object in callback
@param {Any} [arg*] 0..n additional arguments to supply to the subscriber
@return {EventHandle} A subscription handle capable of detaching that
                      subscription
@for Node
**/

_yuitest_coverline("build/node-base/node-base.js", 745);
Y.mix(Y.Node.ATTRS, {
    offsetHeight: {
        setter: function(h) {
            _yuitest_coverfunc("build/node-base/node-base.js", "setter", 747);
_yuitest_coverline("build/node-base/node-base.js", 748);
Y.DOM.setHeight(this._node, h);
            _yuitest_coverline("build/node-base/node-base.js", 749);
return h;
        },

        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 752);
_yuitest_coverline("build/node-base/node-base.js", 753);
return this._node.offsetHeight;
        }
    },

    offsetWidth: {
        setter: function(w) {
            _yuitest_coverfunc("build/node-base/node-base.js", "setter", 758);
_yuitest_coverline("build/node-base/node-base.js", 759);
Y.DOM.setWidth(this._node, w);
            _yuitest_coverline("build/node-base/node-base.js", 760);
return w;
        },

        getter: function() {
            _yuitest_coverfunc("build/node-base/node-base.js", "getter", 763);
_yuitest_coverline("build/node-base/node-base.js", 764);
return this._node.offsetWidth;
        }
    }
});

_yuitest_coverline("build/node-base/node-base.js", 769);
Y.mix(Y.Node.prototype, {
    sizeTo: function(w, h) {
        _yuitest_coverfunc("build/node-base/node-base.js", "sizeTo", 770);
_yuitest_coverline("build/node-base/node-base.js", 771);
var node;
        _yuitest_coverline("build/node-base/node-base.js", 772);
if (arguments.length < 2) {
            _yuitest_coverline("build/node-base/node-base.js", 773);
node = Y.one(w);
            _yuitest_coverline("build/node-base/node-base.js", 774);
w = node.get('offsetWidth');
            _yuitest_coverline("build/node-base/node-base.js", 775);
h = node.get('offsetHeight');
        }

        _yuitest_coverline("build/node-base/node-base.js", 778);
this.setAttrs({
            offsetWidth: w,
            offsetHeight: h
        });
    }
});
/**
 * @module node
 * @submodule node-base
 */

_yuitest_coverline("build/node-base/node-base.js", 789);
var Y_Node = Y.Node;

_yuitest_coverline("build/node-base/node-base.js", 791);
Y.mix(Y_Node.prototype, {
    /**
     * Makes the node visible.
     * If the "transition" module is loaded, show optionally
     * animates the showing of the node using either the default
     * transition effect ('fadeIn'), or the given named effect.
     * @method show
     * @for Node
     * @param {String} name A named Transition effect to use as the show effect.
     * @param {Object} config Options to use with the transition.
     * @param {Function} callback An optional function to run after the transition completes.
     * @chainable
     */
    show: function(callback) {
        _yuitest_coverfunc("build/node-base/node-base.js", "show", 804);
_yuitest_coverline("build/node-base/node-base.js", 805);
callback = arguments[arguments.length - 1];
        _yuitest_coverline("build/node-base/node-base.js", 806);
this.toggleView(true, callback);
        _yuitest_coverline("build/node-base/node-base.js", 807);
return this;
    },

    /**
     * The implementation for showing nodes.
     * Default is to remove the hidden attribute and reset the CSS style.display property.
     * @method _show
     * @protected
     * @chainable
     */
    _show: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "_show", 817);
_yuitest_coverline("build/node-base/node-base.js", 818);
this.removeAttribute('hidden');

        // For back-compat we need to leave this in for browsers that
        // do not visually hide a node via the hidden attribute
        // and for users that check visibility based on style display.
        _yuitest_coverline("build/node-base/node-base.js", 823);
this.setStyle('display', '');

    },

    _isHidden: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "_isHidden", 827);
_yuitest_coverline("build/node-base/node-base.js", 828);
return Y.DOM.getAttribute(this._node, 'hidden') === 'true';
    },

    /**
     * Displays or hides the node.
     * If the "transition" module is loaded, toggleView optionally
     * animates the toggling of the node using given named effect.
     * @method toggleView
     * @for Node
     * @param {String} [name] An optional string value to use as transition effect.
     * @param {Boolean} [on] An optional boolean value to force the node to be shown or hidden
     * @param {Function} [callback] An optional function to run after the transition completes.
     * @chainable
     */
    toggleView: function(on, callback) {
        _yuitest_coverfunc("build/node-base/node-base.js", "toggleView", 842);
_yuitest_coverline("build/node-base/node-base.js", 843);
this._toggleView.apply(this, arguments);
        _yuitest_coverline("build/node-base/node-base.js", 844);
return this;
    },

    _toggleView: function(on, callback) {
        _yuitest_coverfunc("build/node-base/node-base.js", "_toggleView", 847);
_yuitest_coverline("build/node-base/node-base.js", 848);
callback = arguments[arguments.length - 1];

        // base on current state if not forcing
        _yuitest_coverline("build/node-base/node-base.js", 851);
if (typeof on != 'boolean') {
            _yuitest_coverline("build/node-base/node-base.js", 852);
on = (this._isHidden()) ? 1 : 0;
        }

        _yuitest_coverline("build/node-base/node-base.js", 855);
if (on) {
            _yuitest_coverline("build/node-base/node-base.js", 856);
this._show();
        }  else {
            _yuitest_coverline("build/node-base/node-base.js", 858);
this._hide();
        }

        _yuitest_coverline("build/node-base/node-base.js", 861);
if (typeof callback == 'function') {
            _yuitest_coverline("build/node-base/node-base.js", 862);
callback.call(this);
        }

        _yuitest_coverline("build/node-base/node-base.js", 865);
return this;
    },

    /**
     * Hides the node.
     * If the "transition" module is loaded, hide optionally
     * animates the hiding of the node using either the default
     * transition effect ('fadeOut'), or the given named effect.
     * @method hide
     * @param {String} name A named Transition effect to use as the show effect.
     * @param {Object} config Options to use with the transition.
     * @param {Function} callback An optional function to run after the transition completes.
     * @chainable
     */
    hide: function(callback) {
        _yuitest_coverfunc("build/node-base/node-base.js", "hide", 879);
_yuitest_coverline("build/node-base/node-base.js", 880);
callback = arguments[arguments.length - 1];
        _yuitest_coverline("build/node-base/node-base.js", 881);
this.toggleView(false, callback);
        _yuitest_coverline("build/node-base/node-base.js", 882);
return this;
    },

    /**
     * The implementation for hiding nodes.
     * Default is to set the hidden attribute to true and set the CSS style.display to 'none'.
     * @method _hide
     * @protected
     * @chainable
     */
    _hide: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "_hide", 892);
_yuitest_coverline("build/node-base/node-base.js", 893);
this.setAttribute('hidden', true);

        // For back-compat we need to leave this in for browsers that
        // do not visually hide a node via the hidden attribute
        // and for users that check visibility based on style display.
        _yuitest_coverline("build/node-base/node-base.js", 898);
this.setStyle('display', 'none');
    }
});

_yuitest_coverline("build/node-base/node-base.js", 902);
Y.NodeList.importMethod(Y.Node.prototype, [
    /**
     * Makes each node visible.
     * If the "transition" module is loaded, show optionally
     * animates the showing of the node using either the default
     * transition effect ('fadeIn'), or the given named effect.
     * @method show
     * @param {String} name A named Transition effect to use as the show effect.
     * @param {Object} config Options to use with the transition.
     * @param {Function} callback An optional function to run after the transition completes.
     * @for NodeList
     * @chainable
     */
    'show',

    /**
     * Hides each node.
     * If the "transition" module is loaded, hide optionally
     * animates the hiding of the node using either the default
     * transition effect ('fadeOut'), or the given named effect.
     * @method hide
     * @param {String} name A named Transition effect to use as the show effect.
     * @param {Object} config Options to use with the transition.
     * @param {Function} callback An optional function to run after the transition completes.
     * @chainable
     */
    'hide',

    /**
     * Displays or hides each node.
     * If the "transition" module is loaded, toggleView optionally
     * animates the toggling of the nodes using given named effect.
     * @method toggleView
     * @param {String} [name] An optional string value to use as transition effect.
     * @param {Boolean} [on] An optional boolean value to force the nodes to be shown or hidden
     * @param {Function} [callback] An optional function to run after the transition completes.
     * @chainable
     */
    'toggleView'
]);

_yuitest_coverline("build/node-base/node-base.js", 943);
if (!Y.config.doc.documentElement.hasAttribute) { // IE < 8
    _yuitest_coverline("build/node-base/node-base.js", 944);
Y.Node.prototype.hasAttribute = function(attr) {
        _yuitest_coverfunc("build/node-base/node-base.js", "hasAttribute", 944);
_yuitest_coverline("build/node-base/node-base.js", 945);
if (attr === 'value') {
            _yuitest_coverline("build/node-base/node-base.js", 946);
if (this.get('value') !== "") { // IE < 8 fails to populate specified when set in HTML
                _yuitest_coverline("build/node-base/node-base.js", 947);
return true;
            }
        }
        _yuitest_coverline("build/node-base/node-base.js", 950);
return !!(this._node.attributes[attr] &&
                this._node.attributes[attr].specified);
    };
}

// IE throws an error when calling focus() on an element that's invisible, not
// displayed, or disabled.
_yuitest_coverline("build/node-base/node-base.js", 957);
Y.Node.prototype.focus = function () {
    _yuitest_coverfunc("build/node-base/node-base.js", "focus", 957);
_yuitest_coverline("build/node-base/node-base.js", 958);
try {
        _yuitest_coverline("build/node-base/node-base.js", 959);
this._node.focus();
    } catch (e) {
    }

    _yuitest_coverline("build/node-base/node-base.js", 963);
return this;
};

// IE throws error when setting input.type = 'hidden',
// input.setAttribute('type', 'hidden') and input.attributes.type.value = 'hidden'
_yuitest_coverline("build/node-base/node-base.js", 968);
Y.Node.ATTRS.type = {
    setter: function(val) {
        _yuitest_coverfunc("build/node-base/node-base.js", "setter", 969);
_yuitest_coverline("build/node-base/node-base.js", 970);
if (val === 'hidden') {
            _yuitest_coverline("build/node-base/node-base.js", 971);
try {
                _yuitest_coverline("build/node-base/node-base.js", 972);
this._node.type = 'hidden';
            } catch(e) {
                _yuitest_coverline("build/node-base/node-base.js", 974);
this.setStyle('display', 'none');
                _yuitest_coverline("build/node-base/node-base.js", 975);
this._inputType = 'hidden';
            }
        } else {
            _yuitest_coverline("build/node-base/node-base.js", 978);
try { // IE errors when changing the type from "hidden'
                _yuitest_coverline("build/node-base/node-base.js", 979);
this._node.type = val;
            } catch (e) {
            }
        }
        _yuitest_coverline("build/node-base/node-base.js", 983);
return val;
    },

    getter: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "getter", 986);
_yuitest_coverline("build/node-base/node-base.js", 987);
return this._inputType || this._node.type;
    },

    _bypassProxy: true // don't update DOM when using with Attribute
};

_yuitest_coverline("build/node-base/node-base.js", 993);
if (Y.config.doc.createElement('form').elements.nodeType) {
    // IE: elements collection is also FORM node which trips up scrubVal.
    _yuitest_coverline("build/node-base/node-base.js", 995);
Y.Node.ATTRS.elements = {
            getter: function() {
                _yuitest_coverfunc("build/node-base/node-base.js", "getter", 996);
_yuitest_coverline("build/node-base/node-base.js", 997);
return this.all('input, textarea, button, select');
            }
    };
}

/**
 * Provides methods for managing custom Node data.
 * 
 * @module node
 * @main node
 * @submodule node-data
 */

_yuitest_coverline("build/node-base/node-base.js", 1010);
Y.mix(Y.Node.prototype, {
    _initData: function() {
        _yuitest_coverfunc("build/node-base/node-base.js", "_initData", 1011);
_yuitest_coverline("build/node-base/node-base.js", 1012);
if (! ('_data' in this)) {
            _yuitest_coverline("build/node-base/node-base.js", 1013);
this._data = {};
        }
    },

    /**
    * @method getData
    * @for Node
    * @description Retrieves arbitrary data stored on a Node instance.
    * If no data is associated with the Node, it will attempt to retrieve
    * a value from the corresponding HTML data attribute. (e.g. node.getData('foo')
    * will check node.getAttribute('data-foo')).
    * @param {string} name Optional name of the data field to retrieve.
    * If no name is given, all data is returned.
    * @return {any | Object} Whatever is stored at the given field,
    * or an object hash of all fields.
    */
    getData: function(name) {
        _yuitest_coverfunc("build/node-base/node-base.js", "getData", 1029);
_yuitest_coverline("build/node-base/node-base.js", 1030);
this._initData();
        _yuitest_coverline("build/node-base/node-base.js", 1031);
var data = this._data,
            ret = data;

        _yuitest_coverline("build/node-base/node-base.js", 1034);
if (arguments.length) { // single field
            _yuitest_coverline("build/node-base/node-base.js", 1035);
if (name in data) {
                _yuitest_coverline("build/node-base/node-base.js", 1036);
ret = data[name];
            } else { // initialize from HTML attribute
                _yuitest_coverline("build/node-base/node-base.js", 1038);
ret = this._getDataAttribute(name);
            }
        } else {_yuitest_coverline("build/node-base/node-base.js", 1040);
if (typeof data == 'object' && data !== null) { // all fields
            _yuitest_coverline("build/node-base/node-base.js", 1041);
ret = {};
            _yuitest_coverline("build/node-base/node-base.js", 1042);
Y.Object.each(data, function(v, n) {
                _yuitest_coverfunc("build/node-base/node-base.js", "(anonymous 2)", 1042);
_yuitest_coverline("build/node-base/node-base.js", 1043);
ret[n] = v;
            });

            _yuitest_coverline("build/node-base/node-base.js", 1046);
ret = this._getDataAttributes(ret);
        }}

        _yuitest_coverline("build/node-base/node-base.js", 1049);
return ret;

    },

    _getDataAttributes: function(ret) {
        _yuitest_coverfunc("build/node-base/node-base.js", "_getDataAttributes", 1053);
_yuitest_coverline("build/node-base/node-base.js", 1054);
ret = ret || {};
        _yuitest_coverline("build/node-base/node-base.js", 1055);
var i = 0,
            attrs = this._node.attributes,
            len = attrs.length,
            prefix = this.DATA_PREFIX,
            prefixLength = prefix.length,
            name;

        _yuitest_coverline("build/node-base/node-base.js", 1062);
while (i < len) {
            _yuitest_coverline("build/node-base/node-base.js", 1063);
name = attrs[i].name;
            _yuitest_coverline("build/node-base/node-base.js", 1064);
if (name.indexOf(prefix) === 0) {
                _yuitest_coverline("build/node-base/node-base.js", 1065);
name = name.substr(prefixLength);
                _yuitest_coverline("build/node-base/node-base.js", 1066);
if (!(name in ret)) { // only merge if not already stored
                    _yuitest_coverline("build/node-base/node-base.js", 1067);
ret[name] = this._getDataAttribute(name);
                }
            }

            _yuitest_coverline("build/node-base/node-base.js", 1071);
i += 1;
        }

        _yuitest_coverline("build/node-base/node-base.js", 1074);
return ret;
    },

    _getDataAttribute: function(name) {
        _yuitest_coverfunc("build/node-base/node-base.js", "_getDataAttribute", 1077);
_yuitest_coverline("build/node-base/node-base.js", 1078);
name = this.DATA_PREFIX + name;

        _yuitest_coverline("build/node-base/node-base.js", 1080);
var node = this._node,
            attrs = node.attributes,
            data = attrs && attrs[name] && attrs[name].value;

        _yuitest_coverline("build/node-base/node-base.js", 1084);
return data;
    },

    /**
    * @method setData
    * @for Node
    * @description Stores arbitrary data on a Node instance.
    * This is not stored with the DOM node.
    * @param {string} name The name of the field to set. If no val
    * is given, name is treated as the data and overrides any existing data.
    * @param {any} val The value to be assigned to the field.
    * @chainable
    */
    setData: function(name, val) {
        _yuitest_coverfunc("build/node-base/node-base.js", "setData", 1097);
_yuitest_coverline("build/node-base/node-base.js", 1098);
this._initData();
        _yuitest_coverline("build/node-base/node-base.js", 1099);
if (arguments.length > 1) {
            _yuitest_coverline("build/node-base/node-base.js", 1100);
this._data[name] = val;
        } else {
            _yuitest_coverline("build/node-base/node-base.js", 1102);
this._data = name;
        }

       _yuitest_coverline("build/node-base/node-base.js", 1105);
return this;
    },

    /**
    * @method clearData
    * @for Node
    * @description Clears internally stored data.
    * @param {string} name The name of the field to clear. If no name
    * is given, all data is cleared.
    * @chainable
    */
    clearData: function(name) {
        _yuitest_coverfunc("build/node-base/node-base.js", "clearData", 1116);
_yuitest_coverline("build/node-base/node-base.js", 1117);
if ('_data' in this) {
            _yuitest_coverline("build/node-base/node-base.js", 1118);
if (typeof name != 'undefined') {
                _yuitest_coverline("build/node-base/node-base.js", 1119);
delete this._data[name];
            } else {
                _yuitest_coverline("build/node-base/node-base.js", 1121);
delete this._data;
            }
        }

        _yuitest_coverline("build/node-base/node-base.js", 1125);
return this;
    }
});

_yuitest_coverline("build/node-base/node-base.js", 1129);
Y.mix(Y.NodeList.prototype, {
    /**
    * @method getData
    * @for NodeList
    * @description Retrieves arbitrary data stored on each Node instance
    * bound to the NodeList.
    * @see Node
    * @param {string} name Optional name of the data field to retrieve.
    * If no name is given, all data is returned.
    * @return {Array} An array containing all of the data for each Node instance. 
    * or an object hash of all fields.
    */
    getData: function(name) {
        _yuitest_coverfunc("build/node-base/node-base.js", "getData", 1141);
_yuitest_coverline("build/node-base/node-base.js", 1142);
var args = (arguments.length) ? [name] : [];
        _yuitest_coverline("build/node-base/node-base.js", 1143);
return this._invoke('getData', args, true);
    },

    /**
    * @method setData
    * @for NodeList
    * @description Stores arbitrary data on each Node instance bound to the
    *  NodeList. This is not stored with the DOM node.
    * @param {string} name The name of the field to set. If no name
    * is given, name is treated as the data and overrides any existing data.
    * @param {any} val The value to be assigned to the field.
    * @chainable
    */
    setData: function(name, val) {
        _yuitest_coverfunc("build/node-base/node-base.js", "setData", 1156);
_yuitest_coverline("build/node-base/node-base.js", 1157);
var args = (arguments.length > 1) ? [name, val] : [name];
        _yuitest_coverline("build/node-base/node-base.js", 1158);
return this._invoke('setData', args);
    },

    /**
    * @method clearData
    * @for NodeList
    * @description Clears data on all Node instances bound to the NodeList.
    * @param {string} name The name of the field to clear. If no name
    * is given, all data is cleared.
    * @chainable
    */
    clearData: function(name) {
        _yuitest_coverfunc("build/node-base/node-base.js", "clearData", 1169);
_yuitest_coverline("build/node-base/node-base.js", 1170);
var args = (arguments.length) ? [name] : [];
        _yuitest_coverline("build/node-base/node-base.js", 1171);
return this._invoke('clearData', [name]);
    }
});


}, '@VERSION@', {"requires": ["event-base", "node-core", "dom-base"]});
