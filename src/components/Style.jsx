import styled from 'styled-components';
import './Style.css'
import { Button } from '@mui/material';

const MyYellowDiv = styled.div`
	background-color: yellow;
	padding: 20px;
	text-align: center;
`

const Layout = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-areas:
	'header header header header'
	'nav main main aside'
	'footer footer footer footer';
`;

const Container = styled.div`
	border: 2px solid #1c1c1c;
	padding: 20px;
`

const Header = styled(Container)`
	grid-area: header;
`;

const Nav = styled(Container)`
	grid-area: nav;
`;

const Main = styled(Container)`
	grid-area: main;
`;

const Aside = styled(Container)`
	grid-area: aside;
`;

const Footer = styled(Container)`
	grid-area: footer;
`;

const Style = () => {
	return (
		<div style={{
			marginTop: '20px',
			marginBottom: '150px',
		}}>
			{/* <div style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px'
			}}>
				<h1>Different Ways to Style React Component:</h1>
				<div style={{
					backgroundColor: "yellow",
					padding: "20px",
					textAlign: "center"
				}}>
					<h2>Inline Styles</h2>
				</div>

				<MyYellowDiv>
					<h2>Styled Components</h2>
				</MyYellowDiv>

				<div className="my-div">
					<h2>Css in Css</h2>
				</div>
			</div> */}

			<div>
				<h1>Grid Examples</h1>
				<Layout>
					<Header>Header</Header>
					<Nav>Nav</Nav>
					<Main>
						<Button variant='contained' color='success'>Material Button</Button>
					</Main>
					<Aside>Aside</Aside>
					<Footer>Footer</Footer>
				</Layout>
			</div>

			<div>
				<h1>Flex Examples</h1>
				<div style={{
					display: 'flex',
					flexDirection: "row",
					justifyContent: "space-evenly",
					gap: '20px'
				}}>
					<div style={{
						backgroundColor: "#bdbdbd",
						padding: "20px",
						textAlign: "center"
					}}>
						<h2>Inline Styles</h2>
					</div>

					<MyYellowDiv>
						<h2>Styled Components</h2>
					</MyYellowDiv>

					<div className="my-div">
						<h2>Css in Css</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Style