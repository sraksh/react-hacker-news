import React from "react";
import { shallow } from 'enzyme';
import VoteChart from "../components/VoteChart/VoteChart";

it("renders VoteChart without crashing", () => {
  shallow(<VoteChart />);
});
