import LiveItem from '../LiveItem';
import { live } from '../LiveItem/LiveItem';

type FeedProps = {
  liveList: live[];
};

function Feed({ liveList }: FeedProps) {
  return (
    <section className="p-6 grid gap-6">
      {liveList.map(live => (
        <LiveItem live={live} key={live.id} />
      ))}
    </section>
  );
}

export default Feed;
