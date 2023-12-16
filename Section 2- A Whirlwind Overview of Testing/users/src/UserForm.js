import { useState } from 'react';

export default function UserForm() {
    const { name, setName } = useState("");
    const { email, setEmail } = useState("");

    const handleSubmit = (e) => {
        e.prevent.default();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <button>Add User</button>
        </form>
    )
}
