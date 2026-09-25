import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand">
      <span className="brand-mark">DC</span>
      <span className="brand-copy">
        <strong>Digital Chautari</strong>
        <small>Ideas → Impact</small>
      </span>
    </Link>
  );
}
