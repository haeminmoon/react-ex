import { productList } from '~/constants/mock';
import LiveItem from '../LiveItem';

function Feed() {
  return (
    <section className="p-6 grid gap-6">
      {productList.map(product => (
        <LiveItem product={product} />
      ))}
    </section>
  );
}

export default Feed;
