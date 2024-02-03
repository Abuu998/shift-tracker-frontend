import Container from "../../components/Container";
import ShiftList from "../../components/ShiftList";
import StartNewShift from "../../components/shift/StartNewShift";
import { authUser } from "../../utilities/auth";

export const loader = ({request}) => {
	return authUser(request)
}

export default function Home() {

	return (
		<main>
			<Container className="flex flex-col gap-12">
				<StartNewShift />
				<ShiftList />
			</Container>
		</main>
	);
}
