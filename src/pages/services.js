import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Box from '../components/Box'
import '../CSS/NavBar.css'
import app from '../firebase'
import GridColection from '../components/content/gridColection'
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from 'react';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import NavBar from '../components/content/navBar'
import Paper from '@material-ui/core/Paper';
import { Breadcrumbs, Typography } from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Detail from './detail'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 2,
    },
    btnBack: {
        margin: 40,
    },
    paper: {
        marginRight: theme.spacing(2),
        width: 350
    },
    paper2: {
        marginRight: theme.spacing(2),
        textAlign: 'right',
    },
    search: {
        textAlign: 'center',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    iconButton: {
        padding: 20,
        marginLeft: 60,
    },

}));

const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([])
    const [itemSelectd, setItemSelectd] = useState({})
    const [selectdProduct, setSelectdProduct] = useState(false)
    const [filterSelectd, setFilterSelectd] = useState(false)
    const [filterCategory, setFilterCategory] = useState('')
    const getProducts = async () => {
        app.firestore().collection("service").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducts(docs);
        })
    }
    const filterData = (value) => {
        setFilterSelectd(true)
        setFilterCategory(value)
    }
    const handleOpenModal = () => {
        setSelectdProduct(true)
    }
    const handleCloseModal = () => {
        setSelectdProduct(false)
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <NavBar />
            <Detail open={selectdProduct} data={itemSelectd} close={handleCloseModal} />
            <Box>

                <h1>Servicios</h1>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Inicio</Link>
                    <Link color="textPrimary" to="/services">Servicios</Link>
                </Breadcrumbs>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Paper>

                            <div className={classes.search}>

                                <InputBase
                                    className={classes.input}
                                    placeholder="Buscar"
                                    inputProps={{ 'aria-label': 'Buscar' }}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                            </div>
                            <div className={classes.paper2}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>
                            <MenuList>
                                <Typography variant="h7"
                                    color="textSecondary"
                                    component="h3">
                                    Filtrar por categoria
                                    {filterSelectd === true &&
                                        <Tooltip title='Limpiar filtro'>
                                            <IconButton onClick={() => {
                                                setFilterCategory('')
                                                setFilterSelectd(false)
                                            }} className={classes.iconButton}>
                                                <DeleteSweepIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                </Typography>
                                <MenuItem onClick={() => filterData('Hogar')}>Hogar</MenuItem>
                                <MenuItem onClick={() => filterData('Transporte')}>Transporte</MenuItem>
                                <MenuItem onClick={() => filterData('Informatica')}>Informatica</MenuItem>

                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Grid container justifyContent="center" spacing={2}>
                            {filterSelectd == false &&
                                products.map((p) => (
                                    <GridColection key={p.id} item={p} showDetails={() => {
                                        handleOpenModal()
                                        setItemSelectd(p);
                                    }} />
                                ))
                            }
                            {filterSelectd == true &&
                                products.filter(item => item.category == filterCategory).map((p) => (
                                    <GridColection key={p.id} item={p} showDetails={() => {
                                        handleOpenModal()
                                        setItemSelectd(p);
                                    }} />
                                ))
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default Products;