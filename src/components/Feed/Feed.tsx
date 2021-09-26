import LiveItem from '../LiveItem';
import { useEffect, useMemo, useRef, useState } from 'react';
import { UpIcon } from '~/assets/icons';
import { getAllLive, getAllPrevLive } from '~/utils/live';

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
  const REQUIRED_MOVED_Y = 50;

  const currentPage = useRef(1);
  const totalPage = useRef(0);

  const [data, setData] = useState<LiveType[]>([]);
  const [pastData, setPastData] = useState<LiveType[]>([]);
  const [showPastArea, setShowPastArea] = useState(false);
  const [showPastItems, setShowPastItems] = useState(false);

  const nextRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const pastRef = useRef<HTMLDivElement>(null);
  const pastAreaRef = useRef<HTMLDivElement>(null);

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
    const response = await getAllPrevLive({
      ...(categoryId && { categoryId }),
    });
    return response.list;
  }

  async function fetchNextData() {
    currentPage.current++;
    const data = await callGetAllLive();
    setData(prevData => [...prevData, ...data]);
  }

  async function fetchPrevData() {
    const data = await callGetAllPastLive();
    if (data.length === 0) {
      return;
    }
    setPastData(data);
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
            if (totalPage.current === currentPage.current) return;
            fetchNextData();
          }
        });
      }),
    [currentPage, totalPage]
  );

  useEffect(() => {
    async function fetchData() {
      const results: PromiseSettledResult<LiveType[]>[] = await Promise.allSettled([
        callGetAllLive(),
        callGetAllPastLive(),
      ]);

      results[0].status === 'fulfilled' && setData(results[0].value);
      results[1].status === 'fulfilled' && setPastData(results[1].value);
    }

    if (categoryId) {
      fetchFilterCategotyData();
      fetchPrevData();
    } else {
      fetchData();
    }
  }, [categoryId]);

  useEffect(() => {
    if (!items) return;
    if (!nextRef.current) return;

    const nextEl = nextRef.current;
    nextObserver.observe(nextEl);

    return () => {
      nextObserver.unobserve(nextEl);
    };
  }, [nextObserver, items]);

  useEffect(() => {
    let startY: number;

    boxRef.current?.addEventListener('touchstart', e => {
      const touchobj = e.changedTouches[0];
      startY = touchobj.pageY;
    });

    boxRef.current?.addEventListener('touchend', e => {
      const isHidden = pastRef.current?.classList?.contains('hidden');
      if (!isHidden) return;

      if (window.scrollY === 0 && showPastArea === false) {
        const touchobj = e.changedTouches[0];
        const dist = Math.abs(startY - touchobj.pageY);

        if (dist > REQUIRED_MOVED_Y) {
          setShowPastArea(true);

          window.scrollTo(0, 0);
          const pastItemsSettingDelay = setTimeout(() => {
            setShowPastItems(true);
            window.scrollTo(0, pastRef.current!.offsetHeight + pastAreaRef.current!.offsetHeight - 18);
            clearTimeout(pastItemsSettingDelay);
          }, 1000);
        }
      }
    });
  }, []);

  return (
    <section className="p-6 overflow-auto h-3/5 " ref={boxRef}>
      <div className={'grid gap-6 mb-8 ' + (showPastItems ? '' : 'hidden')} ref={pastRef}>
        {pastItems && pastItems.map(live => <LiveItem live={live} key={`past-${live.id}`} />)}
      </div>
      <div className={'mb-10 text-center past-live-view ' + (showPastArea ? '' : 'hidden')} ref={pastAreaRef}>
        <i>
          <UpIcon />
        </i>
        <p>지난방송</p>
      </div>
      <div className="grid gap-6">{items && items.map(live => <LiveItem live={live} key={live.id} />)}</div>
      {data.length !== 0 && <div ref={nextRef}></div>}
    </section>
  );
}

export default Feed;
