import React from 'react';
import DocumentTitle from 'react-document-title';
require('dotenv').load();

import {TypographyStyle} from './utils/typography';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      body: ""
    };
  },

  render: function() {
    var title, urlPrefix;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }
    if ((typeof __GH_PAGES__ !== "undefined" && __GH_PAGES__ !== null) && __GH_PAGES__) {
      urlPrefix = this.props.config.ghPagesURLPrefix;
    } else {
      urlPrefix = "";
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <TypographyStyle/>
          <style dangerouslySetInnerHTML={{__html:
            `
              a {
                color: #f2edf4;
              }
              pre {
                background: whitesmoke;
                padding: 1.5rem;
              }
            `
          }} />
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={`${urlPrefix}/bundle.js`}/>
        </body>
      </html>
    );
  }
});
