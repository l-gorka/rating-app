import { Divider, Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useState, ChangeEvent } from 'react';
import axiosInstance from 'src/api';
import axios from 'axios';

interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCategory = ({ isOpen, onClose }: AddCategoryProps) => {
  const [state, setState] = useState({
    name: '',
    error: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onBlur = () => {
    const errorMsg = state.name.length < 3 ? 'Name must be at least 3 characters' : '';

    setState({
      ...state,
      error: errorMsg,
    });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      error: '',
      name: (e.target as HTMLInputElement).value,
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      await axiosInstance.post('/add-category', { name: state.name });
      onClose();

      setState({
        name: '',
        error: '',
      });
    }
      catch (err: unknown) {
        if (axios.isAxiosError(err))  {
          setState({
            ...state,
             error: err.response?.data.error,
          })
        } else {
          console.error(err)
        }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="bottom" className="mb-24">
      <ModalContent>
        <ModalHeader>Add category</ModalHeader>
        <ModalBody className="p-6 ">
          <div className="h-24 grid place-items-center">
            <Input
              variant="bordered"
              label="Name"
              placeholder="Enter category name"
              labelPlacement="inside"
              required
              value={state.name}
              errorMessage={state.error}
              isInvalid={!!state.error}
              onChange={(e) => onChangeName(e)}
              onBlur={onBlur}
              onKeyDown={(e) => e.key === 'Enter' && onBlur()}
              onKeyUp={(e) => e.key === 'Enter' && !state.error && handleSave()}
            />
          </div>
        </ModalBody>
        <Divider />
        <ModalFooter className="gap-5">
          <Button variant="light" size="lg" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color="warning"
            variant="bordered"
            size="lg"
            radius="sm"
            className='w-32'
            isLoading={isLoading}
            isDisabled={!state.name || !!state.error}
            onClick={handleSave}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
