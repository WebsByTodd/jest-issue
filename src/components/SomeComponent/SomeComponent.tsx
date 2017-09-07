import * as React from "react";
const html = require("./index.html");

class SomeComponent extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
		return (
    	<p dangerouslySetInnerHTML={html} />
		);
  }
}

export default SomeComponent;
