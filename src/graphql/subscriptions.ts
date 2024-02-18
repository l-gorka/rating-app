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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateField = /* GraphQL */ `subscription OnCreateField(
  $filter: ModelSubscriptionFieldFilterInput
  $owner: String
) {
  onCreateField(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFieldSubscriptionVariables,
  APITypes.OnCreateFieldSubscription
>;
export const onUpdateField = /* GraphQL */ `subscription OnUpdateField(
  $filter: ModelSubscriptionFieldFilterInput
  $owner: String
) {
  onUpdateField(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFieldSubscriptionVariables,
  APITypes.OnUpdateFieldSubscription
>;
export const onDeleteField = /* GraphQL */ `subscription OnDeleteField(
  $filter: ModelSubscriptionFieldFilterInput
  $owner: String
) {
  onDeleteField(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFieldSubscriptionVariables,
  APITypes.OnDeleteFieldSubscription
>;
export const onCreateFieldOption = /* GraphQL */ `subscription OnCreateFieldOption(
  $filter: ModelSubscriptionFieldOptionFilterInput
  $owner: String
) {
  onCreateFieldOption(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFieldOptionSubscriptionVariables,
  APITypes.OnCreateFieldOptionSubscription
>;
export const onUpdateFieldOption = /* GraphQL */ `subscription OnUpdateFieldOption(
  $filter: ModelSubscriptionFieldOptionFilterInput
  $owner: String
) {
  onUpdateFieldOption(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFieldOptionSubscriptionVariables,
  APITypes.OnUpdateFieldOptionSubscription
>;
export const onDeleteFieldOption = /* GraphQL */ `subscription OnDeleteFieldOption(
  $filter: ModelSubscriptionFieldOptionFilterInput
  $owner: String
) {
  onDeleteFieldOption(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFieldOptionSubscriptionVariables,
  APITypes.OnDeleteFieldOptionSubscription
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
    type
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
    type
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
    type
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
