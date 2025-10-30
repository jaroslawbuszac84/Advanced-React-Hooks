import {useState, useEffect, useRef} from 'react'

function ToDo() {
    const [loading, setLoading] = useState(true)
    const [ToDo, setToDo] = useState([])

    const isMounted = useRef(true)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        if(isMounted.current) {
        setToDo(data)
        setLoading(false)
        }
      }, 1000)
    })    

    // It starts when our component is unmounted
    return () => {
      isMounted.current=false
    }
    }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{ToDo.title}</h1>
}

export default ToDo
