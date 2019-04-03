import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import { Search } from "./SearchBar";

describe("SearchBar Component", function() {
  it("should render search input field", function() {
    const wrapper = shallow(<Search />, {
      disableLifecycleMethods: true
    });
    expect(wrapper.find("input")).to.have.lengthOf(1);
  });
});
