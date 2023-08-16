import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { parse } from 'postcss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo,settodo] = useState({title:'',des: ''})

  const addTodo = () => {
    let todos = localStorage.getItem('todos')
    if (todos){
      let todoJson = JSON.parse(todos)
      if (todoJson.filter(value=>{ return value.title==todo.title }).length > 0 ){
        // If the length of the filtered array is greater than 0, it means there is at least one todo with the same title as the current todo being added. This indicates that the todo already exists, and the code displays an alert with the message "Todo already exists."
        alert('Todo already exits')
      }
      else { todoJson.push(todo)
        localStorage.setItem('todos',JSON.stringify(todoJson))
        alert('Todo has been added')
        settodo({title:'',des: ''})
      }
      
     }
     else {
      localStorage.setItem('todos',JSON.stringify([todo]))
     }
  }

  const onChange = (e)=>{
    settodo({...todo, [e.target.name] : e.target.value  })
    console.log(todo)
  }

// ...todo makes a copy of orignal todo and  [e.target.name] targets name like title so if i write hy then [e.target.name] becomes titile = 'hy'

  return (
    <div >
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    <h1 className='text-black text-lg font-semibold' >Add a Todo</h1>
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5"></h2>
      <div class="relative mb-4">
        <label for="title" class="leading-7 text-sm text-gray-600">Todo title</label>
        <input onChange={onChange} value={todo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="des" class="leading-7 text-sm text-gray-600">ToDo text</label>
        <input  onChange={onChange}  value={todo.des} type="text" id="des" name="des" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button  onClick={addTodo} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg">Add Todo</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>
    </div>
  )
}
