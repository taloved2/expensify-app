import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter} from '../actions/filters';
import {sortByAmount, sortByDate, setStartDate, setEndDate,setMaxAmount,setMinAmount,setNoteFilter} from '../actions/filters';

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null,

    };
    
    onDatesChange= ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) =>{
        this.setState(() => ({ calendarFocused }));
    }
    onSortChange = (e)=>{
        e.target.value==='date'?
        this.props.sortByDate() 
        :
        this.props.sortByAmount()
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };
    onNoteChange = (e)=>{
        this.props.setNoteFilter(e.target.value);
    };
    onMinAmountChange = (e)=>{
        e.target.value === ''?
        this.props.setMinAmount(0)
        :
        this.props.setMinAmount(e.target.value);
    };
    onMaxAmountChange = (e)=>{
        e.target.value === ''?
        this.props.setMaxAmount(0)
        :
        this.props.setMaxAmount(e.target.value);
    };
    render(){
        return (
            <div className="content-container">
                <div >
                    <h2 className ="input-group__title">Search Option</h2>
                </div>
                <div className="input-group-1">
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            placeholder="Search description" 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                            className="text-input"
                        />
                    </div>
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            placeholder="Search note" 
                            value={this.props.filters.note} 
                            onChange={this.onNoteChange}
                            className="text-input"
                        />
                    </div>
                   <div className="input-group__item">
                       <input 
                            type="number" 
                            placeholder="Min amount" 
                            onChange={this.onMinAmountChange}
                            className="text-input"
                        />
                    </div>

                    <div className="input-group__item">
                        <input 
                            type="number" 
                            placeholder="Max amount" 
                            onChange={this.onMaxAmountChange}
                            className="text-input"
                        />
                    </div>
                </div>
                <div className="input-group-2">
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                         >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange = {this.onDatesChange}
                            focusedInput = {this.state.calendarFocused}
                            onFocusChange = {this.onFocusChange}
                            numberOfMonths = {1}
                            isOutsideRange = {()=>false}
                            showClearDates = {true}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setMaxAmount: (maxMount) => dispatch(setMaxAmount(maxMount)),
    setMinAmount: (minMount) => dispatch(setMinAmount(minMount)),
    setNoteFilter: (note) => dispatch(setNoteFilter(note))
    
});

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);