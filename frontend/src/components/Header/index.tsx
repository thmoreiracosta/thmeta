import '../Header/style.css'
import logo from '../../assets/img/logo.svg'

export default function Header() {
  return (
    <header>
      <div className="thmeta-logo-container">
        <img
          src={logo}
          alt="THMeta Logo" />
        <h1>THMeta</h1>
        <p>
          Desenvolvido por 
          <a
            href="https://social-media-shortcuts-thmoreiracosta.vercel.app/" target="_new">
              @thmoreiracosta
          </a>
        </p>
      </div>
    </header>
  )
}