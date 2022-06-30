import { useEffect, useState } from "react"

const useSecretToken = user => {
    const [secretToken, setSecretToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        // console.log(email);
        // const url = `http://localhost:5000/user/${email}`;
        const url = `https://agile-castle-63096.herokuapp.com/user/${email}`;
        if (email) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    const secretToken = data.secretToken;
                    localStorage.setItem('secretToken', secretToken);
                    setSecretToken(secretToken);
                    sessionStorage.setItem('isUser', true);
                    // console.log(data);
                })
        }
    }, [user]);

    return [secretToken, setSecretToken];
}

export default useSecretToken;