import React, { forwardRef, useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import cn from 'classnames';

import { SongColor } from '../shared/types';

import { Note } from './Note';
import { DefaultCircle } from './DefaultCircle';
import GradientCircle from './GradientCircle';
import './disc.css';

type Props = {
  colors?: SongColor[];
  isAnimate?: boolean;
  onRendered?: () => void;
};

const Disc = forwardRef<HTMLDivElement, Props>(({ colors = undefined, isAnimate = false, onRendered }, ref) => {
  const [isRendering, setIsRendering] = useState(true);

  const angle = colors ? (colors.reduce((acc, color) => acc + color) / colors.length) * 360 : 0;

  const handleRendered = async () => {
    setIsRendering(false);
    onRendered?.();
  };

  const gradientCircleFallbackRender = useCallback(() => <DefaultCircle angle={angle} />, [angle]);

  return (
    <div className={cn('discRoot', { ['animate']: isAnimate })}>
      <div ref={ref} className={'discContainer'}>
        <div className={'disc'} style={{ transform: `rotate(${angle}deg)` }}>
          <ErrorBoundary fallbackRender={gradientCircleFallbackRender}>
            {(isRendering || colors === undefined) && <DefaultCircle angle={angle} />}
            {colors !== undefined && <GradientCircle colors={colors} onRendered={handleRendered} />}
          </ErrorBoundary>
          <div className={'note'}>
            <Note />
          </div>
        </div>
      </div>
      <div className={'border'} />
    </div>
  );
});

export { Disc };
