import "./App.css";
import { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  return (
    <>
      <h1 className="mb-5 text-center">Good - Fast - Cheap</h1>

      <CheckBox
        text="GOOD"
        checkA={check1}
        setCheckA={setCheck1}
        checkB={check2}
        setCheckB={setCheck2}
        checkC={check3}
        setCheckC={setCheck3}
      />
      <CheckBox
        text="FAST"
        checkA={check2}
        setCheckA={setCheck2}
        checkB={check1}
        setCheckB={setCheck1}
        checkC={check3}
        setCheckC={setCheck3}
      />
      <CheckBox
        text="CHEAP"
        checkA={check3}
        setCheckA={setCheck3}
        checkB={check2}
        setCheckB={setCheck2}
        checkC={check1}
        setCheckC={setCheck1}
      />
    </>
  );
}

export default App;
