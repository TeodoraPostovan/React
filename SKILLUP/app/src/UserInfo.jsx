import React from 'react';


function UserInfo(){

    return(
        <div>
            <UserDatas userName="Ian" userGender="M" userAge="32" yearsWorked="10" workPlace="Microsoft" />
            <UserDatas userName="Loren" userGender="W" userAge="27" yearsWorked="7" workPlace="Crunchyroll" />
            <UserDatas userName="Maxim" userGender="M" userAge="40" yearsWorked="15" workPlace="Google" />
        </div>
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: 300,
            margin: 0
        }}
    />
);
function UserDatas(props) {
return(
    <div>
        <div style={{margin:10}}>
        <h4>Name: {props.userName}</h4>
        <p>Gender: {props.userGender}</p>
        <p>Age: {props.userAge}</p>
        <p>Years of working: {props.yearsWorked} at {props.workPlace}</p>
        <p>Salary: {props.yearsWorked * 10}</p>
        <ColoredLine color="grey" />
        </div>
    </div>
)
}

export default UserInfo;