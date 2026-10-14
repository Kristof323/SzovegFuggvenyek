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
                <button onClick={() => setValue(value.toUpperCase())}>Nagybetűs</button>
                <button onClick={() => setValue(value.toLowerCase())}>Kisbetűss</button>
                <button onClick={() => setValue("")}>Visszaállít</button>
                <button onClick={() => setValue(value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))}>minden Szókezdő nagybetű</button>
                <button onClick={() => setValue(value.charAt(0).toUpperCase() + value.slice(1))}>mondatkezdő nagybetű</button>
            </div>

        </div>  
    );
}

export default SzovegKezeloFuggvenyek;