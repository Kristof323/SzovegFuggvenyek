import {useState} from 'react';

function SzovegKezeloFuggvenyek() {
    const [value, setValue] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <input value={value} onChange={handleChange} />
            <br />
            <div>User Input:- {value}</div>

            <div>
                {value.length === 0 ? <div >Még nem írt be egyetlen karaktert sem.</div>:
                
                <div>Beírt karakterek száma: {value.length}</div>}
                <button></button>
            </div>

        </div>  
    );
}

export default SzovegKezeloFuggvenyek;