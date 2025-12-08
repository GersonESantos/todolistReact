import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
        <h2>Adicionar nova tarefa</h2>
        <form>
            <input type="text" placeholder='Descrição da tarefa' />
            <select>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Pagamentos">Pagamentos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
        <select name="filter" id="filter">
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incompletas</option>
            </select>

    </div>
  )
}

export default TodoForm