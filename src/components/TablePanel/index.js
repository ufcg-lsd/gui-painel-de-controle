import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

const TablePanel = (props) => {
  const tableName = props.tableName;
  const [data, setData] = useState([]);
  const [keysTable, setKeysTable] = useState([]);

  useEffect(() => {
    api.get('/alunos', {
      headers: {
        table_name: tableName
      }
    }).then(response => {
      setData(response.data);
    })
    if(data[0]) {
      setKeysTable(Object.keys(data[0]));
    }
  }, [data, tableName]);

  return (
    <div className="container-tablepanel">
      <h2 className="title-panel">{ tableName }</h2>
      <table>
        <thead>
          <tr>
            { keysTable.map((key, index) => (
              <th key={index}>{ key }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { data.map(object => (
            <tr>
              <td key={object.id}>{ object.id }</td>
              <td key= {object.raça}>{ object[1] }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default TablePanel;