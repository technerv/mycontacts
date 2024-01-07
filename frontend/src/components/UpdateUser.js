import React, {useState, useEffect} from 'react'
import  {useParams} from 'react-router'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

function UpdateUser (){

	const [name, setName] = useState("")
	const [phoneno, setPhoneNo] = useState("")
	const [email, setEmail] = useState("")

		let navigate = useNavigate();

		const { id } = useParams();

		//load all records

		const loadRecords = async() => {

			const { data } = await Axios.get(`http://127.0.0.1:8000/api/${id}/`);
			console.log(data) 

			setName(data.name)
			setPhoneNo(data.phoneno)
			setEmail(data.email)
		}

		useEffect(() => {
			loadRecords()
		},[])

		//Update Records
		const UpdateRecordInfo = async() => {

			let formField = new FormData()
			formField.append('name', name)
			formField.append('phoneno', phoneno)
			formField.append('email', email)

		await Axios({
			method: 'PUT',
			url: `http://127.0.0.1:8000/api/${id}/`,
			data: formField
		}).then(response => {
			console.log(response.data)
			window.alert("Successfully Updated")
			navigate('/')
		})
	} 

	return(

		<div>
			
		
			<h4>Update Record</h4>

			<div className="form-group">		
			
			<input
				id="name"
				name = "name"
				type="text"
				className="form-control"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder = "Name"
			/>
			
			<br />

			<input 
				id="phoneno"
				name="phoneno"
				type="text"
				className="form-control"
				value={phoneno}
				onChange={(e) => setPhoneNo(e.target.value)}
				placeholder="Phone Number" 
			/>
			
			<br />
			
			<input 
				id="email"
				name="email"
				type="email"
				className="form-control"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email Address" 
			/>
			
			<br />

			<br />

			<button className="btn btn-success" onClick = {UpdateRecordInfo}>Update Record</button> 
		
			</div>
			
		</div>
			)

}

export default UpdateUser;