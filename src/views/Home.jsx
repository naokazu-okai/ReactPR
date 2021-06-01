import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextCursor from '../conponts/TextCursorsFile/TextCursor';
import TextCursor2 from '../conponts/TextCursorsFile/TextCursor2';
import TextCursor3 from '../conponts/TextCursorsFile/TextCursor3';
import TextCursor4 from '../conponts/TextCursorsFile/TextCursor4';
import '../css/Home.css';

const Home = () => {

    const [openText,setOpenText] = useState();

    const introduction = () => {
        setOpenText (<TextCursor />);
    }
    
    const reconsideration = () => {
        setOpenText (<TextCursor2 />);
    }

    const hobby = () => {
        setOpenText (<TextCursor3 />);
    }

    const hobby2 = () => {
        setOpenText (<TextCursor4 />);
    }

    const close = () => {
        setOpenText ("");
    }

    return (
        <div>
            <div>
                {openText}
            </div>
            <Button variant="contained" onClick = { introduction }>自己紹介</Button>
            <Button variant="contained" onClick = { reconsideration }>反省点</Button>
            <Button variant="contained" onClick = { hobby }>趣味</Button>
            <Button variant="contained" onClick = { hobby2 }>趣味2</Button> 
            <Button variant="contained" onClick = { close }>会話終了</Button>
            <div className="back"></div>
        </div>
    );
}
    
export default Home;