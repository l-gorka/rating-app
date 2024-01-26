import { ChangeEvent, useState } from 'react';

import { Card, Button, Image } from '@nextui-org/react';
import { IoCameraOutline } from 'react-icons/io5';
import { LuCrop, LuTrash } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';

import Cropper from 'react-easy-crop';

import { cropImage } from 'src/utils/cropImage';

import { LoadingSpinner } from '../base/LoadingSpinner';

interface UploadPhootProps {
  onUpload: (e: File) => void;
}

export const AddPhoto = ({ onUpload }: UploadPhootProps) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.files && event.target.files.length > 0) {
      setLoading(true);
      setIsEdited(true);

      setPhoto(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [initialCropCompleted, setInitialCropCompleted] = useState<boolean>(false);
  const [isEdited, setIsEdited] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onCropComplete = async (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    if (!initialCropCompleted) {
      console.log(croppedAreaPixels);
      setInitialCropCompleted(true);
      const croppedImage = await cropImage(preview, croppedAreaPixels, console.log);
      setCroppedImage(croppedImage);

      setIsEdited(false);
      onUpload(croppedImage);
      setLoading(false);
    }
  };

  const handleAcceptCrop = async () => {
    const croppedImage = await cropImage(preview, croppedAreaPixels, console.log);
    setCroppedImage(croppedImage);

    setIsEdited(false);
    onUpload(croppedImage);
  };

  const handleRemoveImage = () => {
    setPhoto(null);
    setPreview(null);
    setCroppedImage(null);
    setCroppedAreaPixels(null);
    setInitialCropCompleted(false);
  }

  return (
    <>
      <Card className="w-full aspect-square grid place-items-center gap-4 rounded-none relative">
        {loading && 
        <div className='absolute w-full h-full grid place-items-center z-20 bg-black'><LoadingSpinner isLoading={loading} /></div>
        }
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
          <>
            {isEdited && (
              <Cropper
                image={preview as string}
                crop={crop}
                aspect={1}
                zoom={zoom}
                cropSize={{ width: window.innerWidth, height: window.innerWidth }}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onMediaLoaded={(mediaSize) => {
                  const isWide = mediaSize.width > mediaSize.height;
                  setZoom(isWide ? window.screen.width / mediaSize.height : window.screen.width / mediaSize.width);
                }}
              />
            )}
            {!isEdited && <Image src={croppedImage as string} radius='none' className="aspect-square w-full h-full" />}
          </>
        )}
        {preview && (
          <div className="absolute bottom-5 right-7 z-10 flex flex-col gap-6">
            {!isEdited && preview && (
              <>
              <Button
              isIconOnly
              variant="light"
              className="bg-black/25"
              size="lg"
              aria-label="Take a photo"
              onClick={handleRemoveImage}
            >
              <LuTrash size={28} />
            </Button>
              <Button
                isIconOnly
                variant="light"
                className="bg-black/25"
                size="lg"
                aria-label="Take a photo"
                onClick={() => setIsEdited(true)}
              >
                <LuCrop size={28} />
              </Button>
              </>
            )}
            {isEdited && (
              <>
                <Button
                  isIconOnly
                  variant="light"
                  className="bg-black/25"
                  size="lg"
                  aria-label="Take a photo"
                  onClick={() => setIsEdited(false)}
                >
                  <FaBan size={28} />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  className="bg-black/25"
                  size="lg"
                  aria-label="Take a photo"
                  onClick={() => handleAcceptCrop()}
                >
                  <FaCheck size={28} />
                </Button>
              </>
            )}
          </div>
        )}
      </Card>
    </>
  );
};
