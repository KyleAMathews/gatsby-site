import React from 'react';
import CountdownClock from './_Demo';
import DocumentTitle from 'react-document-title';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Some React Code"
      };
    }
  },

  render: function() {
    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <h1>React Countdown Clock</h1>
          <div
            style={{
              height: 500
            }}
          >
            <CountdownClock/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
});
