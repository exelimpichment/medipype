'use client';

import { useEffect, useState } from 'react';
import Modal from '../modal/Modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal />
    </>
  );
};
