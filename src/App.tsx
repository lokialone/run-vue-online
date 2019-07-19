import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/vue/vue.js';

const App: React.FC = () => {
  let value:string = "funciton a(){console.log('dddd');}";
  let options:object = {
    mode: 'vue',
    theme: 'material',
    lineNumbers: true
  }
  // let runCode:string = '';
  return (
    <div className="App">
      <CodeMirror
          value={value}
          options={options}
          onChange={(editor, value) => {
            console.log('uncontrolled', {value});
            // runCode = value.text;
          }}
        />
    </div>
  );
}

export default App;
