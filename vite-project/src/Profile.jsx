function Profile (){
    const name="Drakshayani"
    const age=18
    const isstudent=true
    return(
        <div>
            <p>Name:{name}</p>
            <p>age:{age}</p>
            <p>{isstudent===true?"i'm a student":"not a student"}</p>
        </div>
    )
}
export default Profile