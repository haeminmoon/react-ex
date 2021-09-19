import LiveItem from '../LiveItem';
import { useEffect, useMemo, useRef, useState } from 'react';
import { UpIcon } from '~/assets/icons';
import { getAllLive } from '~/utils/live';

type FeedProps = {
  categoryId?: number;
};

type LiveType = {
  id: number;
  categoryId: number;
  title: string;
  liveDate: string;
  supplier: {
    id: number;
    name: string;
    logo: string;
  };
  thumbnail: string;
};

function Feed({ categoryId }: FeedProps) {
  const currentPage = useRef(1);
  const totalPage = useRef(0);
  const [data, setData] = useState<LiveType[]>([]);

  const pastCurrentPage = useRef(0);
  const pastTotalPage = useRef(0);
  const [pastData, setPastData] = useState<LiveType[]>([]);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const innerBoxRef = useRef<HTMLDivElement>(null);

  async function callGetAllLive() {
    const response = await getAllLive({
      page: +currentPage.current,
      limit: 4,
      ...(categoryId && { categoryId }),
    });
    totalPage.current = response.totalPage;
    return response.list;
  }

  async function callGetAllPastLive() {
    const response = await getAllLive({
      page: +pastCurrentPage.current,
      limit: 4,
      ...(categoryId && { categoryId }),
    });
    pastTotalPage.current = response.totalPage;
    return response.list;
  }

  async function fetchNextData() {
    currentPage.current++;
    const data = await callGetAllLive();
    setData(prevData => [...data, ...prevData]);
  }

  async function fetchPrevData() {
    pastCurrentPage.current++;
    const data = await callGetAllPastLive();
    setPastData(prevData => [...prevData, ...data]);
  }

  async function fetchFilterCategotyData() {
    // 카테고리 변경 시 호출
    if (!categoryId) return;

    // 데이터 초기화
    currentPage.current = 1;
    setData([]);

    const data = await callGetAllLive();
    setData(data);
  }

  const items = useMemo(() => {
    if (!data) return null;
    return data;
  }, [data]);

  const pastItems = useMemo(() => {
    if (!pastData) return null;
    return pastData;
  }, [pastData]);

  const nextObserver = useMemo(
    () =>
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(totalPage.current, currentPage.current);
            if (totalPage.current === currentPage.current) return;
            fetchNextData();
          }
        });
      }),
    [currentPage, totalPage]
  );

  const prevObserver = useMemo(
    () =>
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('prev');
            fetchPrevData();
          }
        });
      }),
    []
  );

  useEffect(() => {
    if (categoryId) {
      fetchFilterCategotyData();
    } else {
      async function fetchData() {
        const data = await callGetAllLive();
        setData(data);
      }
      fetchData();
    }
  }, [categoryId]);

  useEffect(() => {
    if (!items) return;
    if (!nextRef.current) return;
    if (!prevRef.current) return;

    const nextEl = nextRef.current;
    const prevEl = prevRef.current;

    nextObserver.observe(nextEl);
    prevObserver.observe(prevEl);

    return () => {
      nextObserver.unobserve(nextEl);
      prevObserver.unobserve(prevEl);
    };
  }, [nextObserver, prevObserver, items]);

  useEffect(() => {
    let startY: number;

    boxRef.current?.addEventListener('touchstart', e => {
      const touchobj = e.changedTouches[0];
      startY = touchobj.pageY;
    });
    boxRef.current?.addEventListener('touchmove', e => {
      const touchobj = e.changedTouches[0];
      const dist = startY - touchobj.pageY;
      if (dist > 0) return;
      innerBoxRef.current!.style.transform = `translateY(0px)`;
    });
  }, []);

  return (
    <section className="p-6 overflow-hidden" ref={boxRef}>
      <div className="transition-all duration-500 ease-linear transform -translate-y-28" ref={innerBoxRef}>
        <div ref={prevRef}></div>
        <div className="grid gap-6">
          {pastItems && pastItems.map(live => <LiveItem live={live} key={`past-${live.id}`} />)}
        </div>
        <div className="my-8 text-center">
          <i>
            <UpIcon />
          </i>
          <p>지난방송</p>
        </div>
        <div className="grid gap-6">{items && items.map(live => <LiveItem live={live} key={live.id} />)}</div>
        {data.length !== 0 && <div ref={nextRef}></div>}
      </div>
    </section>
  );
}

export default Feed;
