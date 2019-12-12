import React from 'react';
import logo from '../netflixlogo/logo.png';
import { connect } from 'react-redux'
import '../App.css';


class NetFlix extends React.Component {

  render(){
    return(
      <div>
        <img src={logo} alt='logo' style={{height:'100px'}}/>
        <NetflixList
        listTitle="My List"
        renderList={this.props.myLists}
        handleFunction={this.props.removeItem}/>
        <NetflixList
        listTitle="Recommendations"
        renderList={this.props.recommendation}
        handleFunction={this.props.addItem}/>
        <h2>My list title</h2>
        <ul style={{color:'white'}}>
        {this.props.myLists.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      </div>
    );
  }
}
const NetflixList = props => {
  return (
    <React.Fragment>
      <h1>{props.listTitle}</h1>
      <ul className='myList'>
        {props.renderList.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <button id={item.id} onClick={() => props.handleFunction(item)}>
              {props.listTitle === "Recommendations" ? "Add" : "Remove"}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    myLists: state.myLists,
    recommendation: state.recommendation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch({ type: 'REMOVE_ITEM', item }),
    addItem: item => dispatch ({type:'ADD_ITEM', item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetFlix);
