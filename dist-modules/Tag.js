'use strict';

var React = require('react');

var ItemTypes = { TAG: 'tag' };

var Tag = React.createClass({
  displayName: 'Tag',

  propTypes: {
    labelField: React.PropTypes.string,
    onDelete: React.PropTypes.func.isRequired,
    tag: React.PropTypes.object.isRequired,
    removeComponent: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      labelField: 'text'
    };
  },
  render: function render() {
    var label = this.props.tag[this.props.labelField];
    var CustomRemoveComponent = this.props.removeComponent;
    var RemoveComponent = React.createClass({
      displayName: 'RemoveComponent',

      render: function render() {
        if (CustomRemoveComponent) {
          return React.createElement(CustomRemoveComponent, this.props);
        }
        return React.createElement(
          'a',
          this.props,
          'x'
        );
      }
    });

    return React.createElement(
      'span',
      { className: 'ReactTags__tag' },
      label,
      React.createElement(RemoveComponent, { className: 'ReactTags__remove',
        onClick: this.props.onDelete })
    );
  }
});

module.exports = Tag;