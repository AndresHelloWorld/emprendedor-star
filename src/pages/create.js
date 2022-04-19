import React from 'react';
import app from '../firebase'
import Box from '../components/Box'
import NumberFormat from 'react-number-format';
import { TextField, NativeSelect, InputBase, Button, Input, InputAdornment, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { withStyles, makeStyles } from '@material-ui/core/styles'

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
}

const Create = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState();
    const [reference, setReference] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [size, setSize] = React.useState("");
    const [type, setType] = React.useState("");
    const [weight, setWeight] = React.useState(0);
    const [contact, setContact] = React.useState("");
    const [photo, setPhoto] = React.useState();
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [skill, setSkill] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const [selectdImg, setSelectdImg] = React.useState(false);
    const [value, setValue] = React.useState('1');
    const classs = useStyles();

    const addNew = async () => {
        var collectionName = ""
        collectionName = (value === "1") ? "product" : "service"

        const collectionRef = app.firestore().collection(collectionName)
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(photo.name)
        await archivoPath.put(photo)
        const urlImgStor = await archivoPath.getDownloadURL();
        if (value === "1") {
            setPhotoUrl(urlImgStor)
            console.log("Archivo cargado: ", photo.name, " Url: ", urlImgStor)
            const docu = await collectionRef.doc(name).set(
                {
                    contact: contact,
                    description: description,
                    name: name,
                    price: price,
                    reference: reference,
                    size: size,
                    type: "Producto",
                    weight: weight,
                    urlImage: urlImgStor
                }
            ).catch(error => {
                console.error(error.message)
            })
            window.location.reload(false)
        } else {
            const collectionRef = app.firestore().collection(collectionName)
            const docu = await collectionRef.doc(name).set(
                {
                    contact: contact,
                    description: description,
                    experience: experience,
                    skill: skill,
                    name: name,
                    type: "Servicio",
                    urlImage: urlImgStor
                }
            ).catch(error => {
                console.error(error.message)
            })
            window.location.reload(false)
        }
    }

    const handleSelectdImg = (e) => {
        setPhoto(e.target.files[0])
        setSelectdImg(true)
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <form className={classs.boxInput}>
                <TabContext value={value}>
                    <AppBar position="static">
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Producto" value="1" />
                            <Tab label="Servicio" value="2" />
                        </TabList>
                    </AppBar>
                    <FormControl className={classs.boxInput}>
                        <TextField id="nombre" name="titulo" onChange={(e) => {
                            setName(e.target.value)
                        }} label="Titulo*" variant="outlined" />

                    </FormControl>
                    <FormControl>
                        <TextField id="contacto" name="contacto" onChange={(e) => {
                            setContact(e.target.value)
                        }} label="Número celular*" variant="outlined" />

                    </FormControl>

                    <TabPanel className={classs.boxInput} value="1">
                        <FormControl>
                            <TextField id="reference" name="referen" label="Referencia del producto" onChange={(e) => { setReference(e.target.value) }} variant="outlined" />
                        </FormControl>
                        <FormControl >
                            <TextField id="size" name="size" label="Tamaño del producto" placeholder="10 * 10 cm" onChange={(e) => { setSize(e.target.value) }} variant="outlined" />
                        </FormControl>
                        <FormControl>
                            <TextField id="weight" name="weight" label="Peso" placeholder="1 kg" onChange={(e) => { setWeight(e.target.value) }} variant="outlined" />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Precio"
                                onChange={(e) => { setPrice(e.target.value) }}
                                name="price"
                                id="price"
                                InputProps={{
                                    inputComponent: NumberFormatCustom,
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField
                                id="description"
                                label="Descripción"
                                onChange={(e) => { setDescription(e.target.value) }}
                                multiline
                                rows={6}
                                variant="outlined"
                            />
                        </FormControl>
                        <input
                            accept="image/*"
                            id="photoP"
                            name="fotoP"
                            className={classs.file}
                            type="file"
                            onChange={handleSelectdImg}
                            />
                    </TabPanel>
                    <TabPanel value="2">



                        <FormControl fullWidth>
                            <TextField
                                id="skill"
                                label="skill"
                                onChange={(e) => { setSkill(e.target.value) }}
                                multiline
                                rows={5}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="experience"
                                label="experience"
                                onChange={(e) => { setExperience(e.target.value) }}
                                multiline
                                rows={5}
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="description"
                                label="Descripción"
                                onChange={(e) => { setDescription(e.target.value) }}
                                multiline
                                rows={6}
                                variant="outlined"
                            />
                        </FormControl>
                        <input
                            accept="image/*"
                            id="photoS"
                            name="fotoS"
                            className={classs.file}
                            type="file"
                            onChange={handleSelectdImg}
                            />
                    </TabPanel>
                </TabContext>



                <div>
                    <Button onClick={addNew} variant="contained">
                        Crear
                    </Button>
                </div>
            </form>
        </Box >
    );
}

const useStyles = makeStyles((theme) => ({
    boxInput: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        marginBottom: 500,
    },
    file: {
        margin: 10
    },

}));
export default Create;