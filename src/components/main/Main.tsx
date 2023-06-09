
import React, { FC, useEffect, useState } from 'react'
import { Quote } from '../../types/types';
import { Link } from 'react-router-dom';

const Main: FC = () => {

    const [items, setItems] = useState<Quote[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [arrFavorite, setArrFavorite] = useState<any>()

    let emptyFavorite = localStorage.getItem('favorite');
    let emptyItems = localStorage.getItem('allItems');

    useEffect(() => {

        fetch('https://api.quotable.io/quotes?page=4')
            .then(res => res.json())
            .then(
                (res) => {
                    if (emptyItems === null) {
                        setItems([res]);
                        localStorage.setItem('allItems', JSON.stringify([res]))
                    }
                },

                (error) => {
                    console.log(error);
                }
            )
        if (emptyFavorite === null) {
            localStorage.setItem('favorite', JSON.stringify([]))
        }

    }, [])


    useEffect(() => {
        if (emptyItems !== null) {
            setItems(JSON.parse(localStorage.getItem('allItems') || ""))
        }

        setArrFavorite(JSON.parse(localStorage.getItem('favorite') || ""))
    }, [counter])

    function addCategory(category: string) {
        localStorage.setItem('category', category)
    }


    function addFavorite(id: string) {
        let itemId: number;
        let isItem: any = items[0].results.filter((item) => item._id === id);
        itemId = items[0].results.indexOf(isItem[0]);
        arrFavorite.push(isItem[0])
        items[0].results[itemId].favorite = true;

        setCounter(counter + 1);
        localStorage.setItem('allItems', JSON.stringify(items))
        localStorage.setItem('favorite', JSON.stringify(arrFavorite))
    }

    function deleteFavorite(id: string) {
        let favorite: [{
            favorite: boolean,
            author: string,
            authorSlug: string,
            content: string,
            dateAdded: string,
            tags: string[],
            _id: string,
        }] = JSON.parse(localStorage.getItem('favorite') || "")

        let isItem: any = items[0].results.filter((item) => item._id === id);
        let localItem: any = favorite.filter((item) => item._id === id);
        let itemId = items[0].results.indexOf(isItem[0]);
        let localId = favorite.indexOf(localItem[0]);
        items[0].results[itemId].favorite = false;
        favorite.splice(localId, 1);

        setCounter(counter + 1)
        localStorage.setItem('allItems', JSON.stringify(items))
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }

    return (
        <main className="container d-flex justify-content-center">
            {items.map((item) => {

                return <div className="wrapper d-flex flex-column mb-5" >{
                    item.results.sort(function (a): any {
                        if (a.favorite && a.favorite !== undefined) {
                            return -1
                        } else {
                            return 1
                        }
                    }).map((elem) => {
                        return (<div className="quote-list mb-3 d-flex flex-column justigy-content-center" style={{ padding: "25px", background: "rgb(185 214 246)", borderRadius: '5px', maxWidth: "800px" }} key={elem._id} id={elem._id}>
                            <blockquote className='blockquote mb-3'>{elem.content}</blockquote>
                            <i className='mb-2'>author: {elem.author}</i>
                            {!elem.favorite ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star ms-2" viewBox="0 0 16 16" onClick={() => addFavorite(elem._id)} style={{ cursor: "pointer" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-2" viewBox="0 0 16 16" onClick={() => deleteFavorite(elem._id)} style={{ cursor: "pointer" }}>
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>)}

                        </div>)
                    })
                }
                </div>
            })}

            <div className="d-flex flex-column align-items-center">
                <div className='wrapper author-list ms-3' style={{ padding: "25px", background: "rgb(185 214 246)", borderRadius: '5px', maxWidth: "800px", maxHeight: "100%", minWidth: '300px', marginBottom: "20px" }} >
                    <h3 style={{ color: "#06368d" }} className='mb-3'>Категории</h3>
                    <Link to='/categories' style={{ textDecoration: "none" }}><p onClick={() => addCategory('science')} style={{ textDecoration: "none" }}>Наука</p></Link>
                    <Link to='/categories' style={{ textDecoration: "none" }}><p onClick={() => addCategory('history')} style={{ textDecoration: "none" }}>История</p></Link>
                    <Link to='/categories' style={{ textDecoration: "none" }}><p onClick={() => addCategory('technology')} style={{ textDecoration: "none" }}>Технологии</p></Link>
                    <Link to='/categories' style={{ textDecoration: "none" }}><p onClick={() => addCategory('politics')} style={{ textDecoration: "none" }}>Политика</p></Link>
                    <Link to='/categories' style={{ textDecoration: "none" }}><p  onClick={() => addCategory('future')} >Футуризм</p></Link>
                </div>
                {items.map((item) => {
                    return <div className='wrapper author-list ms-3' style={{ padding: "25px", background: "rgb(185 214 246)", borderRadius: '5px', maxWidth: "800px", maxHeight: "100%", minWidth: '300px' }} >
                        <h3 style={{ color: "#06368d" }} className='mb-3'>Лучшие авторы</h3>
                        {item.results.map((elem) => {
                            let url = `#${elem._id}`;
                            return <div className='author-item'>

                                <a href={url} style={{ textDecoration: "none" }} className='link-primary'> <p >{elem.author}</p></a>
                            </div>
                        })}
                    </div>
                })}
            </div>

        </main>
    )
}

export default Main