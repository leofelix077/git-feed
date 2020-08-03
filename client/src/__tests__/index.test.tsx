import React from "react";
import { mount, shallow } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";
import { getMockState } from "../test-data/mockState";
import { MockedProvider } from "@apollo/client/testing";
import { GetReposDocument } from "../graphql/graphql";
import ReposContainer from "../components/ReposContainer";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/react";

const mockStore = configureMockStore();

describe("shell: ", () => {
  it("renders correctly", async () => {
    mockdate.set(1593118700000);
    const store = getMockState();

    const storeProvider = mockStore(store);

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
              repositoryCount: 3534879,
              edges: [
                {
                  node: {
                    name: "skyrimse",
                    url: "https://github.com/loot/skyrimse",
                    description:
                      "The TES V: Skyrim Special Edition masterlist.",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: {
                            name: "skyrim-special-edition",
                            __typename: "Topic",
                          },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "modding", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "metadata", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: null,
                    languages: { nodes: [], __typename: "LanguageConnection" },
                    releases: {
                      totalCount: 0,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 52,
                    pullRequests: {
                      totalCount: 858,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 65,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 332, __typename: "IssueConnection" },
                    createdAt: "2016-10-28T19:39:58Z",
                    pushedAt: "2020-07-28T16:26:18Z",
                    updatedAt: "2020-07-28T16:26:21Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "openmw",
                    url: "https://github.com/OpenMW/openmw",
                    description:
                      "OpenMW is an open-source open-world RPG game engine that supports playing Morrowind.",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "openmw", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "c-plus-plus", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "rpg-engine", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "tes", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "morrowind", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "foss", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "open-source", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "C++", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "Shell", __typename: "Language" },
                        { name: "CMake", __typename: "Language" },
                        { name: "C++", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 22,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 782,
                    pullRequests: {
                      totalCount: 2972,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 3281,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 0, __typename: "IssueConnection" },
                    createdAt: "2009-08-23T14:46:21Z",
                    pushedAt: "2020-08-03T11:10:36Z",
                    updatedAt: "2020-08-03T11:10:41Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "tes",
                    url: "https://github.com/iamclaytonray/tes",
                    description: "A Node/Express server written in TypeScript.",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "typescript", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "node", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "express", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "mongodb", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: {
                      name: "TypeScript",
                      __typename: "Language",
                    },
                    languages: {
                      nodes: [{ name: "TypeScript", __typename: "Language" }],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 0,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 50,
                    pullRequests: {
                      totalCount: 2,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 82,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 5, __typename: "IssueConnection" },
                    createdAt: "2017-05-03T12:25:21Z",
                    pushedAt: "2018-12-12T12:49:02Z",
                    updatedAt: "2020-05-23T14:41:34Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "tedana",
                    url: "https://github.com/ME-ICA/tedana",
                    description: "TE-dependent analysis of multi-echo fMRI",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "python", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "fmri", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "neuroimaging", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "brain-imaging", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "Python", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "Python", __typename: "Language" },
                        { name: "Shell", __typename: "Language" },
                        { name: "Makefile", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 12,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 61,
                    pullRequests: {
                      totalCount: 314,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 110,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 274, __typename: "IssueConnection" },
                    createdAt: "2017-11-15T14:45:02Z",
                    pushedAt: "2020-08-02T17:56:33Z",
                    updatedAt: "2020-08-02T17:56:36Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "roast",
                    url: "https://github.com/andypotatohy/roast",
                    description: "A simulator for TES",
                    repositoryTopics: {
                      nodes: [],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "MATLAB", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "MATLAB", __typename: "Language" },
                        { name: "Shell", __typename: "Language" },
                        { name: "C", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 1,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 12,
                    pullRequests: {
                      totalCount: 22,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 14,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 2, __typename: "IssueConnection" },
                    createdAt: "2017-11-15T23:03:37Z",
                    pushedAt: "2020-06-19T19:36:08Z",
                    updatedAt: "2020-06-19T18:29:02Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "EDTA",
                    url: "https://github.com/oushujun/EDTA",
                    description: "Extensive de-novo TE Annotator ",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: {
                            name: "transposable-elements",
                            __typename: "Topic",
                          },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: {
                            name: "genome-annotation",
                            __typename: "Topic",
                          },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "benchmarking", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "pipeline", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "Perl", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "Perl", __typename: "Language" },
                        { name: "Shell", __typename: "Language" },
                        { name: "Python", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 8,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 24,
                    pullRequests: {
                      totalCount: 7,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 92,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 89, __typename: "IssueConnection" },
                    createdAt: "2019-05-23T20:15:30Z",
                    pushedAt: "2020-04-30T21:57:15Z",
                    updatedAt: "2020-08-02T03:30:58Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "tesseract",
                    url: "https://github.com/tesseract-ocr/tesseract",
                    description:
                      "Tesseract Open Source OCR Engine (main repository)",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "tesseract", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "tesseract-ocr", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "ocr", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "lstm", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: {
                            name: "machine-learning",
                            __typename: "Topic",
                          },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "ocr-engine", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "C++", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "C++", __typename: "Language" },
                        { name: "C", __typename: "Language" },
                        { name: "Shell", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 8,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 6640,
                    pullRequests: {
                      totalCount: 1177,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 35746,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 1880, __typename: "IssueConnection" },
                    createdAt: "2014-08-12T18:04:59Z",
                    pushedAt: "2020-07-31T18:08:31Z",
                    updatedAt: "2020-08-03T16:14:54Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "cwl-tes",
                    url: "https://github.com/ohsu-comp-bio/cwl-tes",
                    description:
                      "cwl-tes submits your tasks to a TES server. Task submission is parallelized when possible.",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "cwl", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "Python", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "Python", __typename: "Language" },
                        { name: "Shell", __typename: "Language" },
                        {
                          name: "Common Workflow Language",
                          __typename: "Language",
                        },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 3,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 14,
                    pullRequests: {
                      totalCount: 28,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 13,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 13, __typename: "IssueConnection" },
                    createdAt: "2017-06-01T12:17:34Z",
                    pushedAt: "2020-07-25T05:05:27Z",
                    updatedAt: "2020-06-29T15:05:40Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "TES5Edit",
                    url: "https://github.com/TES5Edit/TES5Edit",
                    description:
                      "xEdit by Elminster; Updated and maintained by Sharlikran, Zilav, and Hlp",
                    repositoryTopics: {
                      nodes: [],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "Pascal", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "C++", __typename: "Language" },
                        { name: "Pascal", __typename: "Language" },
                        { name: "PHP", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 21,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 72,
                    pullRequests: {
                      totalCount: 113,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 360,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 733, __typename: "IssueConnection" },
                    createdAt: "2015-05-13T13:37:58Z",
                    pushedAt: "2020-07-31T03:02:37Z",
                    updatedAt: "2020-08-03T13:42:50Z",
                    __typename: "Repository",
                  },
                  __typename: "SearchResultItemEdge",
                },
                {
                  node: {
                    name: "SkyrimSETest",
                    url: "https://github.com/Nukem9/SkyrimSETest",
                    description:
                      "Reverse engineering TES: Skyrim Special Edition.",
                    repositoryTopics: {
                      nodes: [
                        {
                          topic: { name: "skyrim", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: {
                            name: "skyrim-special-edition",
                            __typename: "Topic",
                          },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "mod", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                        {
                          topic: { name: "game", __typename: "Topic" },
                          __typename: "RepositoryTopic",
                        },
                      ],
                      __typename: "RepositoryTopicConnection",
                    },
                    primaryLanguage: { name: "C++", __typename: "Language" },
                    languages: {
                      nodes: [
                        { name: "C++", __typename: "Language" },
                        { name: "C", __typename: "Language" },
                        { name: "C#", __typename: "Language" },
                      ],
                      __typename: "LanguageConnection",
                    },
                    releases: {
                      totalCount: 0,
                      __typename: "ReleaseConnection",
                    },
                    forkCount: 7,
                    pullRequests: {
                      totalCount: 2,
                      __typename: "PullRequestConnection",
                    },
                    stargazers: {
                      totalCount: 54,
                      __typename: "StargazerConnection",
                    },
                    issues: { totalCount: 19, __typename: "IssueConnection" },
                    createdAt: "2016-11-18T23:04:11Z",
                    pushedAt: "2020-07-05T00:51:32Z",
                    updatedAt: "2020-07-22T01:34:45Z",
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

    const wrapper = mount(
      (
        <MockedProvider mocks={apolloMocks}>
          <ReposContainer queryStringProp="test" />
        </MockedProvider>
      ) as any
    );

    wrapper.update();

    await new Promise((resolve) => setTimeout(resolve));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
