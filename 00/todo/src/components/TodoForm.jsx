import { useState } from "react"


const TodoForm = () => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviou o formulário')
  }
  return (
    <div className='todo-form'>
        <h2>Adicionar nova tarefa</h2>
        <form onSubmit={handleSubmit}>
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