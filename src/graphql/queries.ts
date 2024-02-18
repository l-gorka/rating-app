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
    fields {
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
export const getField = /* GraphQL */ `query GetField($id: ID!) {
  getField(id: $id) {
    id
    type
    title
    category {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    fieldOptions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    categoryFieldsId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFieldQueryVariables, APITypes.GetFieldQuery>;
export const listFields = /* GraphQL */ `query ListFields(
  $filter: ModelFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      title
      createdAt
      updatedAt
      categoryFieldsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFieldsQueryVariables,
  APITypes.ListFieldsQuery
>;
export const getFieldOption = /* GraphQL */ `query GetFieldOption($id: ID!) {
  getFieldOption(id: $id) {
    id
    field {
      id
      type
      title
      createdAt
      updatedAt
      categoryFieldsId
      owner
      __typename
    }
    title
    type
    color
    createdAt
    updatedAt
    fieldFieldOptionsId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFieldOptionQueryVariables,
  APITypes.GetFieldOptionQuery
>;
export const listFieldOptions = /* GraphQL */ `query ListFieldOptions(
  $filter: ModelFieldOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listFieldOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      type
      color
      createdAt
      updatedAt
      fieldFieldOptionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFieldOptionsQueryVariables,
  APITypes.ListFieldOptionsQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    category {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    title
    rating
    description
    image
    createdAt
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
      description
      image
      createdAt
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
      description
      image
      createdAt
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
