import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Welcome to Table Together</h1>
      <nav>
        <ul>
          <li>
            <Link href="/tableList">Table List</Link>
          </li>
          <li>
            <Link href="/tableCreate">Table Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
