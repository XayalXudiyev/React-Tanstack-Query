import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const UseQueryComponent = () => {
    const { data: useQueryData, error, isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:8080/products')
            console.log(res.data)
            return res.data
        }, enabled: false
    })
    if (isLoading) return <p>Loading ...</p>
    return (
        <div>
            {
                useQueryData?.map((it, ix) => (
                    <div key={ix}>
                        <div>
                            <div style={{ display: "flex" }}>
                                <h2>{it.id}</h2>
                                <h2>. {it.productName}</h2>
                            </div>
                            <h2 style={{ color: "red" }}>UnitsInStock : {it.unitsInStock}</h2>
                            <h2 style={{ color: "yellow" }}>QuantityPerUnit : {it.quantityPerUnit}</h2>
                            <hr />
                        </div>
                        <h3 style={{ color: "red", marginLeft: "30px", textTransform: 'uppercase' }}>{it.title}</h3>
                    </div>
                ))
            }
            <button onClick={() => { refetch() }}>Fetch Data</button>
        </div>
    )
}
export default UseQueryComponent