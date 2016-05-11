import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';
import Routes                  from 'app/views/routes';

// Apply the base styles for ALL the app
import 'app/assets/stylesheets/base';

// Make sure the static_content gets added to the bundle
import 'app/assets/static_content';

class Root extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<Routes />);
  }
}


ReactDOM.render(<Root/>, document.getElementById('reactApplication'));
