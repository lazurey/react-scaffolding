var React = require('react'),
    Link = require('react-router').Link;

var Header = React.createClass({
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link className="logo" title="Home" to="/">
              <img src='/assets/css/images/logo.png' /> <span>Home</span>
            </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;