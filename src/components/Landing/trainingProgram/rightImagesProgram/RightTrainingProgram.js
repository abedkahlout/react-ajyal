import React from 'react'
import './RightTrainingProgram.css'
import pic from '../../../../assets/programs.jpg'
 function RightTrainingProgram() {
  return (
    <>
    
    <div className='prgrams-container'>
        
        
        <div className="program-right-image-container">
            <div className="small-right-image1"><img src={pic}/></div>
            <div className="small-right-image2"><img src={pic}/></div>
            <div className="big-right-image"><img src={pic}/></div>
            
        </div>
        <div className='program-discriprion-container'>
            <h2>العمل الحر</h2>
            <p>   هدفنا هو تمكين الشباب في المجتمع و خاصة في قطاع غزة من خالل تنمية و تطوير مهاراتهم في مجاالت مختلفة من ضمنها المشاركة المدنية و التي تهدف الى دمج الشباب الفلسطيني في المجتمع و زيادة وعيهم بحقوقهم وواجباتهم باإلضافة الى تعزيز مشاركتهم في القضايا المجتمعية . كما يهدف مشروع تمكين الشباب الى تطوير مهارات الشباب التقنية في مجاالت متعددة وذلك لتمكينهم للحصول على فرص عمل عن طريق العمل الحر. </p>
        </div>

    </div>
    </>
  )
}

export default RightTrainingProgram
