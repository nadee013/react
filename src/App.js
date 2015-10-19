var React = require('react');

var blogs = [
  {'name': 'Discover Meteor insights', 'link': '/page1'},
  {'name': 'Kadira new features', 'link': '/page2'},
  {'name': 'MeteorHacks retires..!', 'link': '/page3'}
];

var Home = React.createClass({
  goHome () {
    this.setState({"currPage": "home"});
  },
  gotoBlogPage (pageData) {
    this.setState({"currData": pageData});
    this.setState({"currPage": "blogPage"});
  },
  render: function() {
    var state = this.state;
    if(state && state.currPage && state.currPage === "blogPage") {
      return <BlogPage onBackClick={this.goHome} pageData={this.state.currData}/>
    } else {
      return <BlogsList onPageClick={this.gotoBlogPage}/>
    }
  }
});

var BlogsList = React.createClass({
  clickBlog (pageData) {
    this.props.onPageClick(pageData);
  },
  render: function() {
    var self = this;
    return (
      <div>
        <h1>Blogs List</h1>
        <ul> {
          blogs.map(function(item) {
            return (
              <li>
                <a href="#" onClick={self.clickBlog.bind(self, item)}>{item.name}</a>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
});

var BlogPage = React.createClass({
  clickBack () {
    this.props.onBackClick();
  },
  render: function() {
    return (
      <div>
        <a href="#" onClick={this.clickBack}>Back to home</a>
        <h1>{this.props.pageData.name}</h1>
      </div>
    )
  }
});

React.render(
  <Home/>,
  document.getElementById('root')
)