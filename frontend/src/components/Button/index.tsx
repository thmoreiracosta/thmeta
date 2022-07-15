import axios from 'axios';
import iconNote from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import '../Button/style.css';

type ButtonProps = {
  id: number;
}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      alert("SMS ENVIADO COM SUCESSO")
    })
}

export default function Button(props: ButtonProps) {
  return (
    <div>      
      <img 
        className="notification-logo"
        onClick={() => handleClick(props.id)}
        src={iconNote}
        alt="Notificar"
      />
    </div>
  )
}