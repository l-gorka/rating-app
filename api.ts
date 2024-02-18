/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  items?: ModelItemConnection | null,
  fields?: ModelFieldConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  category: Category,
  title: string,
  rating: string,
  description?: string | null,
  image?: string | null,
  createdAt: string,
  type: string,
  updatedAt: string,
  categoryItemsId?: string | null,
  owner?: string | null,
};

export type ModelFieldConnection = {
  __typename: "ModelFieldConnection",
  items:  Array<Field | null >,
  nextToken?: string | null,
};

export type Field = {
  __typename: "Field",
  id: string,
  type: string,
  title?: string | null,
  category?: Category | null,
  fieldOptions?: ModelFieldOptionConnection | null,
  createdAt: string,
  updatedAt: string,
  categoryFieldsId?: string | null,
  owner?: string | null,
};

export type ModelFieldOptionConnection = {
  __typename: "ModelFieldOptionConnection",
  items:  Array<FieldOption | null >,
  nextToken?: string | null,
};

export type FieldOption = {
  __typename: "FieldOption",
  id: string,
  field?: Field | null,
  title?: string | null,
  type: string,
  color?: string | null,
  createdAt: string,
  updatedAt: string,
  fieldFieldOptionsId?: string | null,
  owner?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateFieldInput = {
  id?: string | null,
  type: string,
  title?: string | null,
  categoryFieldsId?: string | null,
};

export type ModelFieldConditionInput = {
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelFieldConditionInput | null > | null,
  or?: Array< ModelFieldConditionInput | null > | null,
  not?: ModelFieldConditionInput | null,
  categoryFieldsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFieldInput = {
  id: string,
  type?: string | null,
  title?: string | null,
  categoryFieldsId?: string | null,
};

export type DeleteFieldInput = {
  id: string,
};

export type CreateFieldOptionInput = {
  id?: string | null,
  title?: string | null,
  type: string,
  color?: string | null,
  fieldFieldOptionsId?: string | null,
};

export type ModelFieldOptionConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelFieldOptionConditionInput | null > | null,
  or?: Array< ModelFieldOptionConditionInput | null > | null,
  not?: ModelFieldOptionConditionInput | null,
  fieldFieldOptionsId?: ModelIDInput | null,
};

export type UpdateFieldOptionInput = {
  id: string,
  title?: string | null,
  type?: string | null,
  color?: string | null,
  fieldFieldOptionsId?: string | null,
};

export type DeleteFieldOptionInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  title: string,
  rating: string,
  description?: string | null,
  image?: string | null,
  createdAt?: string | null,
  type: string,
  categoryItemsId?: string | null,
};

export type ModelItemConditionInput = {
  title?: ModelStringInput | null,
  rating?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  categoryItemsId?: ModelIDInput | null,
};

export type UpdateItemInput = {
  id: string,
  title?: string | null,
  rating?: string | null,
  description?: string | null,
  image?: string | null,
  createdAt?: string | null,
  type?: string | null,
  categoryItemsId?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelFieldFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelFieldFilterInput | null > | null,
  or?: Array< ModelFieldFilterInput | null > | null,
  not?: ModelFieldFilterInput | null,
  categoryFieldsId?: ModelIDInput | null,
};

export type ModelFieldOptionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelFieldOptionFilterInput | null > | null,
  or?: Array< ModelFieldOptionFilterInput | null > | null,
  not?: ModelFieldOptionFilterInput | null,
  fieldFieldOptionsId?: ModelIDInput | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  rating?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  categoryItemsId?: ModelIDInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFieldFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFieldFilterInput | null > | null,
  or?: Array< ModelSubscriptionFieldFilterInput | null > | null,
};

export type ModelSubscriptionFieldOptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFieldOptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionFieldOptionFilterInput | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFieldMutationVariables = {
  input: CreateFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type CreateFieldMutation = {
  createField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFieldMutationVariables = {
  input: UpdateFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type UpdateFieldMutation = {
  updateField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFieldMutationVariables = {
  input: DeleteFieldInput,
  condition?: ModelFieldConditionInput | null,
};

export type DeleteFieldMutation = {
  deleteField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateFieldOptionMutationVariables = {
  input: CreateFieldOptionInput,
  condition?: ModelFieldOptionConditionInput | null,
};

export type CreateFieldOptionMutation = {
  createFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFieldOptionMutationVariables = {
  input: UpdateFieldOptionInput,
  condition?: ModelFieldOptionConditionInput | null,
};

export type UpdateFieldOptionMutation = {
  updateFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFieldOptionMutationVariables = {
  input: DeleteFieldOptionInput,
  condition?: ModelFieldOptionConditionInput | null,
};

export type DeleteFieldOptionMutation = {
  deleteFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFieldQueryVariables = {
  id: string,
};

export type GetFieldQuery = {
  getField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFieldsQueryVariables = {
  filter?: ModelFieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFieldsQuery = {
  listFields?:  {
    __typename: "ModelFieldConnection",
    items:  Array< {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFieldOptionQueryVariables = {
  id: string,
};

export type GetFieldOptionQuery = {
  getFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFieldOptionsQueryVariables = {
  filter?: ModelFieldOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFieldOptionsQuery = {
  listFieldOptions?:  {
    __typename: "ModelFieldOptionConnection",
    items:  Array< {
      __typename: "FieldOption",
      id: string,
      title?: string | null,
      type: string,
      color?: string | null,
      createdAt: string,
      updatedAt: string,
      fieldFieldOptionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      rating: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      type: string,
      updatedAt: string,
      categoryItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByDateQuery = {
  itemsByDate?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      rating: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      type: string,
      updatedAt: string,
      categoryItemsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    fields?:  {
      __typename: "ModelFieldConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnCreateFieldSubscription = {
  onCreateField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFieldSubscription = {
  onUpdateField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFieldSubscriptionVariables = {
  filter?: ModelSubscriptionFieldFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFieldSubscription = {
  onDeleteField?:  {
    __typename: "Field",
    id: string,
    type: string,
    title?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    fieldOptions?:  {
      __typename: "ModelFieldOptionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryFieldsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFieldOptionSubscriptionVariables = {
  filter?: ModelSubscriptionFieldOptionFilterInput | null,
  owner?: string | null,
};

export type OnCreateFieldOptionSubscription = {
  onCreateFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFieldOptionSubscriptionVariables = {
  filter?: ModelSubscriptionFieldOptionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFieldOptionSubscription = {
  onUpdateFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFieldOptionSubscriptionVariables = {
  filter?: ModelSubscriptionFieldOptionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFieldOptionSubscription = {
  onDeleteFieldOption?:  {
    __typename: "FieldOption",
    id: string,
    field?:  {
      __typename: "Field",
      id: string,
      type: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryFieldsId?: string | null,
      owner?: string | null,
    } | null,
    title?: string | null,
    type: string,
    color?: string | null,
    createdAt: string,
    updatedAt: string,
    fieldFieldOptionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    title: string,
    rating: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    type: string,
    updatedAt: string,
    categoryItemsId?: string | null,
    owner?: string | null,
  } | null,
};
