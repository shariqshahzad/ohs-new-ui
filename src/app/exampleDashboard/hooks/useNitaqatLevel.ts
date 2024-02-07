import { useQuery } from '@tanstack/react-query';

import { exampleApiService } from '../services/exampleApiService';
import { exampleApiQueryKeys } from '../constants/exampleApiQueryKeys';

export const useNitaqatLevel = () => {
  return useQuery([exampleApiQueryKeys.nitaqatScore], exampleApiService.getNitaqatScore);
};
