import axiosClient from '../libs/axiosClient';

type getAllLiveParams = {
  page: number;
  limit: number;
  categoryId?: number;
};

export async function getAllLive({ page, limit, categoryId }: getAllLiveParams) {
  const response = await axiosClient.get('/api/live', {
    data: {
      page,
      limit,
      ...{ categoryId },
    },
  });

  return response.data;
}

type getAllPrevLiveParams = {
  categoryId?: number;
};

export async function getAllPrevLive({ categoryId }: getAllPrevLiveParams) {
  const response = await axiosClient.get('/api/prev_live', {
    data: {
      ...{ categoryId },
    },
  });

  return response.data;
}
