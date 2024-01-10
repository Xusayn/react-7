import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setname]=useState([])

  const [firstname , setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [age,setage]=useState('')
  const [phone ,setphone]=useState('')
  const [email,setemail]=useState('')
  const [group ,setgroup]=useState('')

 
  const resetinput=()=>{
    setfirstname('')
    setlastname('')
    setage('')
    setemail('')
    setphone('')
    setgroup('')
  }


  const newevent=(event)=>{
    setname((p)=>{
      return [...p,event]
    })
  }


  const handlsubmit=(e)=>{
    e.preventDefault()

    const event={
      firstname: firstname,
      lastname:lastname,
      age:age,
      phone:phone,
      email:email,
      group:group,
      id:Math.random()
    }




    newevent(event)
    resetinput()
  }


  const handldelete=(id)=>{
    const filtered= name.filter((f)=>{
      return f.id !==id
    })
    setname(filtered)
  }


  return (
    <>
    <div className="page">
      <div id='card' className="cards p-5">
        {name.map((n)=>{
          return (
            <>
              <div key={n.id} className="card p-3">
                <h5>firstname: {n.firstname}</h5>
                <h5>Lastname: {n.lastname}</h5>
                <h5>Phone: {n.phone}</h5>
                <h5>Email: {n.email}</h5>
                <h5>Age: {n.age}</h5>
                <h5>group: {n.group}</h5>
                <button className='edit'>Edit</button>
                <button onClick={()=>handldelete(n.id)} className='delete'>Delete</button>

              </div>
            </>
          )
        })}
      </div>


    <form className='form p-5' onSubmit={handlsubmit}>
      <label>
        <span>Firstname</span>
      <input value={firstname} type="text" onChange={(e)=>setfirstname(e.target.value)} />
      </label>

      <label>
        <span>Lastname</span>
      <input type="text" value={lastname}  onChange={(e)=>setlastname(e.target.value)}/>
      </label>

      <label>
        <span>Age</span>
      <input type="number" value={age}  onChange={(e)=>setage(e.target.value)}/>
      </label>

      <label>
        <span>Phone number</span>
      <input type="number" value={phone}  onChange={(e)=>setphone(e.target.value)}/>
      </label>

      <label>
        <span>Email</span>
      <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)}/>
      </label>

      <label>
        <span>Group</span>  
      <input type="number" value={group}  onChange={(e)=>setgroup(e.target.value)}/>
      </label>


          <button className='btn btn-dark'>Add</button>
        </form>
    </div>  
        
    </>
  )
}

export default App
