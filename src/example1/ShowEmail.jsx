import { useSelector } from "react-redux"



const ShowEmail = ()=>{
    const emails = useSelector((state)=>state.email.userEmail)


    return(
        <div>
            <p>saved email</p>
            <p>{emails ? emails : "no email save"}</p>
        </div>
    )
};
export default ShowEmail;