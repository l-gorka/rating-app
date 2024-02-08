/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onCreateCategory(filter: $filter, owner: $owner) {
    id
    name
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onUpdateCategory(filter: $filter, owner: $owner) {
    id
    name
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onDeleteCategory(filter: $filter, owner: $owner) {
    id
    name
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onCreateItem(filter: $filter, owner: $owner) {
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
    updatedAt
    categoryItemsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onUpdateItem(filter: $filter, owner: $owner) {
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
    updatedAt
    categoryItemsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onDeleteItem(filter: $filter, owner: $owner) {
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
    updatedAt
    categoryItemsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
