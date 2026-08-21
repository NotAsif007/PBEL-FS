import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(3);
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }
    const fetchUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
        fetchUsers();
    }, []);

    console.log(data);
    console.log(users);

    const handleIncrement = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <div>
                <h3>Fetched Users: </h3>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h4>{user.name.firstname} {user.name.lastname}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
