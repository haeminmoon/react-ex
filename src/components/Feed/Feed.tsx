import LiveItem from '../LiveItem';
import { productList } from '~/constants/mock';

function Feed() {
  return (
    <section className="p-6 grid gap-6">
      {productList.map(product => (
        <LiveItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default Feed;
