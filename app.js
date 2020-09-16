"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test1 = function (_React$Component) {
    _inherits(Test1, _React$Component);

    function Test1() {
        _classCallCheck(this, Test1);

        return _possibleConstructorReturn(this, (Test1.__proto__ || Object.getPrototypeOf(Test1)).apply(this, arguments));
    }

    _createClass(Test1, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { border: "5", bordercolor: "grey" },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { rowspan: "4" },
                            React.createElement("img", { width: "100%", height: "50%", align: "right", src: this.props.img1, alt: "\u041A\u043B\u0430\u0441\u0441\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u043C\u0435\u0446!" })
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u043C\u0430: ",
                            this.props.name1
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u0424\u0418\u041E \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430: ",
                            this.props.producer1
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ",
                            this.props.yearofissue1
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u041A\u0438\u043D\u043E\u0441\u0442\u0443\u0434\u0438\u044F: ",
                            this.props.studio1
                        )
                    )
                )
            );
        }
    }]);

    return Test1;
}(React.Component);

var Test2 = function (_React$Component2) {
    _inherits(Test2, _React$Component2);

    function Test2() {
        _classCallCheck(this, Test2);

        return _possibleConstructorReturn(this, (Test2.__proto__ || Object.getPrototypeOf(Test2)).apply(this, arguments));
    }

    _createClass(Test2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { border: "5", bordercolor: "grey" },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { rowspan: "5" },
                            React.createElement("img", { width: "100%", height: "100%", align: "right", src: this.props.thephoto, alt: "\u041A\u043B\u0430\u0441\u0441\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u043C\u0435\u0446!" })
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u0424\u0418\u041E:"
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2) },
                            this.props.full_name
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2) },
                            this.props.telephone
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "Email:"
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2) },
                            this.props.email
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u0413\u043E\u0440\u043E\u0434 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F:"
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2) },
                            this.props.city_of_residence
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2), align: "left" },
                            "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B:"
                        ),
                        React.createElement(
                            "td",
                            { style: (styleObj1, styleObj2) },
                            this.props.skills
                        )
                    )
                )
            );
        }
    }]);

    return Test2;
}(React.Component);

var Test4 = function (_React$Component3) {
    _inherits(Test4, _React$Component3);

    function Test4() {
        _classCallCheck(this, Test4);

        return _possibleConstructorReturn(this, (Test4.__proto__ || Object.getPrototypeOf(Test4)).apply(this, arguments));
    }

    _createClass(Test4, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { bordercolor: "grey" },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement("img", { width: "100%", align: "left", src: this.props.img2, alt: "\u041F\u0438\u0442\u043E\u043C\u0435\u0446" })
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "b",
                                null,
                                this.props.opisanie
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Test4;
}(React.Component);

var Test3 = function (_React$Component4) {
    _inherits(Test3, _React$Component4);

    function Test3() {
        _classCallCheck(this, Test3);

        return _possibleConstructorReturn(this, (Test3.__proto__ || Object.getPrototypeOf(Test3)).apply(this, arguments));
    }

    _createClass(Test3, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { border: "5", bordercolor: "grey" },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "h2",
                                    null,
                                    "\u0412\u0440\u0435\u043C\u044F: ",
                                    this.props.date.toLocaleTimeString(),
                                    "."
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Test3;
}(React.Component);

function tick() {
    ReactDOM.render(React.createElement(Test3, { date: new Date() }), document.getElementById('app3'));
}
setInterval(tick, 1000);

var styleObj1 = {
    width: '256px',
    color: 'green'
};
var styleObj2 = {
    fontSize: '66px'
};

ReactDOM.render(React.createElement(Test1, { img1: "megafilmlol.jpg", name1: "\u0412\u0437\u043B\u043E\u043C\u0430\u0442\u044C \u0431\u043B\u043E\u0433\u0435\u0440\u043E\u0432", producer1: "\u041C\u0430\u043A\u0441\u0438\u043C \u0421\u0432\u0435\u0448\u043D\u0438\u043A\u043E\u0432", yearofissue1: "2016", studio1: "\u0411\u0430\u0437\u0435\u043B\u0435\u0432\u0441" }), document.getElementById('app1'));
ReactDOM.render(React.createElement(Test2, { thephoto: "personal_page.jpg", full_name: "\u041E\u0442\u0441\u043E\u0441\u0438\u0434\u0437\u0435 \u0412\u0435\u043B\u0438\u043A\u043E\u043F\u0438\u0441\u0435\u0447\u044C", telephone: "+380 427 562 753", email: "the_otsosidze_007@mail.ua", city_of_residence: "\u0428\u0442\u0430\u0442 \u041C\u0443\u0445\u043E\u0441\u0440\u0430\u043D\u0441\u043A", skills: "N/A" }), document.getElementById('app2'));
ReactDOM.render(React.createElement(Test4, { img2: "pat.jpg", opisanie: "\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440\u0441\u043A\u0438\u0439 \u0442\u0430\u0440\u0430\u043A\u0430\u043D \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439 \u0442\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445. \u0421\u0440\u0435\u0434\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0441\u0430\u043C\u0446\u043E\u0432 \u0438 \u0441\u0430\u043C\u043E\u043A \u043C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440\u0441\u043A\u0438\u0445 \u0442\u0430\u0440\u0430\u043A\u0430\u043D\u043E\u0432 \u2013 60 \u0438 55 \u043C\u043C. \u0420\u043E\u0434\u0438\u043D\u0430 \u0442\u0430\u0440\u0430\u043A\u0430\u043D\u043E\u0432 \u2013  \u043E\u0441\u0442\u0440\u043E\u0432 \u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440 \u2013 \u0434\u0430\u043B\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u044D\u0442\u0438\u043C \u044D\u043A\u0437\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u043C. \u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440\u0441\u043A\u0438\u0435 \u0442\u0430\u0440\u0430\u043A\u0430\u043D\u044B \u2013 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u043F\u0438\u0442\u043E\u043C\u0446\u044B \u0434\u043B\u044F \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439 \u044D\u043A\u0437\u043E\u0442\u0438\u043A\u0438. \u041E\u043D\u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u043A\u043E\u043B\u043E\u0440\u0438\u0442\u043D\u043E\u0439 \u0432\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C\u044E, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u044B \u0432 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438, \u043D\u0435\u043F\u0440\u0438\u0445\u043E\u0442\u043B\u0438\u0432\u044B \u0432 \u0431\u044B\u0442\u0443, \u043F\u043B\u043E\u0434\u043E\u0432\u0438\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0437\u043E\u043E\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u044B. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440\u0441\u043A\u0438\u0435 \u0442\u0430\u0440\u0430\u043A\u0430\u043D\u044B \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0445\u043E\u0440\u043E\u0448\u0438\u043C \u043A\u043E\u0440\u043C\u043E\u043C \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445. \u0418\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u0441\u0451 \u0431\u043E\u043B\u044C\u0448\u0435 \u044D\u0442\u0438 \u044D\u043A\u0437\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C\u044E." }), document.getElementById('app4'));
ReactDOM.render(React.createElement(Test3, null), document.getElementById('app3'));
