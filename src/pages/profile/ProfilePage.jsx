import Container from "../../components/Container"
import ProfilePicture from "../../components/ProfilePicture"
import GoBackLink from "../../components/GoBackLink"
import { authUser } from "../../utilities/auth"
import { useSelector } from "react-redux"

export const loader = ({ request }) => {
    return authUser(request)
}

function ProfilePage() {
    const user = useSelector(state => state.user.user)

    return (
        <main>
            <Container className="flex flex-col gap-16">
                <GoBackLink />
                <div className="flex flex-col gap-4 items-center">
                    <ProfilePicture session={user} />
                    <p className="font-medium text-2xl">{user?.name}</p>
                    <p className="text-sm">{user?.email}</p>
                </div>
            </Container>
        </main>
    )
}

export default ProfilePage