import React, { Component } from 'react';
import './load.css';

class Load extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        visible: 2,
        error: false
      };
  
      this.loadMore = this.loadMore.bind(this);
    }
  
    loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 2};
      });
    }

    componentDidMount() {
      fetch("https://my-json-server.typicode.com/melawlah/jsonfile/stores").then(
        res => res.json()
      ).then(stores => {
        this.setState({
          items: stores
        });
      }).catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
    }

    render() {
      return (
        <section className="Container">
        <div className = 'head list'>
        <h4 className='tc'> Our Partners</h4>
            <p className ='blabla shh'>  Here are some of tha amazing pharmacies we partnered with to provide these drugs you cant find at affordable prices and they are tested to be originals.</p>
            </div>
          <div className="" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
                return (
                  <div className="list" key ={item.id}>
                  <div>  <br /> </div>
                    {/* <img src={ require(`./${item.img}`) } /> */}
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                    <p>{item.phoneNumber}</p>
                    <p>{item.email}</p>
                  </div>
                );
              })}
            </div>
            {this.state.visible < this.state.items.length &&
               <button onClick={this.loadMore} type="button" className="list2">Load more</button>
            }
          </section>
      );
    }
  }

  export default Load;
  

