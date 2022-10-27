import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!text){
            alert('please add a task name')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>
    <label> Task Name
    </label>
    <input type="text" name="" placeholder='add task name' value={text} 
    onChange={(e)=>{setText(e.target.value)}} id="" />
</div>
<div className='form-control'>
    <label>Day & Time
    </label>
    <input type="text" name=""  value={day} 
    onChange={(e)=>{setDay(e.target.value)}} placeholder='add task name' id="" />
</div>
<div className='form-control form-control-check'>
    <label> Set Reminder
    </label>
    <input type="checkbox" checked={reminder} name="" id="" value={reminder} 
    onChange={(e)=>{setReminder(e.currentTarget.checked)}} />
</div>
<input type="submit" value="Save" className='btn btn-block' />
    </form>
  )
}

export default AddTask