'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/lib/cn';
import { DragDropIcon } from '@/assets/svgs';

interface FileDropzoneProps {
  onFileUpload: (file: File) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg'],
    },
    maxFiles: 1,
    maxSize: 320000, // max size in bytes, adjust as necessary
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer w-full bg-input h-full',
        isDragActive ? 'border-brand' : 'border-brand'
      )}
    >
      <input {...getInputProps()} />
      <div className="mb-4">
        <DragDropIcon className="fill-none h-12 w-12" />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        <span className="text-headingColor font-normal text-sm cursor-pointer">
          Drop an image here
        </span>
      </p>
    </div>
  );
};

export default FileDropzone;
