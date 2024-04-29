function customRender(element,conatiner){
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    for (const prop in element.props) {
        console.log(prop)
       domElement.setAttribute(prop,element.props[prop])
    }
    conatiner.appendChild(domElement)
}

const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click here to go to google"
}

const mainContainer= document.getElementById('root')
customRender(reactElement,mainContainer)
