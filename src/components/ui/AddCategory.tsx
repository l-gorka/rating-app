import { Divider, Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCategory = ({ isOpen, onClose }: AddCategoryProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="bottom" className='mb-24'>
      <ModalContent>
        <ModalHeader>Add category</ModalHeader>
        <ModalBody className="p-6">
          <Input variant="bordered" label="name" required />
        </ModalBody>
        <Divider />
        <ModalFooter className='gap-5'>
          <Button variant="light" size='lg' onClick={onClose}>
            Cancel
          </Button>
          <Button color="warning" variant="bordered" size='lg' radius='sm' onClick={onClose}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
