import React from "react";
import Title from "../Title/Title";
import "./Message.css";
import MessageBox from "./MessageBox";

function Message() {
	return (
		<div className="container">
			<Title name="رسالتنا ورؤيتنا" />
			<div className="container-message" id="message">
				<div>
					<MessageBox
						title="رسالتنا"
						description="هدفنا هو تمكين الشباب في المجتمع و خاصة في قطاع غزة من خالل تنمية و تطوير مهاراتهم في مجاالت مختلفة من ضمنها 
                        المشاركة المدنية و التي تهدف الى دمج الشباب الفلسطيني في المجتمع و زيادة وعيهم بحقوقهم وواجباتهم باإلضافة الى تعزيز 
                        مشاركتهم في القضايا المجتمعية .
                        كما يهدف مشروع تمكين الشباب الى تطوير مهارات الشباب التقنية في مجاالت متعددة وذلك لتمكينهم للحصول على فرص عمل عن 
                        طريق العمل الحر."
					/>
				</div>
				<div>
					<MessageBox
						title="رؤيتنا"
						description="هدفنا هو تمكين الشباب في المجتمع و خاصة في قطاع غزة من خالل تنمية و تطوير مهاراتهم في مجاالت مختلفة من ضمنها 
                        المشاركة المدنية و التي تهدف الى دمج الشباب الفلسطيني في المجتمع و زيادة وعيهم بحقوقهم وواجباتهم باإلضافة الى تعزيز 
                        مشاركتهم في القضايا المجتمعية .
                        كما يهدف مشروع تمكين الشباب الى تطوير مهارات الشباب التقنية في مجاالت متعددة وذلك لتمكينهم للحصول على فرص عمل عن 
                        طريق العمل الحر."
					/>
				</div>
			</div>
		</div>
	);
}

export default Message;
