import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'src/components/ui/Form';

import { AddPhoto } from 'src/components/ui/AddPhoto';
import { AddCategory } from 'src/components/ui/AddCategory';
import { StarRating } from 'src/components/base/StarRating';
import { BaseSelect } from 'src/components/base/Select';
import { FaPlus } from 'react-icons/fa6';
import { createItem } from 'src/graphql/mutations';

import { fetchAllItems, fetchCategories } from 'src/store/reducers';
import { useAppDispatch } from 'src/store/configureStore';

import { useSelector } from 'react-redux';

import client from 'src/api'

import {CreateItemInput } from 'api.ts'

import { Card, CardBody, Slider, Button, Divider, Selection } from '@nextui-org/react';

import RouteTransition from 'src/components/transition/RouteTransition';

import { fieldsConfig } from './config';

export const AddItem = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [rating, setRating] = useState([3]);
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState<Selection>(new Set());
  const categoriesList = useSelector((state) => state.categoriesList);

  const [categoryError, setCategoryError] = useState('');

  useEffect(() => {
    setIsFormDisabled(!category.size);

  }, [category]);

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  // const categoriesList = useSelector((state) => state.categoriesList);

  const handleChangeCategory = (values: Selection) => {
    setCategoryError('');
    setCategory(values);
  };

  // ============================ FORM ===============================

  const [formData, setFormData] = useState<any>([...fieldsConfig]);

  const onChange = (key: string, value: string) => {
    updateField(key, value, false);
  }

  const onBlur = (key: string, value: string) => {
    updateField(key, value, true);
  }

  const updateField = (key: string, value: string, isValidated: boolean) => {
    const fieldIndex = formData.findIndex((field) => field.key === key);
    const updatedField = {...formData[fieldIndex] };

    let errorMessage = '';

    if (isValidated && updatedField?.validation) {
      errorMessage = updatedField.validation.testFunction(value);
    }

    const updatedFormData = [...formData];
    updatedFormData[fieldIndex] = { ...updatedField, errorMessage, value };
    setFormData(updatedFormData);
  }

  const validateFields = () => {
    const updatedFields = [...formData].map((field) => {
      if (field.validation) {
        return {
       ...field,
          errorMessage: field.validation.testFunction(field.value),
        };
      }

      return field;
    })

    setFormData(updatedFields);
  }

  // =============================== PHOTO ===============================

  
  const [photo, setPhoto] = useState<File | null>(null);
  const handlePhotoUpload = (e: File) => {
    setPhoto(e);
  }
  
  // ============================ SUBMIT FORM ===============================
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async() => {
    if (!category.size) {
      setCategoryError('Please select a category');
      return;
    }

    validateFields();

    if (formData.some((field) => field.errorMessage)) {
      return;
    }

    const itemObject: Partial<CreateItemInput> = {}
    formData.forEach(({key, value}: {key: keyof CreateItemInput, value: string}) => itemObject[key] = value)

    const categoryIndex = [...category][0]
    itemObject.categoryItemsId = categoriesList[categoryIndex].id
    itemObject.rating = String(rating[0])

    setIsLoading(true);

    if (photo) {
      itemObject.image = await uploadPhoto()
    }

    const res = await client.graphql({
      query: createItem,
      variables: {
        input: itemObject
      }
    });

    setIsLoading(false);
    dispatch(fetchAllItems());
    navigate('/');
  }

  const uploadPhoto = async() => {
    const url = 'https://api.cloudinary.com/v1_1/dgmcox/image/upload'
    
    const formData = new FormData();
    formData.append('file', photo as File);
    formData.append('upload_preset', 'xhxobeys');

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    return data.url
  }

  return (
    <RouteTransition compKey="details">
      <div className="relative mb-12 w-full aspect-square">
        <AddPhoto onUpload={handlePhotoUpload} />
        <Card
          isBlurred
          radius="lg"
          className="bg-background/40 w-48 absolute top-4/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl"
        >
          <CardBody>
            <p className=" text-8xl text-center mb-2">{rating[0].toFixed(1)}</p>
          </CardBody>
        </Card>
      </div>
      <div className="p-4">
        <StarRating rating={rating[0]} />
        <div className="p-5">
          <Slider
            aria-label="Change the rating"
            step={0.1}
            maxValue={5}
            minValue={1}
            value={rating}
            size="lg"
            color="warning"
            onChange={(e) => setRating(e)}
          />
        </div>
        <div className="mt-8">
          <div className="flex gap-2 mb-4">
            <BaseSelect
              label="Category"
              options={categoriesList.map((category) => ({
                textValue: category.name,
                label: category.name,
                value: category.id,
              }))}
              required
              value={category}
              errorMessage={categoryError}
              onChange={handleChangeCategory}
            />
            <Button onClick={() => setModalOpen(true)} isIconOnly radius="sm" variant="bordered" className="h-16 w-20">
              <FaPlus size={20} />
            </Button>
          </div>
          <Form config={formData} isDisabled={isFormDisabled} onBlur={onBlur} onChange={onChange} />
        </div>
        <Divider className="mx-auto my-4 w-11/12" />
        <AddCategory isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full h-16"
            variant="bordered"
            color="warning"
            radius="sm"
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            <span className="text-lg font-semibold tracking-wide">Add Item</span>
          </Button>
        </div>
      </div>
    </RouteTransition>
  );
};
