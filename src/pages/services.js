import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Box from '../components/Box'
import '../CSS/NavBar.css'
import app from '../firebase'
import GridColection from '../components/content/gridColection'
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from 'react';
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

}));
const Products = () => {
    const [products, setProducts] = useState([])
    const [itemSelectd, setItemSelectd] = useState({})
    const [selectdProduct, setSelectdProduct] = useState(false)

    const classes = useStyles();
    const getProducts = async () => {
        app.firestore().collection("service").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })

            })
            setProducts(docs);

        })
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

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                    >
                                        <MenuItem value=''>None</MenuItem>
                                        <MenuItem value={1}>Op 1</MenuItem>
                                        <MenuItem value={2}>Op1</MenuItem>
                                        <MenuItem value={3}>Op3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>
                            <MenuList>
                                <Typography variant="h7"
                                    color="textSecondary"
                                    component="h3">
                                    Filtrar
                                </Typography>
                                <MenuItem>Categoria 1</MenuItem>
                                <MenuItem>Categoria 2</MenuItem>
                                <MenuItem>Categoria 3</MenuItem>
                                <MenuItem>Categoria 4</MenuItem>
                                <MenuItem>Categoria 5</MenuItem>
                                <MenuItem>Categoria 6</MenuItem>
                                <MenuItem>Categoria 7</MenuItem>
                                <MenuItem>Categoria 8</MenuItem>
                                <MenuItem>Categoria 9</MenuItem>

                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Grid container justifyContent="center" spacing={2}>

                            {products.map((p) => (
                                <GridColection key={p.id} item={p} showDetails={() => {
                                    handleOpenModal()
                                    setItemSelectd(p);
                                }
                                } />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default Products;