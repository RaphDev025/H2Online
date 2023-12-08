import React, {useState, useEffect} from 'react'
import bg from 'Assets/images/authUser.png'
import blob from 'Assets/images/blobBg.png'
import { useNavigate  } from 'react-router-dom';

const UserAuth = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const [err1, setErr1] = useState(false)
    const [err2, setErr2] = useState(false)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if(formData.name !== '' && formData.password !== '') {
            document.getElementById('logBtn').removeAttribute('disabled')
            if(formData.name !== 'rapi' || formData.password !== 'pepi' ){
                document.getElementById('logBtn').setAttribute('disabled', 'true')
                setErr1(formData.name !== 'rapi')
                setErr2(formData.password !== 'pepi')
            }else {
                setErr1(false)
                setErr2(false)
            }
        } else {
            document.getElementById('logBtn').removeAttribute('disabled')
        }
    }, [formData]);
    
    const handleSubmit = () => {
        alert(formData.name === 'rapi' && formData.password === 'pepi')
        navigate('/dashboard');
    }
    return (
        <main className='h-100 d-flex justify-content-center align-items-center blob' style={{backgroundImage: `url(${blob})`, backgroundColor: '#C3E9FF'}}>
            <section className='rounded-3 d-flex bg-light'>
                <div className='rounded-2' style={{backgroundColor: 'var(--blue)'}}>
                    <img src={bg} alt='...' />
                </div>
                <form className='d-flex align-items-center justify-content-center flex-column p-5' >
                    <h3 className='fs-2 header'>Welcome!</h3>
                    <h6 className='fs-5 prompt'>Sign in to your Account</h6>
                    <div className='d-flex flex-column gap-1'>
                        <div className='d-flex flex-column '>
                            <label htmlFor='uName' >User ID or Username</label>
                            <input type='text' className={`p-2 rounded-2 ${err1 ? 'border-danger' : ''}`} value={formData.name} onChange={handleChange} id='uName' placeholder='User ID or Username' name='name'  required />  
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor='pass' >Password</label>
                            <input type='password' className={`p-2 rounded-2 ${err2 ? 'border-danger' : ''}`} id='pass' value={formData.password} onChange={handleChange} placeholder='Password' name='password' required />  
                            {err2 ? <span className='error-msg text-danger'>Wrong Password</span> : ''}   
                            {err1 ? <span className='error-msg text-danger'>Wrong Username</span> : ''}                  
                        </div>
                    </div>
                    <div className='mt-5 w-100'>
                        <button id='logBtn' className='w-100 rounded-2 py-2 text-uppercase' onClick={handleSubmit}>Sign In</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default UserAuth