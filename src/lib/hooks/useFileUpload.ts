import { useState } from 'react';

type UseImagePreviewReturnType = {
  previewImage: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetImage: () => void;
};

const useImagePreview = ({
  setImage,
  currentIamgeURL = null,
}: {
  setImage: (file: File | null) => void;
  currentIamgeURL?: string | null;
}): UseImagePreviewReturnType => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentIamgeURL);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0] || null;
    if (selectedImage && selectedImage.type.startsWith('image/')) {
      setImage(selectedImage);
      setPreviewUrl(URL.createObjectURL(selectedImage));
    } else {
      alert('Please select a valid image file.');
    }
  };
  const resetImage = () => {
    setImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return {
    previewImage: previewUrl,
    handleImageChange,
    resetImage,
  };
};

export default useImagePreview;
