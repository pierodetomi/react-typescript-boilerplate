var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FatherProps = (function () {
    function FatherProps() {
    }
    return FatherProps;
})();
var Father = (function (_super) {
    __extends(Father, _super);
    function Father(props) {
        _super.call(this, props);
        this.children = ["child 1", "child 2"];
    }
    Father.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("p", {"className": "father"}, "Father: ", this.props.name, ", age ", this.props.age, "."), React.createElement(Children, {"children": this.children})));
    };
    return Father;
})(React.Component);
ReactDOM.render(React.createElement(Father, {"name": "John Doe", "age": "30"}), document.getElementById("test"));
