import React, { useState } from 'react';

function AddChildPage() {
    const [userID, setUserID] = useState('');
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const response = await fetch('/api/carenewchild/sql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserID: userID,
                ChildName: childName,
                DateOfBirth: dateOfBirth,
                Gender: gender,
                BloodType: bloodType
            })
        });
        
        const data = await response.text();
        setMessage(data);
        if (response.ok) {
            // Redirect to dashboard page
            window.location.href = '/dashboard';
        }
    };

    return (
        <div className="relative h-screen">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0456/large_preview/_import_609d0d8f44ac37.93245856.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add New Child</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userID">User ID</label>
                            <input id="userID" name="UserID" value={userID} onChange={(e) => setUserID(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="User ID" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="childName">Child Name</label>
                            <input id="childName" name="ChildName" value={childName} onChange={(e) => setChildName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Child Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">Date of Birth</label>
                            <input id="dateOfBirth" name="DateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                            <select id="gender" name="Gender" value={gender} onChange={(e) => setGender(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodType">Blood Type</label>
                            <input id="bloodType" name="BloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Blood Type" />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                            Submit
                        </button>
                    </form>
                    <div className="text-center mt-4">{message}</div>
                </div>
            </div>
        </div>
    );
}

export default AddChildPage;
