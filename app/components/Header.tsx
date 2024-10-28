import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-xl font-bold">Redex</div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/store">Store</Link>
        <Link href="/store">Training</Link>
        <Link href="/store">Blog</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Book</button>
    </header>
  );
};

export default Header;
