import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import "jsdom-global/register";
import mockdate from "mockdate";
import { MockedProvider } from "@apollo/client/testing";
import { GetReposDocument } from "../graphql/graphql";
import ReposContainer from "../components/ReposContainer";
import { act } from "react-dom/test-utils";

describe("repos container", () => {
  it("should render component with children", async () => {
    mockdate.set(1593118700000);

    const apolloMocks: any = [
      {
        request: {
          query: GetReposDocument,
          variables: {
            queryString: "test",
            repos: 10,
          },
        },
        result: {
          data: {
            search: {
              repositoryCount: 4564611,
              edges: [
                {
                  node: {
                    name: "pytest",
                    url: "https://github.com/pytest-dev/pytest",
                    description:
                      "The pytest framework makes it easy to write small tests, yet scales to support complex functional testing",
                    createdAt: "2015-06-15T20:28:27Z",
                    pushedAt: "2020-08-03T18:10:42Z",
                    updatedAt: "2020-08-03T16:32:42Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "uiautomator2",
                    url: "https://github.com/openatx/uiautomator2",
                    description: "Android Uiautomator2 Python Wrapper",
                    createdAt: "2017-09-17T12:20:42Z",
                    pushedAt: "2020-08-03T11:35:16Z",
                    updatedAt: "2020-08-03T11:08:54Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "gremlins.js",
                    url: "https://github.com/marmelab/gremlins.js",
                    description:
                      "Monkey testing library for web apps and Node.js",
                    createdAt: "2013-10-21T08:47:12Z",
                    pushedAt: "2020-07-21T16:03:16Z",
                    updatedAt: "2020-08-01T08:42:02Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "jest",
                    url: "https://github.com/facebook/jest",
                    description: "Delightful JavaScript Testing.",
                    createdAt: "2013-12-10T00:18:04Z",
                    pushedAt: "2020-08-03T16:36:57Z",
                    updatedAt: "2020-08-03T15:42:50Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "java-testdata-generator",
                    url:
                      "https://github.com/binarywang/java-testdata-generator",
                    description:
                      "使用Java实现的各种测试数据的随机生成工具，包括身份证号码，银行卡号，姓名，手机号等",
                    createdAt: "2016-01-21T05:45:44Z",
                    pushedAt: "2020-07-02T03:53:42Z",
                    updatedAt: "2020-07-22T08:29:14Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "tcpcopy",
                    url: "https://github.com/session-replay-tools/tcpcopy",
                    description:
                      "An online request replication tool, also a tcp stream replay tool, fit for real testing, performance testing, stability testing, stress testing, load testing, smoke testing, etc",
                    createdAt: "2011-10-14T08:15:19Z",
                    pushedAt: "2019-07-09T17:00:37Z",
                    updatedAt: "2020-08-02T17:48:42Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "timecop",
                    url: "https://github.com/travisjeffery/timecop",
                    description:
                      'A gem providing "time travel", "time freezing", and "time acceleration" capabilities, making it simple to test time-dependent code. It provides a unified method to mock Time.now, Date.today, and DateTime.now in a single call.',
                    createdAt: "2008-11-07T20:37:52Z",
                    pushedAt: "2020-07-31T06:19:27Z",
                    updatedAt: "2020-08-03T03:29:37Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "minitest",
                    url: "https://github.com/seattlerb/minitest",
                    description:
                      "minitest provides a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking.",
                    createdAt: "2009-02-18T07:40:21Z",
                    pushedAt: "2020-05-18T07:21:54Z",
                    updatedAt: "2020-08-02T04:49:01Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "stressTestPlatform",
                    url: "https://github.com/zyanycall/stressTestPlatform",
                    description: "基于Jmeter实现的在线压测和管理Jmx的平台",
                    createdAt: "2015-08-14T02:01:09Z",
                    pushedAt: "2020-07-10T02:06:55Z",
                    updatedAt: "2020-07-31T08:44:45Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "redux-mock-store",
                    url: "https://github.com/reduxjs/redux-mock-store",
                    description:
                      "A mock store for testing Redux async action creators and middleware.",
                    createdAt: "2015-10-26T17:04:37Z",
                    pushedAt: "2020-04-08T09:52:46Z",
                    updatedAt: "2020-08-03T10:13:01Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
              ],
              __typename: "SearchResultItemConnection",
            },
          },
        },
      },
    ];

    let wrapper: any;
    await act(async () => {
      wrapper = mount(
        (
          <MockedProvider mocks={apolloMocks}>
            <ReposContainer queryStringProp="test" />
          </MockedProvider>
        ) as any
      );
      wrapper.update();
      await new Promise((resolve) => setTimeout(resolve));
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
