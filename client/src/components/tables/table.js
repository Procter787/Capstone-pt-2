// import { FormHelperText } from '@material-ui/core'
// import { FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    header:{
        alignItems: 'center',
        textAlign: 'center',
        backgroundBlendMode: 'darken',
        fontSize: 50,
    },
    paragraph:{
        alignItems: 'center',
        textAlign: 'center',
        _padding: 60,
        get padding() {
            return this._padding
        },
        set padding(value) {
            this._padding = value
        },
        fontSize: 20,
    },
    tablecenter: {
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'white',
        borderCollapse: 'separate',
        borderRadius: 6
    },
    tablehead: {
        backgroundColor: '#ff7700'
    },
    imageCenter:{
        alignItems: "center",
        height: "auto",
        width: "40%"
    }
})