import React, {Component} from 'react';
import history from '../../history';
import MaterialTable from 'material-table';
import '../../style.css'


class Eventcomp extends Component {

    constructor(props){
        super(props);
        this.state={
            username: '',
            columns: [
                { title: 'Event Name', field: 'name' },
                { title: 'Description', field: 'desc' },
                { title: 'Owner', field: 'owner' },
                { title: 'Stime', field: 'stime' },
                { title: 'Etime',field: 'etime' }
            ],
            data: [],
        }
        this.onRowDeletea=this.onRowDeletea.bind(this);
        // this.fetchdata=this.fetchdata.bind(this);
    }

    componentDidMount() {
        var str = history.location.pathname
        var array = str.split(":",2);


        const newEvnt = {
            username:array[1],
          };

        fetch("http://localhost:5000/event", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvnt)
        }).then( res => {
            return res.json();
        }).then(res2 => {
            if(res2.flag) {
                this.setState({data:res2.result});
            }
        }).catch( err => {
            console.log(err);
        });
        this.setState({username:array[1]});
        
    }
    fetchdata() {
        
        const newEvnt = {
            username:this.state.username,
        };
        fetch("http://localhost:5000/event", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvnt)
        }).then( res => {
            return res.json();
        }).then(res2 => {
            if(res2.flag) {
                this.setState({data:res2.result});
            }
        }).catch( err => {
            console.log(err);
        });
    }

    onRowDeletea(oldData){
        // console.log(oldData);
        const newEvnt = {
            username:oldData.owner,
            _id:oldData._id
          };

        fetch("http://localhost:5000/delete", {
            credentials: 'include',
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvnt)
        }).then( res => {
            return res.json();
        }).then(res2 => {
            if(res2.flag) {
                this.fetchdata();
            }
        }).catch( err => {
            console.log(err);
        });

    }
    render() {


        return (
            <MaterialTable
              columns={this.state.columns}
              data={this.state.data}
              editable={{
                onRowDelete:oldData=>
                new Promise(resolve=>{
                    setTimeout(()=>{
                        resolve();
                        this.onRowDeletea(oldData);
                    },600)
                })
              }}
            />
          );
    }
}


export default Eventcomp;





