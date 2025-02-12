import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Welcome to Table Together</h1>
      <nav>
        <ul>
          <li>
            <Link href="/table-list">Table List</Link>
          </li>
          <li>
            <Link href="/table-create">Table Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
