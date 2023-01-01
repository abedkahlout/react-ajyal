import React from 'react'
import UserBox from './UserBox'
import LastNews from './UserPersonal/LastNews'

function Personal() {
  return (
    <>
    <div className='boxs-personal'>
    <UserBox jops="عدد الوظائف" numjops="5"/>
    <UserBox jops="عدد الوظائف" numjops="5"/>
    <UserBox jops="عدد الوظائف" numjops="5"/>
    <UserBox jops="عدد الوظائف" numjops="5"/>
    </div>
      <LastNews />
      </>

)
}

export default Personal