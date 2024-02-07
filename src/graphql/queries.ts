/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    title
    category {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    categoryPostsId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      updatedAt
      categoryPostsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
