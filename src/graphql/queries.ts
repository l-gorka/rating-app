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
    items {
      nextToken
      __typename
    }
    fields
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
      fields
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
    category {
      id
      name
      fields
      createdAt
      updatedAt
      owner
      __typename
    }
    title
    rating
    image
    createdAt
    fieldsData
    type
    updatedAt
    categoryItemsId
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
      rating
      image
      createdAt
      fieldsData
      type
      updatedAt
      categoryItemsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const itemsByDate = /* GraphQL */ `query ItemsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      rating
      image
      createdAt
      fieldsData
      type
      updatedAt
      categoryItemsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByDateQueryVariables,
  APITypes.ItemsByDateQuery
>;
