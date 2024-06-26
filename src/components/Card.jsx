import React,{useEffect, useState,useRef} from 'react'
import { useDispatchCart, useCart } from './contextReducer';
export default function (props) {
    let dispatch=useDispatchCart();
    let data=useCart();
    let options = props.options;
    let priceRef=useRef();
    let priceOptions = Object.keys(options);
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("");
    const handleAddToCart = async () => {
        let food=[];
        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item;
                break;
            }
            if(food!=[]){
                if(food.size==size){
                    await dispatch({type:"update",id:food._id,price:finalPrice,qty:qty});
                    return 
                }
                else if(food.size!=size){
                    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size});
                    return 
                }
            }
            return ;
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size});
        // console.log(data);
    }
    let finalPrice=qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value);
    },[])
    return (
        <div>
            <div className="card mt-5 mb-5" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 classNameName="card-title">{props.foodItem.name}</h5>
                    <p classNameName="card-text">Important information</p>
                    <div className='container w-100 '>
                        <select className='m-2 h-100 bg-dark' onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 rounded bg-success' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>Rs.{finalPrice}/-</div>
                        <hr />
                        <button className="btn bg-white text-success mx-2" onClick={handleAddToCart}>Add to cart </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
