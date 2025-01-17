import Modal from '@/components/common/Modal';
import React from 'react';

const CostComponent = ({ day }: { day: number }) => {
  return <>{day}</>;
};

const CostAdd = ({ onClose, day }: { onClose: () => void; day: number }) => {
  return (
    <Modal onClose={onClose}>
      <CostComponent day={day} />
    </Modal>
  );
};

export default CostAdd;
