import {useState} from 'react';

function SzovegKezeloFuggvenyek() {
    const [value, setValue] = useState("");
    const [originalValue, setOriginalValue] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        setOriginalValue(e.target.value);
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
                <button onClick={() => setValue(value.toUpperCase())}>Nagybetűs</button> <br />
                <button onClick={() => setValue(value.toLowerCase())}>Kisbetűss</button> <br />
                <button onClick={() => setValue("")}>Visszaállít</button> <br />
                <p>Haladó feladatok</p>
                <button onClick={() => setValue(value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))}>minden Szókezdő nagybetű</button> <br />
                <button onClick={() => setValue(value.charAt(0).toUpperCase() + value.slice(1))}>mondatkezdő nagybetű</button> <br />
                <button onClick={() => setValue(originalValue.split("").reverse().join(""))}>Szövegirány visszafelé</button> <br />
                <button onClick={() => setValue(originalValue)}>Szövegirány normál</button> <br />
                <button onClick={() => setValue(value.split("").reverse().join(""))}>Szövegirány kapcsoló</button> <br />
                


            </div>

        </div>  
    );
}

export default SzovegKezeloFuggvenyek;