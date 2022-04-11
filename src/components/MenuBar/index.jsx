import { ContairnerMenu } from './styles';
import { Link } from 'react-router-dom';

const MenuBar = () => {
	return (
		<ContairnerMenu>
			<li>
				{/* <a href="/home">Home</a> */}
				<Link to="/home">Home</Link>
			</li>
			<li>
				{/* <a href="/siginup">Cadastrar</a> */}
				<Link to="/siginup">Cadastrar</Link>
			</li>
			<li>
				{/* <a href="/users">Listar de usuários</a> */}
				<Link to="/users">Lista de usuários</Link>
			</li>
		</ContairnerMenu>
	);
};
export default MenuBar;
