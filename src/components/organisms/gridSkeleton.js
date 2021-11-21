import Skeleton from '@/molecules/skeleton';
import GridLayout from '@/layouts/gridLayout';

const GridSkeleton = () => {
  return (
    <GridLayout>
      {[1, 2, 3, 4].map(n => (
        <Skeleton key={n} />
      ))}
    </GridLayout>
  )
}

export default GridSkeleton;