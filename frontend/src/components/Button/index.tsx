import iconNote from '../../assets/img/notification-icon.svg'
import '../Button/style.css'

export default function Button() {
  return (
    <div>
      <img className="notification-logo"
        src={iconNote}
        alt="Notificar"
      />
    </div>
  )
}