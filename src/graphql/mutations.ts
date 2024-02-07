/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
