import { Box, Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { getpage } from "../requests";
import parse from "html-react-parser";
import '../App.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export function News(props: any) {

    const [object, setObject] = useState<any>();

    useEffect(() => {
        const run = async () => {
            setObject(await getpage(props.id));
        }
        run();
    }, []);

    function Row(props: { object: any }) {
        const [open, setOpen] = useState(false);
        return (
            <Fragment>
                <IconButton
                    color="primary"
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse
                            key={object.id}
                            in={open}
                            timeout="auto"
                            unmountOnExit>
                            <div>{parse(object.body.storage.value)}</div>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </Fragment>
        );
    }

    return (
        <>
            <Typography>{props.title}</Typography>
            <Box maxWidth="80vw" maxHeight="80vh">
                {object && <Row object={object} />}
            </Box>
        </>
    )
} 