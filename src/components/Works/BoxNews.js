import React from "react";
import "./Works.css";

function BoxNews(props) {
	return (
		<div className="container">
			<div className="BoxNews">
				<img src="/assets/student.jpg" width="100%" height="150px" />
				<h3>تدريبات التصميم الجرافيكي للشباب من الجنسين في حاضنة أجيال</h3>
				<p>
					استكمالًا لأنشطة مبادرة سمادك من بيتك ،ينفذ فريق 4Earth جلسة تغريد لإيصال
					هدفهم بشكل اوسع للحفاظ على البيئة و زيادة الوعي بمخاطر النفايات الصلبة و
					يأتي ذلك ضمن مشروع تمكين الشباب ٢٠٢٢ والذي تنفذه حاضنة أجيال بالشراكة مع IM
					الشريك السويدي للتنمية .
				</p>
			</div>
		</div>
	);
}

export default BoxNews;
