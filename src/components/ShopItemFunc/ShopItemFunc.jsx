import classes from './shopItemFunc.module.css';

export const ShopItemFunc = (props) => {
	const {
		brand,
		title,
		description,
		descriptionFull,
		price,
		currency,
	} = props.info;
	return (
		<article className={classes['product-info']}>
			<div className={classes['product-info__wrapper']}>
				<div className={classes['product-info__content']}>
					<h3 className={classes['product-info__brand']}>{brand}</h3>
					<h2 className={classes['product-info__title']}>{title}</h2>
					<h3 className={classes['product-info__description']}>{description}</h3>
					<p className={classes['product-info__descriptionFull']}>{descriptionFull}</p>
				</div>
				<footer className={classes['product-info__footer']}>
					<span className={classes['product-info__price']}>{currency + price.toFixed(2)}</span>
					<button className={classes['product-info__cart-btn']}>Добваить в корзину</button>
				</footer>
			</div>
		</article>
	);
}
