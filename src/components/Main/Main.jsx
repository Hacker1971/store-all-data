import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';

const Main = () => {
    const [datas, setData] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setData(data))
    },[])
    return (
        <div>
           {
            datas.map(data => <ShowData data={data} key = {data.id}></ShowData>)
           }
            
        </div>
    );
};

export default Main;