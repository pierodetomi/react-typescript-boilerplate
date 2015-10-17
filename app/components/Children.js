var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChildrenProps = (function () {
    function ChildrenProps() {
    }
    return ChildrenProps;
})();
var Children = (function (_super) {
    __extends(Children, _super);
    function Children(props) {
        _super.call(this, props);
    }
    Children.prototype.render = function () {
        var index = 0;
        var childNodes = this.props.children.map(function (child) {
            index++;
            return (React.createElement("div", {"key": index - 1}, "Child: ", child));
        });
        return (React.createElement("div", {"className": "children-container"}, childNodes));
    };
    return Children;
})(React.Component);
