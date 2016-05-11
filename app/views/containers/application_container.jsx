import React       from 'react';

class ApplicationContainer extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

ApplicationContainer.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default ApplicationContainer;
