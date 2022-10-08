import React from 'react';

function FormHandle() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');
    const [hobby, setHobby] = React.useState();

    const handleSubmit = () => {
        if(
            name != '' &&
            email != '' &&
            gender != '' &&
            dob != '' &&
            phone != '' &&
            address != '' &&
            zipcode != '' &&
            hobby != ''
        ){
            console.log(name)
            console.log(email)
            console.log(gender)
            console.log(dob)
            console.log(phone)
            console.log(address)
            console.log(zipcode)
            console.log(hobby)
        } else {
            alert('please fill all the fields')
        }
    }


    return (
        <div>
            <div>
                <label>Name: </label>
                <input type="text" 
                placeholder="Enter Your Name" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
                />
            </div>

            <div>
                <label>Email: </label>
                <input type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>

            <div>
                <label>Gender</label>
                <div>
                    <input type="radio"
                    onChange={(e) => setGender('Male')}
                    name="gender"
                    />
                    <label>Male</label>
                </div>
                <div>
                    <input type="radio"
                    onChange={(e) => setGender('Female')}
                    name="gender"
                    />
                    <label>Female</label>
                </div>
                <div>
                    <input type="radio"
                    onChange={(e) => setGender('Other')}
                    name="gender"
                    />
                    <label>Other</label>
                </div>
            </div>

            <div>
                <label>Date of Birth</label>
                <input type="date"
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                />
            </div>

            <div>
                <label>Phone No: </label>
                <input type="number"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                />
            </div>

            <div>
                <label>Address: </label>
                <input type="text"
                placeholder="Enter Your Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                />
            </div>

            <div>
                <label>Zip Code: </label>
                <input type="number"
                placeholder="Enter Your Zip Code"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
                />
            </div>

            <div>
                <label>Hobby: </label>
                <input type="text"
                placeholder="Enter Your Hobby"
                onChange={(e) => setHobby(e.target.value)}
                value={hobby}
                />
            </div>

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    )
}

export default FormHandle;