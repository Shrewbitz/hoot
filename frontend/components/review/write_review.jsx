import React from 'react';
import { Link } from 'react-router-dom';

class WriteReview extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = {
            score: 0,
            body: "",
            errors: this.props.errors,
            user_id: this.props.session.id,
            restaurant_id: window.location.hash.split("/")[2]

        };
        // this.render = this.render.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        // this.rate1 = this.rate1.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.rate = this.rate.bind(this); 
    };


    rateHover(e) {
        e.preventDefault();
        let rating = Number(e.currentTarget.getAttribute('value'));
        switch (rating) {
            case 5:
                document.getElementById("rate1").style.backgroundColor="red"; 
                document.getElementById("rate2").style.backgroundColor="red"; 
                document.getElementById("rate3").style.backgroundColor="red"; 
                document.getElementById("rate4").style.backgroundColor="red"; 
                document.getElementById("rate5").style.backgroundColor="red";
                document.getElementById("rate-text").innerHTML="Woohoo! As good as it gets!";  
                break;
            case 4:
                document.getElementById("rate1").style.backgroundColor="orangered";
                document.getElementById("rate2").style.backgroundColor="orangered";
                document.getElementById("rate3").style.backgroundColor="orangered";
                document.getElementById("rate4").style.backgroundColor="orangered";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Yay! I'm a fan.";  
                break;
            case 3:
                document.getElementById("rate1").style.backgroundColor="peru";   
                document.getElementById("rate2").style.backgroundColor="peru";   
                document.getElementById("rate3").style.backgroundColor="peru";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="A-OK."; 
                break;   
            case 2:
                document.getElementById("rate1").style.backgroundColor="goldenrod";
                document.getElementById("rate2").style.backgroundColor="goldenrod";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Meh! I've experienced better."; 
                break;  
            case 1:
                document.getElementById("rate1").style.backgroundColor="yellow";   
                document.getElementById("rate2").style.backgroundColor="gray";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="Eek! Methinks not."; 
                break;
            default:
                break;
        }
    }

    rateLeave(e) {
        // e.preventDefault();
        debugger
        let rating = e;
        switch (rating) {
            case 5:
                document.getElementById("rate1").style.backgroundColor="red"; 
                document.getElementById("rate2").style.backgroundColor="red"; 
                document.getElementById("rate3").style.backgroundColor="red"; 
                document.getElementById("rate4").style.backgroundColor="red"; 
                document.getElementById("rate5").style.backgroundColor="red";
                document.getElementById("rate-text").innerHTML="Woohoo! As good as it gets!";  
                break;
            case 4:
                document.getElementById("rate1").style.backgroundColor="orangered";
                document.getElementById("rate2").style.backgroundColor="orangered";
                document.getElementById("rate3").style.backgroundColor="orangered";
                document.getElementById("rate4").style.backgroundColor="orangered";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Yay! I'm a fan.";  
                break;
            case 3:
                document.getElementById("rate1").style.backgroundColor="peru";   
                document.getElementById("rate2").style.backgroundColor="peru";   
                document.getElementById("rate3").style.backgroundColor="peru";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="A-OK."; 
                break;   
            case 2:
                document.getElementById("rate1").style.backgroundColor="goldenrod";
                document.getElementById("rate2").style.backgroundColor="goldenrod";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Meh! I've experienced better."; 
                break;  
            case 1:
                document.getElementById("rate1").style.backgroundColor="yellow";   
                document.getElementById("rate2").style.backgroundColor="gray";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="Eek! Methinks not."; 
                break;
            // case 0:
            //     debugger
            //     document.getElementById("rate1").style.backgroundColor="gray";   
            //     document.getElementById("rate2").style.backgroundColor="gray";  
            //     document.getElementById("rate3").style.backgroundColor="gray";  
            //     document.getElementById("rate4").style.backgroundColor="gray";  
            //     document.getElementById("rate5").style.backgroundColor="gray"; 
            //     document.getElementById("rate-text").innerHTML="Select your rating"; 
            //     break;
            default:
                break;
        }
    }

    rate(e) {
        e.preventDefault();
        let rating = Number(e.currentTarget.getAttribute('value'));
        switch (rating) {
            case 5:
                document.getElementById("rate1").style.backgroundColor="red"; 
                document.getElementById("rate2").style.backgroundColor="red"; 
                document.getElementById("rate3").style.backgroundColor="red"; 
                document.getElementById("rate4").style.backgroundColor="red"; 
                document.getElementById("rate5").style.backgroundColor="red";
                document.getElementById("rate-text").innerHTML="Woohoo! As good as it gets!";  
                break;
            case 4:
                document.getElementById("rate1").style.backgroundColor="orangered";
                document.getElementById("rate2").style.backgroundColor="orangered";
                document.getElementById("rate3").style.backgroundColor="orangered";
                document.getElementById("rate4").style.backgroundColor="orangered";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Yay! I'm a fan.";  
                break;
            case 3:
                document.getElementById("rate1").style.backgroundColor="peru";   
                document.getElementById("rate2").style.backgroundColor="peru";   
                document.getElementById("rate3").style.backgroundColor="peru";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="A-OK."; 
                break;   
            case 2:
                document.getElementById("rate1").style.backgroundColor="goldenrod";
                document.getElementById("rate2").style.backgroundColor="goldenrod";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray";
                document.getElementById("rate-text").innerHTML="Meh! I've experienced better."; 
                break;  
            case 1:
                document.getElementById("rate1").style.backgroundColor="yellow";   
                document.getElementById("rate2").style.backgroundColor="gray";  
                document.getElementById("rate3").style.backgroundColor="gray";  
                document.getElementById("rate4").style.backgroundColor="gray";  
                document.getElementById("rate5").style.backgroundColor="gray"; 
                document.getElementById("rate-text").innerHTML="Eek! Methinks not."; 
                break;
            default:
                break;
        }
            this.setState({score: rating})
    }

    handleInput(type) {
        return(e) => {
            this.setState({body: e.target.value})
        };
    };
  

    handleSubmit(e) {
        e.preventDefault();
        let x = this.props.history
        let y = this.state.restaurant_id
        this.props.postReview(this.state)
        .then(() => {x.push(`/restaurant/${y}`)});
    };
            // , dberrors => { 
            //     this.setState({errors: dberrors.errors});
            // })   

    render() {

        return (
        <div className="review-center">
            <div className="review-box">
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <div className="review-box-inner">
                        <div className="rating-form">
                            <div onClick={this.rate} onMouseEnter={this.rateHover}  onMouseLeave={this.rateLeave(this.state.score)} id="rate5" value="5" className="rate5"><i className="fas fa-star"></i></div>
                            <div onClick={this.rate} onMouseEnter={this.rateHover} onMouseLeave={this.rateLeave(this.state.score)} id="rate4" value="4" className="rate4"><i className="fas fa-star"></i></div>
                            <div onClick={this.rate} onMouseEnter={this.rateHover} onMouseLeave={this.rateLeave(this.state.score)}  id="rate3" value="3" className="rate3"><i className="fas fa-star"></i></div>
                            <div onClick={this.rate} onMouseEnter={this.rateHover} onMouseLeave={this.rateLeave(this.state.score)} id="rate2" value="2" className="rate2"><i className="fas fa-star"></i></div>
                            <div onClick={this.rate} onMouseEnter={this.rateHover} onMouseLeave={this.rateLeave(this.state.score)} id="rate1" value="1" className="rate1"><i className="fas fa-star"></i></div>
                        </div>
                            <div id="rate-text">Select your rating</div>
                        <textarea onChange={this.handleInput()} value={this.state.body} placeholder="If you want to find the world’s best street burrito, look no further. Whenever I’m craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There’s so many things to try outside of burritos though. Better to place your order ahead of time to skip the line."/>
                    </div>
                    <button className="login-submit" onClick={this.handleSubmit}>Post Review</button>
                </form>
            </div>
        </div>
        )
    }
}
export default WriteReview;