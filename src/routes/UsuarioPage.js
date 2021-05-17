import { useParams } from "react-router"

export const UsuarioPage = () => {

    // let params = useParams()
    // console.log(params)
    let {username} = useParams()

    return (
        <div>
            <h3>Perfil de usuario</h3>
            <p> <b> {username}  </b> </p>
        </div>
    )
}
