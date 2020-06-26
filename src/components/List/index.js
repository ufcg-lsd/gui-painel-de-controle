import React from 'react';

import './styles.css';

import TablePanel from '../TablePanel';

const List = () => {
  return (
    <div className="container-body">
      <div className="container-list">
        <h2 className="title-list">Tabelas</h2>
        <ul className="list">
          <li>
            <a href="#">Aluno</a>
          </li>
          <li>
            <a href="#">AlunoDeficiencia</a>
          </li>
          <li>
            <a href="#">AlunoVinculo</a>
          </li>
          <li>
            <a href="#">Cota</a>
          </li>
          <li>
            <a href="#">Curso</a>
          </li>
          <li>
            <a href="#">Deficiencia</a>
          </li>
          <li>
            <a href="#">Escola</a>
          </li>
          <li>
            <a href="#">EstadoCivil</a>
          </li>
          <li>
            <a href="#">Ingresso</a>
          </li>
          <li>
            <a href="#">Municipio</a>
          </li>
          <li>
            <a href="#">Nacionalidade</a>
          </li>
          <li>
            <a href="#">PaisOrigem</a>
          </li>
          <li>
            <a href="#">Raca</a>
          </li>
          <li>
            <a href="#">Sexo</a>
          </li>
          <li>
            <a href="#">SituacaoAluno</a>
          </li>
          <li>
            <a href="#">SituacaoVinculo</a>
          </li>
        </ul>
      </div>
      <div className="container-panel">
        <TablePanel />
      </div>
    </div>
  )
}

export default List;