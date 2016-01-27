var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <div className="social-media">
            <a href="https://www.pinterest.com/lubluecreations/" target="_blank"><i className="fa fa-pinterest-square fa-2x"></i></a>
            <a href="https://www.instagram.com/lubluecreations/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
            <a href="https://twitter.com/lubluecreations" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a>
            <a href="https://www.facebook.com/lubluecreations/" target="_blank"><i className="fa fa-facebook-square fa-2x"></i></a>
        </div>
        <div className="logo">
          <img src="images/logo-350x150.jpg" />
        </div>
        <nav className="navbar navbar-default" role="navigation" id="lublue-nav">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            Collections
            About
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
