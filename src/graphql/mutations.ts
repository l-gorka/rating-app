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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createField = /* GraphQL */ `mutation CreateField(
  $input: CreateFieldInput!
  $condition: ModelFieldConditionInput
) {
  createField(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFieldMutationVariables,
  APITypes.CreateFieldMutation
>;
export const updateField = /* GraphQL */ `mutation UpdateField(
  $input: UpdateFieldInput!
  $condition: ModelFieldConditionInput
) {
  updateField(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFieldMutationVariables,
  APITypes.UpdateFieldMutation
>;
export const deleteField = /* GraphQL */ `mutation DeleteField(
  $input: DeleteFieldInput!
  $condition: ModelFieldConditionInput
) {
  deleteField(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFieldMutationVariables,
  APITypes.DeleteFieldMutation
>;
export const createFieldOption = /* GraphQL */ `mutation CreateFieldOption(
  $input: CreateFieldOptionInput!
  $condition: ModelFieldOptionConditionInput
) {
  createFieldOption(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFieldOptionMutationVariables,
  APITypes.CreateFieldOptionMutation
>;
export const updateFieldOption = /* GraphQL */ `mutation UpdateFieldOption(
  $input: UpdateFieldOptionInput!
  $condition: ModelFieldOptionConditionInput
) {
  updateFieldOption(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFieldOptionMutationVariables,
  APITypes.UpdateFieldOptionMutation
>;
export const deleteFieldOption = /* GraphQL */ `mutation DeleteFieldOption(
  $input: DeleteFieldOptionInput!
  $condition: ModelFieldOptionConditionInput
) {
  deleteFieldOption(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFieldOptionMutationVariables,
  APITypes.DeleteFieldOptionMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
