import { AxiosRequestConfig } from 'axios';
import mock from '../mock';

const liveDB = {
  lives: [
    {
      id: 1,
      categoryId: 1,
      title: '베스킨라빈스 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 2,
      categoryId: 1,
      title: '독샤워의 쇼핑라이브',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 3,
      categoryId: 2,
      title: '베 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 11,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDFfMjcy/MDAxNjMwNDg0NzUyNDQ0.tidbYxVNUad5ApEDiK5M08qMLQY7RlS6RsGu-yZKUjog.ZpbmkXrJW_V72Fo8ahhocJZK4w54RcMwEbOsnE_kzGgg.PNG/%EC%95%84%EB%B3%B4%EB%A6%AC%EB%8D%A4_%EC%98%88%EA%B3%A0%ED%8E%98%EC%9D%B4%EC%A7%80%28MO%29.png?type=w800_q80',
    },
    {
      id: 4,
      categoryId: 2,
      title: '베스 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDFfMjcy/MDAxNjMwNDg0NzUyNDQ0.tidbYxVNUad5ApEDiK5M08qMLQY7RlS6RsGu-yZKUjog.ZpbmkXrJW_V72Fo8ahhocJZK4w54RcMwEbOsnE_kzGgg.PNG/%EC%95%84%EB%B3%B4%EB%A6%AC%EB%8D%A4_%EC%98%88%EA%B3%A0%ED%8E%98%EC%9D%B4%EC%A7%80%28MO%29.png?type=w800_q80',
    },
    {
      id: 5,
      categoryId: 3,
      title: '베스킨 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDFfMjcy/MDAxNjMwNDg0NzUyNDQ0.tidbYxVNUad5ApEDiK5M08qMLQY7RlS6RsGu-yZKUjog.ZpbmkXrJW_V72Fo8ahhocJZK4w54RcMwEbOsnE_kzGgg.PNG/%EC%95%84%EB%B3%B4%EB%A6%AC%EB%8D%A4_%EC%98%88%EA%B3%A0%ED%8E%98%EC%9D%B4%EC%A7%80%28MO%29.png?type=w800_q80',
    },
    {
      id: 6,
      categoryId: 4,
      title: '베스킨라 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 12,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDFfMjcy/MDAxNjMwNDg0NzUyNDQ0.tidbYxVNUad5ApEDiK5M08qMLQY7RlS6RsGu-yZKUjog.ZpbmkXrJW_V72Fo8ahhocJZK4w54RcMwEbOsnE_kzGgg.PNG/%EC%95%84%EB%B3%B4%EB%A6%AC%EB%8D%A4_%EC%98%88%EA%B3%A0%ED%8E%98%EC%9D%B4%EC%A7%80%28MO%29.png?type=w800_q80',
    },
    {
      id: 7,
      categoryId: 5,
      title: '베스킨라빈 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 12,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 8,
      categoryId: 5,
      title: '베스킨라빈스 9월의 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 12,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 9,
      categoryId: 6,
      title: '베스킨라빈스 9월 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 10,
      categoryId: 6,
      title: '베스킨라빈스 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 11,
      categoryId: 4,
      title: '11 베스킨라빈스 9월 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 12,
      categoryId: 1,
      title: '12 베스킨라빈스 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 13,
      categoryId: 4,
      title: '13 베스킨라빈스 9월 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 14,
      categoryId: 1,
      title: '14 베스킨라빈스 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 15,
      categoryId: 4,
      title: '15 베스킨라빈스 9월 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
    {
      id: 16,
      categoryId: 1,
      title: '16 베스킨라빈스 맛 대공개!!',
      liveDate: new Date().toISOString(),
      supplier: {
        id: 10,
        name: '네이버쇼핑라이브',
        logo: 'https://blog.kakaocdn.net/dn/bFqsNQ/btqU52Dnzok/UH8mIODqDeOdbtg6ijUoM1/img.jpg',
      },
      thumbnail:
        'https://g-selected.pstatic.net/MjAyMTA5MDJfMjgw/MDAxNjMwNTYzMzQ4NDQ3.DYbFxcvyF2gsAHWZujM0e0ATmrIkT2MlqwL9ng9JIh8g.XP7DCekpwHsbN7IFcG0wK3pWZmBCf2BabdaNvn9jDI8g.JPEG/image.jpg?type=w800_q80',
    },
  ],
};

mock.onGet('/api/live').reply((config: AxiosRequestConfig) => {
  const data = JSON.parse(config.data);
  const { page, limit, categoryId } = data;

  const error = {
    message: 'Bad Request',
  };

  if (!page || !limit) {
    return [400, { error }];
  }

  const filterList =
    categoryId === 0 || !categoryId ? liveDB.lives : liveDB.lives.filter(_live => _live.categoryId === categoryId);

  const list = filterList.slice((page - 1) * limit, page * limit);

  const response = {
    list,
    page: page,
    totalPage: Math.ceil(filterList.length / limit),
  };

  return [200, response];
});

mock.onGet('/api/prev_live').reply((config: AxiosRequestConfig) => {
  const data = JSON.parse(config.data);
  const { categoryId } = data;

  const list =
    categoryId === 0 || !categoryId ? liveDB.lives : liveDB.lives.filter(_live => _live.categoryId === categoryId);

  const response = {
    list,
  };

  return [200, response];
});
