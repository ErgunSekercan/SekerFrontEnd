import { Component } from 'react'

 class LifeCycleMethods extends Component {
    // ! 1.componentin oluşmasında çalışır
    constructor(props){
        console.log("constructor running")
        super(props)
        this.state = {
            count : 0
        }

    }

handleInc = () => {
    this.setState({
        count : this.state.count + 1
    })
}

    //! 3. dom aeklendiğinde çalışır
    componentDidMount(){
        console.log("componentDidMount running")
    }
    //! 4. her update de çalışır
    componentDidUpdate(){
        console.log("componentDidUpdate running")
        alert("sayfa güncellendi")
    }

    //! 5. component kaldırıldığında yapılacak işlemler

    componentWillUnmount(){
        console.log("componentWillUnmount running")
    }


  render() {
    // ! 2. her render da çalışır
    console.log("render running")
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handleInc}>Inc</button>




      </div>
    )
  }
}

export default LifeCycleMethods
