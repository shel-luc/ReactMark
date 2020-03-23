import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let marked= require("marked");

class App extends Component{
  state = {
    markdown:" # Welcome to my React Markdown Previewer\n ## This is a sub-heading...\n ### And here's some other cool stuff:\n There's also [links](https://www.freecodecamp.com)\n- And of course there are lists.\n - Some are bulleted.\n - With different indentation levels.\n - That look like this. \n - Even if you use dashes or asterisks.\n * And last but not least, let's not forget embedded images: \n 1. And there are numbererd lists too. \n 2. Use just 1s if you want! \n 3. But the list goes on...\n\n\n\n\n ![React Logo w/ Text](https://goo.gl/Umyytc)"
  }
  
  
updateMarkdown =function(markdown){
  this.setState({markdown})
}
  
  

render() {
  let { markdown } = this.state;
    
  return(
    <div className="App container">
      <div id="editor">
      <form class="was-validated">
  <div class="mb-3">
  <h1>Editor</h1>
    <textarea class="form-control is-invalid" id="validationTextarea" rows="10" cols="40" placeholder="Required example textarea" required value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
      
    </div>
  </div>
        </form>
        <h1>Previewer</h1>
        <div id="previewer"> 
        <hr/>
    
          <div dangerouslySetInnerHTML= {{__html: marked(markdown)}}>
        
      </div>
        </div>
      </div>
        
      
    </div>
  )
}
}


ReactDOM.render(<App /> , document.getElementById('root'));

