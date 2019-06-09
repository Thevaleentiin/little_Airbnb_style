import Link from 'next/link'
import "../style.css"

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="header">
    <p className="title-header">Appart<span>Finder</span></p>
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle} title="About Page">About</a>
      </Link>
    </div>
  </div>
)

export default Header