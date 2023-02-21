import React from 'react';
import '../Styles/header.css';
import '../Styles/footer.css';
import '../Styles/quicksearch.css';
import { withRouter } from 'react-router-dom';

class QuickSearch extends React.Component
{
    mealClick = ( mealTypeId ) => {
        const location  = sessionStorage.getItem('locationId')
        if(location)
        {
            this.props.history.push(`/restaurantfilter?mealtype=${mealTypeId}&location=${location}`);
        }
        else
        {
            this.props.history.push(`/restaurantfilter?mealtype=${mealTypeId}`);
        }
        
        
    }
    render()
    {
        const { quicksearch } = this.props;
        return(
            <div>
                <div class="container">
                    <p className="text-black fs-2 mb-1" style={{fontFamily: '"Poppins", sans-serif', textShadow: '50%'}}>Quick Searches</p>
                    <p className="text-black-50 text-light fs-6 pb-4" style={{fontFamily: '"Poppins", sans-serif', textShadow: '50%'}}>Discover restaurants by type of meal</p>    

                    // <div class="quicksearch">Quick Searches</div>
                    // <div class="subheading">Discover restaurants by type of meal</div>

                    <div className="container-fluid">
                        <div class="row">

                            {/* Column 1 */}
                            { quicksearch.map((item) =>
                                {
                                    return <div class="col-sm-12 col-md-6 col-lg-4" onClick={() => this.mealClick(item.meal_type)}>
                                                <div class="tileContainer">
                                                    <div class="tileComponent1">
                                                        <img src= {item.image} height={160} width={160} /></div>
                                                    <div class="tileComponent2">
                                                        <div class="componentHeading">{item.name}</div>
                                                        <div class="componentSubHeading">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                )
                            }
                        </div>
                    </div>            
                </div>      
            </div>
        )
    }
}

export default withRouter(QuickSearch);