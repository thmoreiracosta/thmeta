import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button";
import '../Card/style.css'

export default function Card() {
  return (
    <div id="sale">
      <div className="thmeta-container">
        <div className="thmeta-card">
          <h2 className="thmeta-sales-title">Vendas</h2>
          <div>
            <div className="thmeta-form-control-container">
              <DatePicker
                selected={new Date()}
                onChange={(date: Date) => { }}
                className="thmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="thmeta-form-control-container">
              <DatePicker
                selected={new Date()}
                onChange={(date: Date) => { }}
                className="thmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
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
                    <Button />
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
                    <Button />
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
                    <Button />
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