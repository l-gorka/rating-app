import { useEffect, useMemo, useState } from 'react';
import { Form } from 'src/components/ui/Form';

import axiosInstance from'src/api/';

import { AddPhoto } from 'src/components/ui/AddPhoto';
import { AddCategory } from 'src/components/ui/AddCategory';
import { StarRating } from 'src/components/base/StarRating';
import { BaseSelect } from 'src/components/base/Select';
import { FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

import { Card, CardBody, Slider, Button, Divider, Selection } from '@nextui-org/react';

import RouteTransition from 'src/components/transition/RouteTransition';

import { fieldsConfig } from './config';
import CategoriesList from '../CategoriesList/CategoriesList';

export const AddItem = () => {
  const [rating, setRating] = useState([3]);
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState<Selection>(new Set());

  const [categoryError, setCategoryError] = useState('');

  useEffect(() => {
    setIsFormDisabled(!category.size);
  }, [category]);

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const categoriesList = useSelector((state) => state.categoriesList);

  const handleChangeCategory = (values: Selection) => {
    setCategoryError('');
    setCategory(values);
  };

  // ============================ FORM ===============================

  const [formData, setFormData] = useState([...fieldsConfig]);

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
    console.log('photo upload', e)
    setPhoto(e);
  }
  
  // ============================ SUBMIT FORM ===============================

  const handleSubmit = async() => {
    const itemObject: {[key: string]: string | number} = {}
    formData.forEach(({key, value}) => itemObject[key] = value)

    const categoryIndex = [...category][0]
    itemObject.category = categoriesList[categoryIndex].id
    itemObject.rating = rating[0]

    console.log(photo)
    if (photo) {
      console.log('has photo')
      itemObject.photo = await uploadPhoto()
    }

    const res = await axiosInstance.put('https://soxcn79a59.execute-api.eu-central-1.amazonaws.com/items', itemObject);
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
    console.log(data.url)
    return data.url
  }

  return (
    <RouteTransition compKey="details">
      <div className="relative mb-12 w-full aspect-square">
        <AddPhoto onUpload={handlePhotoUpload} />
        <Card
          isBlurred
          radius="lg"
          className="bg-background/40 w-48 absolute top-4/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-3xl"
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
            onClick={handleSubmit}
          >
            <span className="text-lg font-semibold tracking-wide">Add Item</span>
          </Button>
        </div>
      </div>
    </RouteTransition>
  );
};
