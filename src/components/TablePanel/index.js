import React from 'react';

import './styles.css';

const TablePanel = () => {
  return (
    <div className="container-tablepanel">
      <h2 className="title-panel">Aluno</h2>
      <table>
        <tr>
          <th>Campo1</th>
          <th>Campo2</th>
          <th>Campo3</th>
          <th>Campo4</th>
          <th>Campo1</th>
          <th>Campo2</th>
          <th>Campo3</th>
          <th>Campo4</th>
        </tr>
        <tr>
          <th>Campo1</th>
          <th>Campo2</th>
          <th>Campo3</th>
          <th>Campo4</th>
          <th>Campo1</th>
          <th>Campo2</th>
          <th>Campo3</th>
          <th>Campo4</th>
        </tr>
      </table>
    </div>
  )
}

export default TablePanel;