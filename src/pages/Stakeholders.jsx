import React from "react";
import {
    Button,
    Grid,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Question from "../components/stakeholders/Question";

const stakeholders = [
    "A. Immigrants from Mexico seeking asylum",
    "B. Immigrants from Mexico engaging in trans-border criminal activity",
    "C. Immigrant children from Mexico who have been separated from families",
    "D. American citizens",
];

const prompts = [
    "Amount of tax money going toward border wall construction and border security",
    "Chances of being reunited with family",
    "Ease of unauthorized entry into United States",
    "Likelihood of being granted life-saving asylum in the United States",
    "Security of place of residence",
    "Job availability",
];

const Selection = (props) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ margin: "1rem 0 1rem 0" }}
        >
            <Grid item xs={2}>
                <Select>
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={9}>
                {props.prompt}
            </Grid>
        </Grid>
    );
};

const Stakeholders = () => {
    const question = "Which stakeholders are impacted?";

    return (
        <>
            <Question question={question} />
            <List dense={true}>
                {stakeholders.map((s) => {
                    return (
                        <ListItem>
                            <ListItemText primary={s} />
                        </ListItem>
                    );
                })}
            </List>
            <List dense={true}>
                {prompts.map((p) => {
                    return (
                        <Selection prompt={p} />
                    );
                })}
            </List>
            <Link to={{ pathname: "/end" }} style={{ textDecoration: "none" }}>
                <Button
                    style={{ marginLeft: 30, marginTop: 20 }}
                    variant="contained"
                    color="secondary"
                >
                Submit
                </Button>
            </Link>
        </>
    );
};

export default Stakeholders;
