import React from 'react';
import Testing from './Testing';
import FormHandle from "./class-5-form-handling/FormHandle";
import Conditional from "./class-6-conditional-&-list-rendering/Conditional";
import List from "./class-6-conditional-&-list-rendering/List";
import UseEffect from './class-7-8-useEffect-promises/UseEffect';
import Promise from './class-7-8-useEffect-promises/Promise';
import Child from './class-useContext/Child';
import ChildRef from './class-useRef/ChildRef';

import OmContext from './context'
import Reducer from './class-useReducer/Reducer';

function App() {
  const [appTheme, setAppTheme] = React.useState({
    theme: 'light',
    color: 'green'
  })

  return (
    <OmContext.Provider value={appTheme} >
      <div>
        App.js
        {/* <FormHandle /> */}
        {/* <Conditional /> */}
        {/* <List /> */}
        {/* <UseEffect /> */}
        {/* <Promise /> */}
        {/* <Child /> */}
        {/* <Reducer/> */}

        <ChildRef />


      </div>

    </OmContext.Provider>
  );
}

export default App;
