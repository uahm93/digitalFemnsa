"use client"; 
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './page.module.css';
import SearchInput from '../SearchInput';
import Navigation from '../NavigationButtons'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { handleGetProducts } from '../Repository'
import { filterProductsByInput, filterProductsByCategory } from '../utils'

type IProducts = {
  push(arg0: { title: string; totalProducts: any; totalPrice: any; }): unknown;
  length: number;
  map(arg0: (row: any) => import("react").JSX.Element): import("react").ReactNode;
  reduce: any;
  [index: number]:
  {
    title: string;
    description?: string;
    price?: number;
    category?: string;
    totalProducts?: number;
    totalPrice?: number;
  }
}

const HEADER = [['Titulo', 'Descripción', 'Precio', 'Categoría'],['Categoría', 'Total de Productos', 'Precio Total']]

const CustomTable = () => {

  const [products, setProduts] = useState<IProducts>([])
  const [productsSearched, setProductsSearched] = useState<IProducts>([])
  const [categoryList, setCategoryList] = useState<IProducts>([])
  const [input, setInput] = useState<string>("")
  const [category, setCategory] = useState<number>(0)

  const handleGetData = async () => {
    const { data } = await handleGetProducts();
    setProduts(data.products)
    setProductsSearched(data.products)
  }

  const handleSearch = () => {
    if(!input.toLowerCase()){
      if(category){
        setCategoryList(categoryList)
      }else{
        setProduts(products)
      }
    }

    const filtered = category 
    ? filterProductsByCategory(categoryList, input) 
    : filterProductsByInput(products, input);

    setProductsSearched(filtered)
  }

  const handleGetSummary = () => {
    
    let transformData: IProducts = []
    
    const summary = products.reduce((grouper: any, product: any) => {
      const { category, price } = product;
      
      if (!grouper[category]) {
        grouper[category] = { totalProducts: 0, totalPrice: 0 };
      }

      grouper[category].totalProducts += 1;
      grouper[category].totalPrice += price;

      return grouper;
    }, {});

    Object.keys(summary).forEach(category => {
      transformData.push({
        title: category, 
        totalProducts: summary[category].totalProducts, 
        totalPrice: summary[category].totalPrice.toString() 
      })
    });
    setProductsSearched(transformData)
    setCategoryList(transformData)
  }

  useEffect(() => {
    handleGetData()
  },[])

  useEffect(() => {
    if(category){
      handleGetSummary()
    }else{
      setProductsSearched(products)
    }
  },[category])

  return (
    <TableContainer component={Paper} className={styles.mainContainer} >
      <Box className={styles.actionsContainer}>
        <SearchInput {...{setInput, handleSearch}} />
        <Navigation setValue={setCategory} value={category} />
      </Box>
      {productsSearched.length === 0 ? <Box className={styles.circularContainer}><CircularProgress/></Box> :
        <Box className={styles.tableContainer} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                { HEADER[category].map((index) => <TableCell key={index} >{index}</TableCell>) }
              </TableRow>
            </TableHead>
            <TableBody>
              {productsSearched.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell >{category ? row.totalProducts : row.description}</TableCell>
                  <TableCell >{category ? row.totalPrice : row.price}</TableCell>
                  {row.category && <TableCell >{row.category}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      }
    </TableContainer>
  );
}

export default CustomTable;
