// Type definitions for React-DOM v0.14.0-rc
// Project: https://www.npmjs.com/package/react-dom
// Definitions by: Stefan-Bieliauskas <http://www.conts.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />

declare namespace ReactDOM {
    function render<P>(
        element: React.DOMElement<P>,
        container: Element,
        callback?: () => any): React.DOMComponent<P>;
    function render<P, S>(
        element: React.ClassicElement<P>,
        container: Element,
        callback?: () => any): React.ClassicComponent<P, S>;
    function render<P, S>(
        element: React.ReactElement<P>,
        container: Element,
        callback?: () => any): React.Component<P, S>;

    function findDOMNode<TElement extends Element>(
        componentOrElement: React.Component<any, any> | Element): TElement;
    function findDOMNode(
        componentOrElement: React.Component<any, any> | Element): Element;

    function unmountComponentAtNode(container: Element): boolean;
}

declare namespace ReactDomServer {
    function renderToString(element: React.ReactElement<any>): string;
    function renderToStaticMarkup(element: React.ReactElement<any>): string;
}
declare module "react-dom" {
    export = ReactDOM
}

declare module "react-dom/server" {
    export = ReactDomServer
}
