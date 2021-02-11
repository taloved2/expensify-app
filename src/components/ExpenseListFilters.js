import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter} from '../actions/filters';
import {sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

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
    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                        type="text" 
                        placeholder="Search expenses" 
                        value={this.props.filters.text} 
                        onChange={this.onTextChange}
                        className="text-input"
                        />
                    </div>
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
    sortByDate: () => dispatch(sortByDate),
    sortByAmount: () => dispatch(sortByAmount),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
    
});

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);