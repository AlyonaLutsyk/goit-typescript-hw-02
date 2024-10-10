import React from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

export default function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  if (!image) {
    return null;
  }

  const { urls, alt_description, user, likes } = image;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <img className={css.image} src={urls.regular} alt={alt_description || 'Image'} />
      <p>Author: {user.name}</p>
      <p>{likes} likes</p>
    </ReactModal>
  );
}

