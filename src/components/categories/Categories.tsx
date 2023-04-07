import React, { FC, useEffect, useState } from 'react'
import { Quote } from '../../types/types';

const Categories = () => {
    const [items, setItems] = useState<Quote[]>([]);
    let category:string = 'history';
   
    if (localStorage.getItem('category')) {
        category = localStorage.getItem('category') || '';
    }

    useEffect(() => {
        
        fetch(`https://api.quotable.io/quotes?tags=${category},famous-quotes`)
            .then(res => res.json())
            .then(
                (res) => {
                    setItems([res]);
                },

                (error) => {
                    console.log(error);
                }
            )
    }, [])

    return (
        <div className='container d-flex flex-column align-items-center' style={{minHeight: '100vh'}}>
            <h2 className='mb-4'>Лучшие цитаты по категории: <b style={{color:'rgb(40,140,190)'}}>{category}</b></h2>
            {items.map((item) => {
                return <div className="wrapper d-flex flex-column mb-5" style={{height: '100%'}}>{
                    item.results.map((elem) => {
                        return (
                            <div className="quote-list mb-3 d-flex flex-column justigy-content-center" style={{ padding: "25px", background: "rgb(185 214 246)", borderRadius: '5px', maxWidth: "800px" }} key={elem._id} >
                                <blockquote className='blockquote mb-3'>{elem.content}</blockquote>
                                <i className='mb-2'>author: {elem.author}</i>
                            </div>)
                    })
                }
                </div>
            })
            }
        </div>)
}

export default Categories