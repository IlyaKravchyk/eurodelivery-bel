import { Container } from "../Container/Container";
import { HeaderSinglePage } from "./HeaderSinglePage/HeaderSinglePage";
import { SinglePageItems } from "./SinglePageItems/SinglePageItems";
import { shopData } from "../../data/shopData";

import style from './SinglePage.module.css';
import { useNavigate, useParams } from "react-router-dom";

export const SinglePage = () => {

	const navigate = useNavigate();
	const { category } = useParams();

	const monitorWidth = window.innerWidth

	const goBack = () => navigate(-1)
	const thisDataPage = shopData.find(item => item.category === category)
	const clickHandler = (e) => {
		(monitorWidth < '768') ? e.stopPropagation() : goBack()
	}

	return (
		<div className={style.singlePage} >
			<HeaderSinglePage
				goBack={goBack}
			/>
			<div className={style.wrapper} onClick={clickHandler}>
				<Container>
					<SinglePageItems
						thisDataPage={thisDataPage}
					/>
				</Container>
			</div>
		</div>
	)
}