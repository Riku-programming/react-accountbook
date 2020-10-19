import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loading, loaded } from '../stores/loading';

export const useVision = (fileData: File | undefined) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(undefined);
  }, []);

  const reader = new FileReader();
  const listener = async () => {
    dispatch(loading());
    if (typeof reader.result === 'string') {
      const url = `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_VISION_API_KEY}`;
      const body = {
        requests: [
          {
            image: {
              content: reader.result.replace(/data:[a-z]+\/[a-z]+;base64,/, ''),
            },
            features: [
              {
                type: 'DOCUMENT_TEXT_DETECTION',
                maxResults: 10,
              },
            ],
          },
        ],
      };

      const res: any = await axios.post(url, body).catch((error) => {
        console.log(error);
      });
      setAmount(
        Number(
          res.data.responses[0].fullTextAnnotation.text
            .match(/\n合計\n[¥\d,]+\n/gu)[0]
            .match(/\d+/g)
            ?.join(''),
        ),
      );
    }
    dispatch(loaded());
  };

  reader.addEventListener('load', listener, false);

  if (fileData) {
    reader.readAsDataURL(fileData);
  }

  return {
    amountByVision: amount,
    resetAmountByVision: () => {
      setAmount(undefined);
    },
  };
};
