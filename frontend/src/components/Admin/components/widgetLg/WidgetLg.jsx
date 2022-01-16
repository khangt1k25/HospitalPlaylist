import "./widgetLg.css";

export default function WidgetLg(props) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest appointment</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">ID appointment</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Specialist</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {props.appointment && props.appointment.slice(0, 5).map(appoint => 
                  <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      alt=""
                      className="widgetLgImg"
                    />
                    <span className="widgetLgName">{appoint._id}</span>
                  </td>
                  <td className="widgetLgDate">{appoint.start}</td>
                  <td className="widgetLgAmount">{appoint.userDescription}</td>
                  <td className="widgetLgStatus">
                    <Button type={appoint.status} />
                  </td>
                </tr>
          )}

      </table>
    </div>
  );
}
