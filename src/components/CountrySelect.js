/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountrySelect({ countries, changeHandler }) {
    const classes = useStyles();

    return (
        <Autocomplete
            id="country-select"
            style={{ width: 300 }}
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
                <React.Fragment>{option.name}</React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    fullWidth={true}
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
            onChange={changeHandler}
        />
    );
}
