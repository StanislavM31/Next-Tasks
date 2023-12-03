'use client';

export default function AddTask({inpValue, setInpValue, setButton}) {

    function showInpValue(){
        console.log(inpValue);
        setButton(inpValue)
    }
    function fillInput(e){
      setInpValue(e.target.value);
    }
  return (
    <>
      <div>
        <input type="text" onChange={fillInput}/>
        <button onClick={showInpValue}>Добавить</button>
      </div>
    </>
  );
}
