import React, { useState } from 'react';

import RegionSelector from './plan-setting-step-tab/plan-setting-tab-select/RegionSelector';
import DetailedSelector from './plan-setting-step-tab/plan-setting-tab-select/DetailedSelector';
import DetailSearchLocation from './plan-setting-step-tab/plan-setting-tab-search/DetailSearchLocation';
import cs from 'classnames';

type StepType = {
  isFilterType?: boolean;
  title: string;
};

const RegionSelectStep = ({ isFilterType = false, title }: StepType) => {
  const [activeTab, setActiveTab] = useState<'renderStep' | 'searchTab'>(
    'renderStep'
  );

  const onChangeTabState = () => {
    if (activeTab === 'renderStep') {
      return setActiveTab('searchTab');
    }
    return setActiveTab('renderStep');
  };
  return (
    <div className="flex flex-col h-full justify-between gap-[2rem] relative">
      <div>
        {/* 제목탭 */}
        <div className={cs({ 'mt-[4rem]': !isFilterType })}>
          <span className="leading-[4.2rem] text-[2.8rem] font-bold">
            {title}
          </span>
          <div className="relative h-[3.6rem] w-[24rem]">
            <div className="flex mt-[2.8rem] h-[3rem] justify-between">
              <button
                onClick={isFilterType ? () => onChangeTabState() : undefined}
                className={`${
                  activeTab === 'renderStep'
                    ? 'text-var-primary-500'
                    : 'text-var-enable'
                } btn-tab`}
              >
                지역선택
              </button>
              {isFilterType || (
                <button
                  onClick={() => onChangeTabState()}
                  className={`${
                    activeTab === 'searchTab'
                      ? 'text-var-primary-500'
                      : 'text-var-enable'
                  } btn-tab`}
                >
                  직접선택
                </button>
              )}
              <div
                className={`absolute bottom-0 border-b-2 border-b-var-primary-500 w-[10rem] transition-transform duration-300 ${
                  activeTab === 'renderStep'
                    ? 'translate-x-0'
                    : 'translate-x-[14rem]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* 랜더 */}
        <div className="mt-[2rem]">
          {activeTab === 'renderStep' ? (
            <div className="max-h-[50rem] overflow-auto">
              <RegionSelector isFilterType={isFilterType} />
              <DetailedSelector isFilterType={isFilterType} />
            </div>
          ) : (
            <>
              <DetailSearchLocation />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionSelectStep;
