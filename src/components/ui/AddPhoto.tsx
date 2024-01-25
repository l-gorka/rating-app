import { ChangeEvent, useState } from 'react';

import { Card, Image } from '@nextui-org/react';
import { IoCameraOutline } from 'react-icons/io5';

interface UploadPhootProps {
  onUpload: (e: File) => void;
}

export const AddPhoto = ({onUpload}: UploadPhootProps) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPhoto(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));

      onUpload(event.target.files[0]);
    }
  };

  return (
    <Card className="w-full aspect-square grid place-items-center gap-4 rounded-none">
      {!photo ? (
        <>
          <label htmlFor="photo-upload">
            <div className="gap-4 grid place-items-center p-12 border-8 border-gray-500 border-dashed rounded-3xl">
              <IoCameraOutline size={48} />
              <h2 className="text-xl">Add photo</h2>
            </div>
          </label>
          <input onChange={handleUpload} type="file" id="photo-upload" className="hidden" accept="image/*" />
        </>
      ) : (
        <Image src={preview as string} radius='none' />
      )}
    </Card>
  );
};
