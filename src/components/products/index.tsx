import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import {  Box, Grid } from '@mui/material';
import { IProduct } from '../../interfaces/IProduct';
import { GET_PRODUCTS } from '../../utils/ApiUrls';
import { GET, SELECTED_FIELDS } from '../../utils/Constants';
import { CustomButton, CustomCard, Loading } from '../common';
interface IProps{
  addProduct: (product:IProduct)=> void;
  removeProduct: (product:IProduct)=> void;
  isItemSelected: (id:string)=>boolean;
}
export default function Products (props: IProps): JSX.Element {
    const limit = 6;
    const[skip, setSkip]= useState<number>(0);
    const[products,setProducts]= useState<IProduct[]>([]);
    const [total, setTotal]= useState<number>(6);
    const [{data, loading}] = useAxios({
        url: GET_PRODUCTS,
        method: GET,
        params: {limit: limit, skip: skip, select: SELECTED_FIELDS}
    });

    const {addProduct,removeProduct} = props;
  
    useEffect(()=>{
        if(data){
            setProducts(data.products as IProduct[]);
            setTotal(data.total);
        }
    },[data])

    const onProductSelect = (id:string)=>{
      const temp = [...products];
      temp.forEach((product:IProduct)=>{
        if(product.id===id){
          if(!props.isItemSelected(product.id)){
            addProduct(product);
          }else{
            removeProduct(product);
          }
        }
      
      })
      setProducts(temp);
    }

  return (
    <Box sx={{padding:"50px"}}>
      {!loading && products?
      <div>
        <Grid container spacing={2}>
        {products.map((item: IProduct)=>{
            return(
                <Grid item lg={4} md={6} xs={12}>
                <CustomCard id={item.id}
                title={item.title}
                image={item.thumbnail}
                description={item.price.toFixed(2).toString()}
                onSelect={onProductSelect} selected={props.isItemSelected(item.id)}/>
                </Grid>
            )
        })}
       </Grid>
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
      </div>:<Loading/>}
    </Box>
  );
}
