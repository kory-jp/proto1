import React,{memo} from 'react'
import SearchForm from '../../molecules/SearchForm'

export const Notification = memo(()=> {
  return (
    <>
      <p>通知画面</p>
      <SearchForm />
    </>
  )
})

export default Notification;