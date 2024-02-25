import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'src/components/ui/Form';

import { AddPhoto } from 'src/components/ui/AddPhoto';
import { StarRating } from 'src/components/base/StarRating';
import { BaseSelect } from 'src/components/base/Select';
import { FaPlus } from 'react-icons/fa6';
import { createItem } from 'src/graphql/mutations';

import { fetchAllItems } from 'src/store/reducers';
import { useAppDispatch } from 'src/store/configureStore';

import { useSelector } from 'react-redux';

import client from 'src/api';

import { CreateItemInput } from 'api.ts';

import { Card, CardBody, Slider, Button, Divider, Selection } from '@nextui-org/react';

import RouteTransition from 'src/components/transition/RouteTransition';

import { createFormData } from 'src/utils/formUtils';

export const AddItem = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [rating, setRating] = useState([3]);
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

  const [formData, setFormData] = useState<any>([]);

  useEffect(() => {
    if (category.size) {
      const savedData = categoriesList[[...category][0]]?.fields;
      const newFormData = createFormData(savedData);

      setFormData(newFormData);
    }
  }, [category]);

  const handleChange = (key, updatedField) => {
    const newFormData = [...formData].map((field) => {
      if (field.key === key) {
        return { ...field, config: updatedField };
      }

      return field;
    });

    setFormData(newFormData);
  };

  // =============================== PHOTO ===============================

  const [photo, setPhoto] = useState<File | null>(null);
  const handlePhotoUpload = (e: File) => {
    setPhoto(e);
  };

  // ============================ SUBMIT FORM ===============================
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!category.size) {
      setCategoryError('Please select a category');
      return;
    }

    // validateFields();

    if (formData.some((field) => field.errorMessage)) {
      return;
    }

    const itemObject: Partial<CreateItemInput> = {};
    itemObject.title = formData[0].config.value;
    const categoryIndex = [...category][0];
    itemObject.categoryItemsId = categoriesList[categoryIndex].id;
    itemObject.rating = String(rating[0]);
    
    const fieldsArray = JSON.stringify(formData.slice(1).map((field) => ({type: field.type, config: field.config})));
    itemObject.fieldsData = fieldsArray;
    setIsLoading(true);

    if (photo) {
      itemObject.image = await uploadPhoto();
    }

    itemObject.type = 'Item';

    const res = await client.graphql({
      query: createItem,
      variables: {
        input: itemObject,
      },
    });

    setIsLoading(false);
    dispatch(fetchAllItems());
    navigate('/');
  };

  const uploadPhoto = async () => {
    const url = 'https://api.cloudinary.com/v1_1/dgmcox/image/upload';

    const formData = new FormData();
    formData.append('file', photo as File);
    formData.append('upload_preset', 'xhxobeys');

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    return data.url;
  };

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.id) {
      const selectedCategory = categoriesList.findIndex((category) => category.id === location.state.id);

      if (selectedCategory === -1) {
        return;
      }

      const selection = new Set([String(selectedCategory)]) as Selection;

      setCategory(selection);
    }
  }, []);

  return (
    <RouteTransition transitionKey="addItem">
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
            <Button
              onClick={() => navigate('/add-category')}
              isIconOnly
              radius="sm"
              variant="bordered"
              className="h-16 w-20"
            >
              <FaPlus size={20} />
            </Button>
          </div>
          {formData.length > 0 && (
            <div>
              <Divider className="mx-auto my-4 w-11/12" />
              <Form formData={formData} isDisabled={isFormDisabled} handleChange={handleChange} />
            </div>
          )}
        </div>
        <Divider className="mx-auto my-4 w-11/12" />
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
