import iconNote from '../../assets/notification-icon.svg'
import '../Card/style.css'

export default function Card() {
  return (
    <div id="sale">
      <div className="thmeta-container">
        <div className="thmeta-card">
          <h2 className="thmeta-sales-title">Vendas</h2>
          <div>
            <div className="thmeta-form-control-container">
              <input
                className="thmeta-form-control"
                type="text"
                placeholder='data inicial' />
            </div>
            <div className="thmeta-form-control-container">
              <input
                className="thmeta-form-control"
                type="text"
                placeholder='data final' />
            </div>
          </div>
          <div className="thmeta-table-container">
            <table className="thmeta-sales-table">
              <thead>
                <tr>
                  <th className="thmeta-vw-992">ID</th>
                  <th className="thmeta-vw-576">Data</th>
                  <th>Vendedor</th>
                  <th className="thmeta-vw-992">Visitas</th>
                  <th className="thmeta-vw-992">Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="thmeta-vw-992">#341</td>
                  <td className="thmeta-vw-576">10/07/2022</td>
                  <td>Thiago</td>
                  <td className="thmeta-vw-992">15</td>
                  <td className="thmeta-vw-992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <img
                      src={iconNote}
                      alt="Notificar"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="thmeta-vw-992">#341</td>
                  <td className="thmeta-vw-576">10/07/2022</td>
                  <td>Thiago</td>
                  <td className="thmeta-vw-992">15</td>
                  <td className="thmeta-vw-992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <img
                      src={iconNote}
                      alt="Notificar"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="thmeta-vw-992">#341</td>
                  <td className="thmeta-vw-576">10/07/2022</td>
                  <td>Thiago</td>
                  <td className="thmeta-vw-992">15</td>
                  <td className="thmeta-vw-992">11</td>
                  <td>R$ 55300.00</td>
                  <td>
                    <img
                      src={iconNote}
                      alt="Notificar"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}