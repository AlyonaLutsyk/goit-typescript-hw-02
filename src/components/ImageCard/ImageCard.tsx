import React from 'react';
import css from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img className={css.image} src={image.urls.small} alt={image.alt_description || ''} />
    </div>
  );
}
