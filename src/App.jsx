import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export default function App() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function getProducts(){
			const res = await fetch('https://dummyjson.com/products')
			const data = await res.json()
			setProducts(data.products)
		}	

		getProducts()
	}, [])

	return (
		<Grid container>
			{
				products.map((p, key) => (
					<Grid key={key} item xs={6} md={4} lg={3}>
						<img src={p.thumbnail} />
						<Typography>{ p.title }</Typography>
						<Typography>{ p.description }</Typography>
					</Grid>
				))
			}
		</Grid>
	)
}