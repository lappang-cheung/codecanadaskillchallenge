import React, { Component, Fragment } from 'react'

import data from './data/data.json'

export default class App extends Component {

    state = {
        data: data,
        categoryTitle: []
    }

    componentDidMount = () => {
        this.getCategoryTitle()
    }

    getCategoryTitle = () => {
        let prevCategory = ''
        let title = []
        const find = x => x.violation_category === prevCategory

        for (let i = 0; i < this.state.data.length; i++){
            if(prevCategory !== this.state.data[i].violation_category){
                prevCategory = this.state.data[i].violation_category
                if(title.findIndex(find) < 0){
                    title.push({violation_category: prevCategory})
                }
            }
        }

        this.setState({ categoryTitle: title }, () => { 
        // console.log(this.state.categoryTitle)
        })
    }

    // getVoilationPerCategory = (category) => {
    // let count = 0

    // for(let i = 0; i < this.state.data.length; i++){
    // if(category === this.state.data[i].violation_category){
    // count +=1
    // }
    // }
    // return count
    // }

    getSortedPerCategory = (category) => {
        let sortCat = []

        for(let i = 0; i < this.state.data.length; i++){
            if(category === this.state.data[i].violation_category){
                sortCat.push(this.state.data[i])
            }
        }
        // console.log(sortCat.sort((a,b) => new Date(a.violation_date) - new Date(b.violation_date)))

        return sortCat.sort((a,b) => new Date(a.violation_date) - new Date(b.violation_date))
    }



   
    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1 className="text-justify text-center">Code For Canada Skills Challenge 2018</h1>
                </div>
                <div className="container">
                
                    <div class="row justify-content-md-center">
                        {
                            this.state.categoryTitle.map((title, index) =>
                            <div class="col-md-4">
                                <h3 key={index}>{title.violation_category}</h3>
                                { 
                                    <Fragment>
                                    <p> The number of voilation is {this.getSortedPerCategory(title.violation_category).length} </p>
                                    <p>The earliest voilation reported was on {this.getSortedPerCategory(title.violation_category)[0].violation_date}</p>
                                    <p>The latest voilation reported was on {this.getSortedPerCategory(title.violation_category)[this.getSortedPerCategory(title.violation_category).length - 1].violation_date}
                                    </p>
                                    </Fragment>
                                }
                            </div>
                            )
                        }
                    </div>
                </div>
            </Fragment> 
        )
    }
}