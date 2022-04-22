import React from 'react';
import app from '../firebase'
import Box from '../components/Box'
import NumberFormat from 'react-number-format';
import { TextField, Button, FormControl } from '@mui/material'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { makeStyles } from '@material-ui/core/styles'

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
    const [user, setUser] = React.useState("");
    // const [price, setPrice] = React.useState();
    // const [reference, setReference] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [description, setDescription] = React.useState("");
    // const [size, setSize] = React.useState("");
    // const [weight, setWeight] = React.useState(0);
    const [contact, setContact] = React.useState("");
    const [photo, setPhoto] = React.useState();
    const [photo2, setPhoto2] = React.useState();
    const [photo3, setPhoto3] = React.useState();
    const [photo4, setPhoto4] = React.useState();
    // const [photoUrl, setPhotoUrl] = React.useState("");
    const [skill, setSkill] = React.useState("");
    const [experience, setExperience] = React.useState("");
    const [selectdImg, setSelectdImg] = React.useState(false);
    const [value, setValue] = React.useState('2');
    const classs = useStyles();

    const addNew = async () => {
        var collectionName = "service"
        // collectionName = (value === "1") ? "product" : "service"

        const collectionRef = app.firestore().collection(collectionName)
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(photo.name)
        const archivoPath2 = storageRef.child(photo2.name)
        const archivoPath3 = storageRef.child(photo3.name)
        const archivoPath4 = storageRef.child(photo4.name)
        await archivoPath.put(photo)
        await archivoPath2.put(photo2)
        await archivoPath3.put(photo3)
        await archivoPath4.put(photo4)
        const urlImgStor = await archivoPath.getDownloadURL();
        const urlImgStor2 = await archivoPath2.getDownloadURL();
        const urlImgStor3 = await archivoPath3.getDownloadURL();
        const urlImgStor4 = await archivoPath4.getDownloadURL();
        const docu = await collectionRef.doc(name).set(
            {
                contact: contact,
                email: email,
                user: user,
                description: description,
                experience: experience,
                skill: skill,
                name: name,
                type: "Servicio",
                urlImage: urlImgStor,
                gallery: {
                    urlImage1: urlImgStor2,
                    urlImage2: urlImgStor3,
                    urlImage3: urlImgStor4,

                }
            }
        ).catch(error => {
            console.error(error.message)
        })
        window.location.reload(false)

    }

    const handleSelectdImg = (e) => {
        setPhoto(e.target.files[0])
        setSelectdImg(true)
    };
    const handleSelectdImgGallery = (e) => {
        setPhoto2(e.target.files[0])
        setPhoto3(e.target.files[1])
        setPhoto4(e.target.files[2])
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
                            <Tab label="Servicio" value="2" />
                        </TabList>
                    </AppBar>
                    <FormControl className={classs.boxInput}>
                        <TextField id="titulo" name="titulo" onChange={(e) => {
                            setName(e.target.value)
                        }} label="Titulo*" variant="outlined" />

                    </FormControl>
                    <FormControl className={classs.boxInput}>
                        <TextField id="nombre" name="nombre" onChange={(e) => {
                            setUser(e.target.value)
                        }} label="Nombre completo*" variant="outlined" />

                    </FormControl>
                    <FormControl className={classs.boxInput}>
                        <TextField id="email" name="email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} label="Correo*" variant="outlined" />

                    </FormControl>
                    <FormControl>
                        <TextField id="contacto" name="contacto" onChange={(e) => {
                            setContact(e.target.value)
                        }} label="Número celular*" variant="outlined" />

                    </FormControl>
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
                        <FormControl>
                            Foto de portada*
                            <input
                                accept="image/*"
                                id="photoS"
                                name="fotoS"
                                className={classs.file}
                                type="file"
                                onChange={handleSelectdImg}
                            />
                        </FormControl>
                        <FormControl>
                            Fotos de galeria (Maximo 3)
                            <input
                                accept="image/*"
                                id="photoG"
                                multiple
                                name="fotoG"
                                className={classs.file}
                                type="file"
                                onChange={handleSelectdImgGallery}
                            />
                        </FormControl>

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