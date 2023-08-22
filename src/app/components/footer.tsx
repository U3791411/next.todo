import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
      </span>
      <small className="d-block mt-2 text-uppercase">
        copyright &copy; 2023
      </small>
    </footer>
  );
}