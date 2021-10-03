//hide the paragraph when the link is clicked

class Message extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a href="#">Interested in buying?</a>
        <p>Contact me here!</p>
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

console.log("Before click: " + rootElement.innerHTML);
document.querySelector("a").click();
console.log("After click: " + rootElement.innerHTML);

//function handler: document.getElementByTagName("a") returns an array; when clicked, return the index of the a tag
