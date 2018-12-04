var React = require('react');
var ReactDOM = require('react-dom');

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Hello React
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <CategoryList />,
  document.getElementById('root')
);
