export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <div className='container footer-inner'>
           <span>© {year} My Portfolio</span>
           <span>Built with next.js App Router</span>
        </div>
    </footer>
  )
}

