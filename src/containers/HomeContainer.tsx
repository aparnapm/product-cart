import useAxios from 'axios-hooks';
import { GET_PRODUCTS } from '../utils/ApiUrls';
import { GET, SELECTED_FIELDS } from '../utils/Constants';
import { useEffect, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ProductCard } from '../components/productCard';
import {  Grid } from '@mui/material';
import { CustomButton } from '../components/customButton';

export default function HomeContainer () {
    const limit = 6;
    const[skip, setSkip]= useState<number>(0);
    const[products,setProducts]= useState<IProduct[]>([]);
    const [total, setTotal]= useState<number>(6);
    const [{data, loading}] = useAxios({
        url: GET_PRODUCTS,
        method: GET,
        params: {limit: limit, skip: skip, select: SELECTED_FIELDS}
    });
  
    useEffect(()=>{
        if(data){
            setProducts(data.products as IProduct[]);
            setTotal(data.total);
        }
    },[data])

    const onProductSelect = (id:string)=>{
      console.log(id)
      const temp = [...products];
      temp.forEach((product:IProduct)=>{
        if(product.id==id){
          product.selected=!product.selected;
        }
         
      })
      console.log(temp)
      setProducts(temp);
    }

  return (
    <div>
      {!loading && products?
        <Grid container spacing={2}>
        {products.map((item: IProduct)=>{
            return(
                <Grid item lg={4} md={6} xs={12}>
                <ProductCard product={item} productSelectClick={onProductSelect}/>
                </Grid>
            )
        })}
       </Grid>
      :<div>Loading...</div>}
      <br/><br/>
      <Grid container >
        <Grid item lg={4} xs={4}>
      {skip>0?<CustomButton text={"Previous"} onClick={()=>setSkip(skip-limit)}/>:null}
      </Grid>
      <Grid item lg={4} xs={4}>
      <div>Page: {(skip/limit)+1} of {Math.ceil(total/limit)} </div>
      </Grid>
      <Grid item lg={4} xs={4}>
      {skip<total-limit?<CustomButton text={"Next"} onClick={()=>setSkip(skip+limit)}/>:<div/>}
      </Grid>
      </Grid>
    </div>
  );
}
