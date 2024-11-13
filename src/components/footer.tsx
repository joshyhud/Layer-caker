import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-pink-50 to-white p-6">
      <div className="container mx-auto">
        <p className="text-center text-slate-700">
          &copy; {new Date().getFullYear()} Layer Caker
        </p>
        <ul className="flex justify-center gap-4 font-semibold text-slate-700">
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/studio"
              target="_blank"
            >
              Sanity Studio
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
