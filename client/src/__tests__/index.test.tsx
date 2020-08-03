import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";
import { getMockState } from "../test-data/mockState";
import { MockedProvider } from "@apollo/client/testing";
import { GetReposDocument } from "../graphql/graphql";

const mockStore = configureMockStore();

describe("shell: ", () => {
  it("renders correctly", () => {
    mockdate.set(1593118700000);
    const store = getMockState();

    const storeProvider = mockStore(store);

    const apolloMocks: any = [
      {
        request: {
          query: GetReposDocument,
          variables: {
            name: "Buck",
          },
        },
        result: {
          data: {
            dog: { id: "1", name: "Buck", breed: "bulldog" },
          },
        },
      },
    ];

    const wrapper = mount(
      (
        <Provider store={storeProvider}>
          <MockedProvider addTypename={false} mocks={apolloMocks}>
            <div>empty</div>
          </MockedProvider>
        </Provider>
      ) as any
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
