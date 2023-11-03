import React, { useContext } from "react";
import { MyContext } from "../context/Context";

const Tablas = () => {
    const {Product} = useContext(MyContext)
    const Styles = {
        tablas :{
            border: '1px solid red',
            width: '100%',
            height: '20%',
          },
        th: {
            border: '1px solid red',
            textAlign: 'center',
        }
    }
  return (
    <>
      <table style={Styles.tablas}>
        <tr>
          <th style={Styles.th}>Product</th>

          <th style={Styles.th}>Name</th>

          <th style={Styles.th}>ID</th>
        </tr>
        <tr>
          <td style={Styles.th}>Soleado</td>

          <td style={Styles.th}>Mayormente soleado</td>

          <td style={Styles.th}>Parcialmente nublado</td>
        </tr>
        { 
        Product.map(x => ( 
            <tr key={x.Product.id}>
                <td style={Styles.th}>{x.Product.name}</td>
                <td style={Styles.th}>Price: ${x.Product.price}</td>
                <td style={Styles.th}>Price: ${x.Product.id}</td>
            </tr>
        ))
        }
      </table>
    </>
  );
};
export default Tablas;
