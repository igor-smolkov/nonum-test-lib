import React, { useEffect, useRef, useState, FC } from 'react';
import html2canvas from 'html2canvas';

import { isErrorWithMessage, SongColor } from '../shared/types';

import { Disc } from '../Disc';
import { getColorsByAssetID } from '../shared/utils';

type Props = {
  id: string;
}

const DiscContainer: FC<Props> = ({ id }) => {
  const [colors, setColors] = useState<SongColor[] | null>(null);
  const discContainerRef = useRef<HTMLDivElement>(null);

  const handleRendered = async () => {
    if (discContainerRef.current === null) return;
    try {
      const canvas = await html2canvas(discContainerRef.current, { backgroundColor: 'rgba(0, 0, 0, 0)' });
      const image = canvas.toDataURL('image/png', 0.9);
      console.log(image);
    } catch (error) {
      if (isErrorWithMessage(error)) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${error.message}`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Unknown render image error: ${JSON.stringify(error)}`);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getColorsByAssetID(id);
        setColors(data);
      } catch (err) {
        if (isErrorWithMessage(err)) {
          // eslint-disable-next-line no-console
          console.log(`Error: ${err.message}`);
        } else {
          // eslint-disable-next-line no-console
          console.log(`Unknown error: ${JSON.stringify(err)}`);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {colors !== null && colors.length > 0 && (
        <Disc ref={discContainerRef} colors={colors} onRendered={handleRendered} />
      )}
    </>
  );
};

export { DiscContainer };
