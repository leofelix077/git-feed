import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";
import { getMockState } from "../test-data/mockState";

const mockStore = configureMockStore();

describe("shell: ", () => {
  it("renders correctly", () => {
    mockdate.set(1593118700000);
    const store = getMockState();

    const storeProvider = mockStore(store);

    const wrapper = mount(
      (
        <Provider store={storeProvider}>
          <div>empty</div>
        </Provider>
      ) as any
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
