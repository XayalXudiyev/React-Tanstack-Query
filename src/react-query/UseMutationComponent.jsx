import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const UseMutationComponent = () => {
    const { data, isLoading, mutate ,reset } = useMutation({
        mutationFn: async (user) => {
            const res = await axios.post("https://jsonplaceholder.typicode.com/users", user)
            return res.data
        }
    })

    if (isLoading) return <p>Loading ...</p>
    console.log(data, 'Mutated data')

    return (
        <div>
            <button onClick={() => { mutate({ title: "test", bodyyy: "Testbody", userId: 1, }) }}>Post Data</button>

            <button onClick={() => { reset() }}>Post Reset</button>

        </div>
    )
}

export default UseMutationComponent