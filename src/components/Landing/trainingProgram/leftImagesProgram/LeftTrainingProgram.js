import React from 'react'
import './LeftTrainingProgram.css'
import pic from '../../../../assets/programs.jpg'
 function LeftTrainingProgram() {
  return (
    <>
    <div className='prgrams-container' id='prog'>
        <div className='program-discriprion-container'>
            <h2>العمل الحر</h2>
            <p>   هدفنا هو تمكين الشباب في المجتمع و خاصة في قطاع غزة من خالل تنمية و تطوير مهاراتهم في مجاالت مختلفة من ضمنها المشاركة المدنية و التي تهدف الى دمج الشباب الفلسطيني في المجتمع و زيادة وعيهم بحقوقهم وواجباتهم باإلضافة الى تعزيز مشاركتهم في القضايا المجتمعية . كما يهدف مشروع تمكين الشباب الى تطوير مهارات الشباب التقنية في مجاالت متعددة وذلك لتمكينهم للحصول على فرص عمل عن طريق العمل الحر. </p>
        </div>
        
        <div class="program-image-container">
            <div class="small-image1"><img src={pic}/></div>
            <div class="small-image2"><img src={pic}/></div>
            <div class="big-image"><img src={pic}/></div>
            
        </div>

    </div>
    
    </>
  )
}

export default LeftTrainingProgram
