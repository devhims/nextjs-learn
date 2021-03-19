import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timeStamp = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => timeStamp;
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>Page cannot be found</h2>
      <p>
        Go back to{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
