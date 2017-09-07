import * as React from "react";
import * as renderer from "react-test-renderer";

import SomeComponent from "./SomeComponent";

test("SomeComponent renders", () => {
	const tree = renderer.create(<SomeComponent />).toJSON();
	expect(tree).toMatchSnapshot();
});
