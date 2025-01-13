import Modal from '@/components/common/Modal';
import React from 'react';

const CostComponent = () => {
  return <></>;
};

const CostAdd = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <CostComponent />
    </Modal>
  );
};

export default CostAdd;
