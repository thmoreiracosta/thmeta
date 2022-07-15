import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import Button from "../Button";
import '../Card/style.css';



export default function Card() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([])

  useEffect(() => {
    axios.get(`${BASE_URL}/sales`)
      .then((response) => {
        setSales(response.data.content);

      })
  }, []);

  return (
    <div id="sale">
      <div className="thmeta-container">
        <div className="thmeta-card">
          <h2 className="thmeta-sales-title">Vendas</h2>
          <div>
            <div className="thmeta-form-control-container">
              <DatePicker
                selected={minDate}
                onChange={(date: Date) => setMinDate(date)}
                className="thmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="thmeta-form-control-container">
              <DatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
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
                {sales.map((sale) => {
                  return (
                    <tr key={sale.id}>
                      <td className="thmeta-vw-992">{sale.id}</td>
                      <td className="thmeta-vw-576">{new Date(sale.date).toLocaleDateString()}</td>
                      <td>{sale.sellerName}</td>
                      <td className="thmeta-vw-992">{sale.visited}</td>
                      <td className="thmeta-vw-992">{sale.deals}</td>
                      <td>R$ {sale.amount.toFixed(2) }</td>
                      <td>
                        <Button />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}